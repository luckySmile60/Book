<template>
  <div class="container">
    <header class="text-left">
      <router-link to="/Home">
        <img src="../../assets/img/taoshu-logo.jpg" alt />
      </router-link>
    </header>
    <div class="box">
      <div class="img">
        <router-link to="/Product" class="text-primary">Book!</router-link>
        <img style="width:100px;height:110px" src="../../assets/img/t.jpg" alt />
      </div>
      <div class="product_app">
        <!-- 添加一个商品 start-->
        <div class="goods-item" v-for="(item,i) of list" :key="i">
          <!-- 商品图片 -->
          <img class :src="'http://127.0.0.1:3000/'+item.pic" alt />
          <!-- 商品名称 -->
          <span class="sp">书名：{{item.pname}}</span>
          <span class="sp">作者：{{item.author}}</span>
          <span class="sp">出版社：{{item.category}}</span>
          <span class="price text-danger">价格：￥{{item.price}}</span>
          <!-- 加入购物车按钮 -->
          <button
            @click="addcart"
            :data-pname="item.pname"
            :data-pid="item.pid"
            :data-price="item.price"
          >加入购物车</button>
        </div>
        <!-- 添加一个商品 end -->
      </div>
      <!-- 查看购物车按钮 -->
      <div class="bt">
        <!-- 加载更多 按钮 -->
        <button @click="loadMore" class="btn border-danger">加载更多</button>
        <button @click="jumpCart" class="btn border-danger">查看购物车</button>
      </div>
    </div>
    <footer>
      <div class="border-top mt-3">
        <span
          class="d-block text_small text-muted mt-2"
          align="center"
        >关于淘书&nbsp;&nbsp;&nbsp;诚征英才&nbsp;&nbsp;&nbsp;图书目录&nbsp;&nbsp;&nbsp;免责条款&nbsp;&nbsp;&nbsp;联系我们</span>
        <span
          class="d-block text_small text-muted mt-2"
          align="center"
        >Copyright © Mint&淘书网 Taoshu.com 版权所有</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  // 组件创建成功后立即调用此函数
  created() {
    // 调用加载商品列表函数
    this.loadMore();
  },
  data() {
    return {
      pno: 0, //第几页(页码)
      list: [] //查询结果
    };
  },
  methods: {
    jumpCart(event) {
      var url = "findcart";
      var pid = event.target.dataset.pid;
      var obj = { pid };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res);
        if (res.data.code == -1) {
          alert("请登录");
          //  this.$router.push("/Login")
        } else {
          this.$router.push("/Cart");
        }
      });
    },
    addcart(event) {
      //  功能：添加购物车
      // 获取 价格 商品名称 商品编号
      var price = event.target.dataset.price;
      var pname = event.target.dataset.pname;
      var pid = event.target.dataset.pid;
      console.log(price + ":" + pname + ":" + pid);
      // 发送ajax
      var url = "addcart";
      var obj = { pid, pname, price };
      this.axios
        .get(url, { params: obj })
        .then(res => {
          console.log(res);
          if (res.data.code == -1) {
            alert("请登录");
            this.$router.push("/Login");
          } else {
            alert("添加成功");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadMore() {
      // 获取服务器商品列表
      // 1:创建变量url保存请求路径
      var url = "product";
      // 2：自增页码
      this.pno++;
      // 3：创建参数对象
      var obj = { pno: this.pno };
      // 4：发送ajax请求
      this.axios
        .get(url, { params: obj })
        .then(res => {
          // 保存服务器返回数据
          //将赋值改拼接
          //  console.log(res)
          // this.list=res.data.data;
          // 5：获取服务器返回结果并且保存list中
          this.list = this.list.concat(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.box {
  display: flex;
}
/* 最外层父元素 弹性布局*/
.product_app {
  display: flex; /*子元素换行*/
  flex-wrap: wrap; /*子元换行*/
  justify-content: space-between; /*两端对齐*/
  padding: 4px;
  width: 420px;
  margin-left: 20%;
}
/* 修饰商品样式 */
.goods-item {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 2px 0; 
  padding: 2px;
  box-sizing: border-box; /*重新计算盒子*/
  display: flex;
  flex-direction: column;
  min-height: 257px;
}

/* 图片样式 */
.goods-item img {
  width: 120px;
  height: 120px;
  margin-left: 2.5rem;
  margin-top: 1rem;
  transition: 1s;
}
.goods-item img:hover {
  transform: scale(1.1);
}
.goods-item>button{
    font-size:10px;
    margin-top:6px;
}
.sp {
  margin-left: 2.3rem;
  font-size:12px;
  margin-top:6px;
}
.price {
  margin-left: 2.5rem;
  font-size:10px;
  margin-top:6px;
}
.bt {
  position: fixed;
  right: 3%;
  top: 30%;
}
.btn{
    font-size:12px;
}
.img {
  position: fixed;
  left: 8%;
  top: 26%;
}

</style>



