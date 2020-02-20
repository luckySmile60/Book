<template>
  <div>
    <!--首页头部-->
    <div class="container">
      <!--上半部分-->
      <div class="mt-1" id="nav_top">
        <div>
          <p class="text_small mb-0 ml-3">爱书的朋友，欢迎来淘书！</p>
        </div>
        <div>
          <!-- 面包屑导航 -->
          <ul class="breadcrumb p-0 mb-0 w-100">
            <li class="breadcrumb-item">
              <a href="#">
                <img src="../../assets/img/care.png" alt />
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">
                <img src="../../assets/img/order.png" alt />
              </a>
            </li>
            <li class="breadcrumb-item">
              <a class="pict" @click="jumpCart" href="#">
                <img src="../../assets/img/shop_car.png" alt />
              </a>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/Register" class="regt text-muted">注册</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/Login" class="logt text-muted mr-3">登录</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mt-1">
        <div class="col-12">
          <img src="../../assets/img/test01.jpg" class="w-100" alt />
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="container">
      <div class="bigtext">
        <div>
          <img src="../../assets/img/taoshu-logo.jpg" alt="淘书网" />
        </div>
        <div>
          <div class="input-group" style="margin-top:2rem">
            <input
              style="width:20rem"
              v-model="kws"
              type="text"
              @focus="txt"
              @blur="txtout"
              class="form-control text-muted text_small_1"
              placeholder="找书、作家、出版社？"
            />
            <button @click="go" class="btn ml-1">
              <p class="text_small_1 mb-0">搜索</p>
            </button>
          </div>
          <div v-html="content" class="textbox" v-show="display"></div>
        </div>
      </div>
      <!-- 下半部分 -->
      <ul class="nav bg_gray mt-1">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/Home">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/Readcard">阅读卡对换专区</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/Sale">特卖场</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/Taobook">淘书会</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/Group">团购批发</router-link>
        </li>
      </ul>
      <!-- 内容区域 -->

      <!-- <div class="carousel mt-1" data-ride="carousel" id="demo"> -->
      <!-- 1.轮播的图片-->
      <!-- <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="../../assets/img/limingbo.jpg" alt=""/>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="../../assets/img/yueduka1.png" alt=""/>
            </div>
            <div class="carousel-item">
               <img class="w-100" src="../../assets/img/yueduhui.jpg" alt=""/>
            </div>
      </div>-->
      <!-- 左右的箭头 -->
      <!-- <a data-slide="prev" href="#demo" class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>

        </a>
        <a data-slide="next"  href="#demo" class="carousel-control-next">
            <span class="carousel-control-next-icon"></span>
      </a>-->
      <!-- 3.轮播指示器-->
      <!-- <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
      </ul>-->
      <!-- </div> -->
      <banner-component></banner-component>
      <p class="mb-0 font-weight-bold">新书上架</p>
      <div class="row px-0 mx-0">
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/a1.jpg" alt />
            <p
              class="text_small mt-3 text-muted mb-0"
            >《生态花园实用手册》纤细的阐述了打造生态花园的详细过程，即使你是个园艺新手，也能根据书中的步骤成功完成。书中详细的介绍了植物选择，植物搭配，水循环，提高土壤肥力，减少病虫害和堆肥等方面。是市面上少有的，...</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-sm-1 mt-md-0">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/d4.jpg" alt />
            <p
              class="text_small mt-3 mb-0 text-muted"
            >《养生天然食材一本全》精选120余种家庭常见食材，具体分为五谷杂粮、蔬菜、水果和干果、畜禽肉、河海鲜、豆和豆制品、蛋奶、调味品进行营养解析。每种食材又分为性味归经、养生关键点、搭配宜忌、营养面面观、趣味小知识、人...</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-lg-2 mt-lg-0 mt-sm-1">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/c7.jpg" alt />
            <p
              class="text_small mt-3 mb-0 text-muted"
            >吃对了，就能吃出健康，把吃出来的疾病，再吃回去！《吃出来的健康》介绍了不同人群、不同季节如何调剂每天的饮食，介绍了生活中最常见的基本食材，包括肉、米、面、蛋、奶、豆类、蔬菜、水果、菌藻、饮用水等的食用方法和养生...</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-lg-0 mt-sm-1">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/b8.jpg" alt />
            <p
              class="text_small mt-3 mb-0 text-muted"
            >《好想开家咖啡馆》以室内创意设计为切入点，图文并茂，讲述了16家咖啡馆的室内创意设计、开店始末、开店的趣事等，很好的传达了作为一个咖啡业内人士对未来咖啡馆的一种全新概念上的界定。本书竭力把实际创业的点滴和关键...</p>
          </div>
        </div>
      </div>
      <p class="mb-0 font-weight-bold">特价精选</p>
      <div class="row px-0 mx-0 mt-1">
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/n3.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0 pl-4">
              <router-link to="/Product" class="text-dark ml-5 font-weight-bold">要活，要活着奋斗</router-link>
            </p>
            <p>
              <span class="text-muted ml-6 text_small">
                ￥
                <s>38.00</s>
              </span>
              <span class="text-primary ml-2">￥9.50</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-sm-1 mt-md-0">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/newbook2.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0">
              <router-link to="/Product" class="text-dark ml-6 font-weight-bold">穿过岁月握你的手</router-link>
            </p>
            <p class="pl-3">
              <span class="text-muted ml-6 text_small">
                ￥
                <s>38.00</s>
              </span>
              <span class="text-primary ml-2">￥9.50</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-lg-2 mt-lg-0 mt-sm-1">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/n4.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0">
              <router-link to="/Product" class="text-dark ml-6 font-weight-bold">目标·用目标点亮人生</router-link>
            </p>
            <p class="pl-4">
              <span class="text-muted ml-6 text_small">
                ￥
                <s>25.00</s>
              </span>
              <span class="text-primary ml-2">￥11.80</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-lg-0 mt-sm-1 pl-md-4 pl-sm-4">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/n5.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0">
              <router-link to="/Product" class="text-dark ml-5 font-weight-bold">性格·优化性格成就事业</router-link>
            </p>
            <p class="pl-4">
              <span class="text-muted ml-5 text_small">
                ￥
                <s>18.00</s>
              </span>
              <span class="text-primary ml-2">￥14.00</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row px-0 mx-0 mt-1 mb-1">
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border pl-md-4 pl-sm-4">
            <img class="ml-5 mt-3 img_position" src="../../assets/img/n6.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0">
              <router-link to="/Product" class="text-dark ml-5 font-weight-bold">信念·信念力改变一生</router-link>
            </p>
            <p class="pl-0">
              <span class="text-muted ml-5 text_small">
                ￥
                <s>28.00</s>
              </span>
              <span class="text-primary ml-2">￥21.60</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-sm-1 mt-md-0">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/n7.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0 pl-5">
              <router-link to="/Product" class="text-dark ml-4 font-weight-bold">心态·和心灵有个约会</router-link>
            </p>
            <p class="pl-5">
              <span class="text-muted ml-5 text_small">
                ￥
                <s>22.00</s>
              </span>
              <span class="text-primary ml-2">￥5.10</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-lg-2 mt-lg-0 mt-sm-1">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/n8.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0 pl-5">
              <router-link to="/Product" class="text-dark ml-5 font-weight-bold">光活着是不够的</router-link>
            </p>
            <p class="pl-0">
              <span class="text-muted ml-6 text_small">
                ￥
                <s>28.00</s>
              </span>
              <span class="text-primary ml-2">￥21.60</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 px-0 mx-0">
          <div class="border ml-md-2 mt-lg-0 mt-sm-1">
            <img class="ml-6 mt-3 img_position" src="../../assets/img/n9.jpg" alt />
            <p class="text_small mt-3 text-muted mb-0 pl-5">
              <router-link to="/Product" class="text-dark ml-5 font-weight-bold">静心观心修心</router-link>
            </p>
            <p class="pl-5">
              <span class="text-muted ml-5 text_small">
                ￥
                <s>36.00</s>
              </span>
              <span class="text-primary ml-2">￥15.10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
// 引入子组件
import footerComponent from "./footer.vue";
import BannerComponent from "./banner.vue";

export default {
  // 注册子组件
  components: {
    footerComponent,
    BannerComponent
  },
  data() {
    return {
      kws: "",
      timer: null,
      content: "",
      display: false
    };
  },
  methods: {
    go() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.kws.trim() !== "") {
          // console.log(`搜索${this.kws}相关的内容...`);
          // this.content=`搜索${this.kws}相关的内容...`;
          var url = "findbook";
          var pname = this.kws;
          var obj = { pname };
          this.axios.get(url, { params: obj }).then(res => {
            if (res.data.code == -1) {
              this.content = `没有搜索到相关书籍...`;
              return 0;
            } else {
              var obj = res.data.data[0];
              console.log(obj);
              this.content = `编号：${obj.pid}<br>书名：${obj.pname}<br>作者：${obj.author}<br>出版社：${obj.category}<br>描述：${obj.decrible}`;
              this.$router.push("/Product");
            }
          });
        }
      }, 500);
    },
    // 当文本框失去焦点时
    txtout() {
      this.display = false;
    },
    // 当文本框聚焦时
    txt() {
      this.display = true;
    },
    search() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.kws.trim() !== "") {
          // console.log(`搜索${this.kws}相关的内容...`);
          // this.content=`搜索${this.kws}相关的内容...`;
          var url = "findbook";
          var pname = this.kws;
          var obj = { pname };
          this.axios.get(url, { params: obj }).then(res => {
            if (res.data.code == -1) {
              this.content = `没有搜索到相关书籍...`;
              return 0;
            } else {
              var obj = res.data.data[0];
              console.log(obj);
              this.content = `编号：${obj.pid}<br>书名：${obj.pname}<br>作者：${obj.author}<br>出版社：${obj.category}<br>描述：${obj.decrible}`;
            }
          });
        }
      }, 500);
    },

    jumpCart(event) {
      var url = "findcart";
      var pid = event.target.dataset.pid;
      var obj = { pid };
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == -1) {
          alert("请登录!");
          this.$router.push("/Login");
        } else {
          this.$router.push("/Cart");
        }
      });
    }
  },
  watch: {
    kws() {
      this.search();
    }
  }
};
</script>
<style scoped>
@import "../css/comm.css";
@import "../css/home.css";

.container {
  margin: 0 auto;
}
.nav li > a {
  margin-left: 2rem;
}
.pict:hover {
  background: #aaa;
}
.regt:hover {
  background: #aaaaaa;
}
.logt:hover {
  background: #aaa;
}

.textbox {
  background: white;
  border: 3px solid rgb(231, 231, 231);
  width: 20rem;
  height: 10rem;
  overflow: hidden;
  position: absolute;
  z-index: 5;
}
#nav_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.bigtext {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>

