<template>
  <div class="container">
    <header class="text-left">
      <router-link to="/Home">
        <img src="../../assets/img/taoshu-logo.jpg" alt />
      </router-link>
      <span class="t1">购物车</span>
    </header>
    <div class="cart">
      <!-- 顶部复选框：全选 -->
      <div class="selecAll mt-3">
        全选
        <input type="checkbox" class="ml-1" v-model="allcb" @change="selectAll" />
      </div>
      <!-- 中间购物车列表 -->
      <div class="cart-item" v-for="(item,i) of list" :key="i">
        <div class="lefttxt">
          <input type="checkbox" v-model="item.cb" @change="changeItem" />
          <div class="pname ml-2">{{item.pname}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
        <button @click="del" :data-id="item.id" class="btn border-danger">删除</button>
      </div>
      <!-- 合计：购物车商品数量 vuex-->
      <div class="mt-2">
        购物车数量：
        <span style="color:red">{{$store.getters.getCartCount}}</span>
      </div>
      <!-- 按钮 删除选中商品 -->

      <button @click="delItem" class="btn border-danger mt-2">删除选中商品</button>
      <!-- 按钮 清空购物车 -->
      <button @click="delAll" class="btn border-danger mt-2">清空购物车</button>
    </div>
    <!-- <footer>
        <div class="border-top mb-5">
            <span class="d-block text_small text-muted mt-2" align="center">关于淘书&nbsp;&nbsp;&nbsp;诚征英才&nbsp;&nbsp;&nbsp;图书目录&nbsp;&nbsp;&nbsp;免责条款&nbsp;&nbsp;&nbsp;联系我们</span>
            <span class="d-block text_small text-muted mt-2" align="center">Copyright © Mint&淘书网 Taoshu.com 版权所有</span>
        </div>
    </footer>-->
  </div>
</template>
<script>
export default {
  created() {
    // 当组件创建成功后查询购物车列表
    this.loadMore();
  },
  data() {
    return {
      list: [], //保存购物车列表
      allcb: false //全选按钮状态
    };
  },
  methods: {
    changeItem() {
      // 功能：为商品复选框添加修改事件
      // 如果所有商品状态true全选true
      // 1:创建变量sum累加和
      var sum = 0;
      // 2：创建循环遍历数组中所有元素cb
      for (var item of this.list) {
        if (item.cb) {
          sum++;
        }
      }
      // 3：如果状态true sum++
      if (sum == this.list.length) {
        this.allcb = true;
      } else {
        this.allcb = false;
      }
    },
    selectAll() {
      // 功能：全选按钮状态修改
      // 1：获取当前全选按钮状态
      var cb = this.allcb;
      console.log(cb);
      // 2：创建循环遍历每个元素
      for (var item of this.list) {
        item.cb = cb;
      }
      // 3：全选true元素true
    },
    delAll() {
      // 功能：清空购物车
      // 1：显示交互确认框
      //    alert("是否清空购物车？")
      if (confirm("是否清空购物车?")) {
        // 2：创建变量str
        var str = "";
        // 3:创建循环遍历每个元素
        for (var item of this.list) {
          str += item.id + ",";
        }

        // 4：判断没商品 提示
        if (str.length == 0) {
          alert("购物车为空");
          return;
        }
        // 5：截取字符串
        str = str.substring(0, str.length - 1);
        // 6：创建变量 url
        var url = "delm";
        // 7:创建变量 obj
        var obj = { ids: str };
        // 8:发送请求 delm
        this.axios
          .get(url, { params: obj })
          .then(res => {
            //删除成功回调
            alert("清空成功");
            // 9:删除成功回调 重新加载
            this.loadMore();
          })
          .catch(err => {
            //删除出错回调
            console.log(err);
          });
      }
    },
    delItem() {
      // 功能：删除多个用户指定商品
      // 1：显示交互确认框
      // alert("是否删除指定数据？");
      if (confirm("是否删除指定数据?")) {
        // 2：如果用户选 确定
        // 3：拼接字符串 “3,5,7”
        // 4：创建变量 str
        var str = "";
        // 5:创建循环遍历商品数组，如果cb状态为true拼接id
        // 6:判断用户是否选中商品
        for (var item of this.list) {
          if (item.cb) {
            str += item.id + ",";
          }
        }
        //console.log(str);
        // 7：如果用户没选商品，
        //提示请选择您需要删除商品
        if (str.length == 0) {
          alert("请选择需要删除商品");
          return;
        }
        // substring截取字符串
        // 0 起始下标
        // 保存几个字符
        str = str.substring(0, str.length - 1);
        console.log(str);
        // 8：创建url
        var url = "delm";
        // 9:创建obj
        var obj = { ids: str };
        // 10:发送ajax请求删除指定商品
        this.axios
          .get(url, { params: obj })
          .then(res => {
            //删除成功回调
            alert("删除成功");
            this.loadMore();
          })
          .catch(err => {
            //删除出错回调
            console.log(err);
          });
      }
      // 11：删除成功，重新加载数据，提示
    },
    del(event) {
      // 功能：删除用户指定购物车项目
      // 1：显示交互确认框
      // alert("是否删除该商品");
      if (confirm("是否删除该商品?")) {
        var str = "";
        for (var item of this.list) {
          if (item.cb) {
            var id = event.target.dataset.id;
            str += id;
          }
        }
        if (str.length == 0) {
          alert("请勾选该商品");
          return;
        }

        // // 4:创建变量url
        var url = "del";
        // // 5:创建变量obj
        var obj = { id: str };
        // // 6:发送ajax请求完成删除任务
        this.axios.get(url, { params: obj }).then(res => {
          if (res.data.code == -2) {
            this.$router.push("/Login");
          } else if (res.data.code == -1) {
            alert("删除失败");
          } else {
            alert("删除成功");
            this.loadMore();
          }
        });
      }
      // 2：点击“确认”按钮
      // if(msg){
      // // 3:获取当前项目id

      // // 7:判断是否删除成功 提示
      // // 8：重新调用购物车列表
    },
    loadMore() {
      // 功能：加载购物车列表
      // 1：创建变量url
      var url = "findcart";
      // 2：发送ajax请求
      this.axios
        .get(url)
        .then(res => {
          //console.log(res);
          //this.list=res.data.data;
          // 为商品对象添加属性 cb
          // cb复选框状态 注意顺序
          // 1：原始数据
          var rows = res.data.data;
          // 2:创建循环为每个商品添加cb属性
          for (var item of rows) {
            item.cb = false;
          }
          // 3：将新数组赋值
          this.list = rows;
          //3.1：清空原先购物车数量
          this.$store.commit("clearCartCount");
          // 4:计算累加和 购物车数量
          var sum = 0;
          for (var item of this.list) {
            sum += item.count;
          }
          // 5:修改购物车数量
          this.$store.commit("modifyCartCount", sum);
        })
        .catch(err => {
          console.log(err);
        });
      // 3：获取购物车数据并且保存list
    }
  }
};
</script>
<style scoped>
.cart {
  width: 600px;
  height: 320px;
  margin: 0 auto;
}
/*购物车中商品项目*/
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 底边线 */
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
}
/*左侧商品名称和价格*/
.lefttxt {
  display: flex;
  align-items: center;
}
/*商品价格*/
.price {
  color: red;
  font-size: 18px;
  margin-left: 15px;
}
</style>

