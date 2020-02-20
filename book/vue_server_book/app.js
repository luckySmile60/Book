//功能： 服务器端程序
// 1:下载四个模块
// express web服务器
// mysql   mysql驱动
// cors   处理跨域
// express-session  会话session对象
// 2：vue_server_book/进行命令行
//  npm i mysql express express-session cors
// 3:加载四个第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

// 4:配置数据库连接池：基本效率高保证
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "book",
  port: 3306,
  connectionLimit: 20
});
// 5:创建web服务器
var server = express();

// 中间件 bodyParser中间件
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// 6:配置跨域 允许程序列表
// http://127.0.0.1:8080
// http://localhost:8080
server.use(
  cors({
    origin: [
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:8081",
      "http://localhost:8081"
    ],
    credentials: true //每次请求验证
  })
);
// 7：配置session环境
server.use(
  session({
    secret: "128安全字符串",
    resave: true, //请求更新数据
    saveUninitialized: true //保存初始数据
  })
);
//8:配置静态目录 public
//8.1:创建public
server.use(express.static("public"));
// 9:启动监听端口 3000
server.listen(3000);
console.log("server is running at http://127.0.0.1:3000");

// 功能一：用户登录
server.get("/login", (req, res) => {
  // 1:获取参数uname/upwd
  // 脚手架传数
  // http://127.0.0.1:3000?uname=pb&upwd=123456
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  console.log(1 + ":" + uname + ":" + upwd);
  // 2:创建sql语句
  var sql = "SELECT uid FROM book_user WHERE uname=? AND upwd=?";
  // 3:执行sql语句
  pool.query(sql, [uname, upwd], (err, result) => {
    //err 严重错误，程序停止
    if (err) throw err;
    // 4:判断执行是否成功
    if (result.length == 0) {
      res.send({ code: -1, msg: "用户名或密码有误" });
      return;
    } else {
      // 4.1:登录成功后将登录凭证id保存session对象
      // 4.2：获取当前登录用户id
      var uid = result[0].uid;
      // 4.3:将用户uid保存session对象
      req.session.uid = uid;
      console.log(req.session);
      res.send({ code: 1, msg: "登录成功", data: uid });
      console.log(result);
    }
  });
});
//测试：
//1:启动服务器 node app.j
//2:打开浏览器在址栏
//http://127.0.0.1:3000/login?uname_email=木木&upwd=123
//http://127.0.0.1:3000/login?uname_email=tom&upwd=123

// 功能二：用户注册
server.post("/register", (req, res) => {
    console.log(req.body);
  // 获取数据
  var uname = req.body.uname;
  var email = req.body.email;
  var upwd = req.body.upwd;
  var reupwd = req.body.reupwd;
  // 查询该用户名是否已被注册
  var sql = "SELECT uid FROM book_user WHERE uname=?";
  //执行sql
  pool.query(sql, [uname], (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      var obj = { uname, email, upwd, reupwd };
      var sql = `INSERT INTO book_user SET ?`;
      pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({ code: 1, msg: "注册成功" });
        }
      });
    } else {
      res.send({ code: 0, msg: "该用户名已被注册" });
    }
  });
});
//http://127.0.0.1:3000/register?uname=lom&email=123@qq.com&upwd=123456&reupwd=123456

//功能三:查询服务器商品列表
// 接收请求 get /product
server.get("/product", (req, res) => {
  // 获取(脚手架发来)数据 pno(页码) pageSize(一页几行)
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  // 设置数据默认值
  if (!pno) {
    pno = 1;
  }
  if (!ps) {
    ps = 6;
  }
  // 创建变量offset计算数据库第一参数
  var offset = (pno - 1) * ps;
  // 给pageSize造型整型
  ps = parseInt(ps);
  // 创建sql 查询当前页内容
  var sql1 =
    "SELECT pid,pname,author,category,pic,price FROM book_product LIMIT ?,?";
  // 发送sql语句
  pool.query(sql1, [offset, ps], (err, result) => {
    // 查询成功的回调函数 sql1
    if (err) throw err;
    // 查询结果
    var data = result;
    // 在执行成功回调函数中创建第二条 sql2
    var sql2 = "SELECT count(pid) AS c FROM book_product";
    // 查询记录总数
    pool.query(sql2, (err, result) => {
      if (err) throw err;
      var pageCount = Math.ceil(result[0].c / ps);
      res.send({
        code: 1,
        msg: "查询成功",
        data: data,
        pageCount: pageCount
      });
    });
  });
});

//查询：
//http://127.0.0.1:3000/product

// 功能四：添加购物车
// get /addcart
server.get("/addcart", (req, res) => {
  // 获取当前登录用户uid
  var uid = req.session.uid;
  // 如果用户没有登录
  if (!uid) {
    // 返回错误信息 请登录
    res.send({ code: -1, msg: "请登录" });
    return;
  }
  // 获取商品编号 商品价格 商品名称
  var pid = req.query.pid;
  var price = req.query.price;
  var pname = req.query.pname;
  // 查询指定用户是否购买过此商品
  var sql = "SELECT id FROM book_cart WHERE uid=? AND pid=? ";
  // 执行sql
  pool.query(sql, [uid, pid], (err, result) => {
    if (err) throw err;
    // 如果用户没有购买过此商品添加
    // 如果用户已经购买过此商品更新数量
    if (result.length == 0) {
      var sql = `INSERT INTO book_cart VALUES(null,${uid},${pid},${price},'${pname}',1)`;
    } else {
      var sql = `UPDATE book_cart SET count=count+1 WHERE uid=${uid} AND pid=${pid}`;
    }
    //执行sql并且将结果返回用户
    pool.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ code: 1, msg: "添加成功" });
    });
  });
});

//session对象如果服务器重新启动
//丢失
//测试
//http://127.0.0.1:3000/addcart?pid=5&pname=微雪&price=19.90
//请登录
//http://127.0.0.1:3000/login?uname=mint&upwd=666666
//http://127.0.0.1:3000/addcart?pid=5&pname=微雪&price=19.90
//刷新浏览器 count=4

// 功能五：查询当前登录用户购物车列表
server.get("/findcart", (req, res) => {
  // 获取session中uid
  var uid = req.session.uid;
  // 如果uid为空
  // 请登录
  if (!uid) {
    res.send({ code: -1, msg: "请登录" });
    return;
  }
  // 创建sql语句查询用户购物车列表
  var sql = "SELECT id,pid,pname,price,count FROM book_cart WHERE uid=?";
  // 发送sql语句
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err;
    res.send({ code: 1, msg: "查询成功", data: result });
  });
});

//测试
//http://127.0.0.1:3000/findcart
//请登录
//http://127.0.0.1:3000/login?uname=mint&upwd=666666
//http://127.0.0.1:3000/findcart

////功能六:删除指定用户购物车中一个商品
server.get("/del", (req, res) => {
  var uid = req.session.uid;
  if (!uid) {
    res.send({ code: -2, msg: "请登录" });
    return;
  }
  // 参数
  var id = req.query.id;
  var sql = "DELETE FROM book_cart WHERE id=?";
  // json
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    // affectedRows影响行数
    if (result.affectedRows > 0) {
      res.send({ code: 1, msg: "删除成功" });
    } else {
      res.send({ code: -1, msg: "删除失败" });
    }
  });
});

//进入mysql select * from book_cart;
//http://127.0.0.1:3000/del?id=4
//http://127.0.0.1:3000/login?uname=mint&upwd=666666
//http://127.0.0.1:3000/del?id=4

//功能七:删除指定用户购物车中多个商品
server.get("/delm", (req, res) => {
  //功能:删除多个商品
  //1:获取登录用户uid
  var uid = req.session.uid;
  //2:如果没有uid -2
  if (!uid) {
    res.send({ code: -2, msg: "请登录" });
    return;
  }
  //3:获取参数 ids
  var ids = req.query.ids;
  console.log(ids);
  //4:创建sql语句
  var sql = `DELETE FROM book_cart WHERE id IN (${ids})`;
  console.log(sql);
  //5:发送sql
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ code: 1, msg: "删除成功" });
    } else {
      res.send({ code: -1, msg: "删除失败" });
    }
  });
  //6:获取数据库返回结果
  //7:发送脚手架
});

//进入mysql select * from book_cart;
//http://127.0.0.1:3000/delm?ids=2,3
//http://127.0.0.1:3000/login?uname=mint&upwd=666666
//http://127.0.0.1:3000/delm?ids=2,3

//   功能八：查询搜索框中的书籍是否存在，在哪?
server.get("/findbook", (req, res) => {
  var pname = req.query.pname;
  var sql =
    "SELECT pid,pname,category,decrible,author FROM book_product WHERE pname=?";
  // 发送sql语句
  pool.query(sql, [pname], (err, result) => {
    console.log(result);
    if (err) throw err;
    if (result.length == 0) {
      res.send({ code: -1, msg: "这本书不存在" });
    } else {
      res.send({ code: 1, msg: "存在此书", data: result });
    }
  });
});
