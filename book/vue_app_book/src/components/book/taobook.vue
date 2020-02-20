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
        <li class="nav-item"><router-link class="nav-link text-white" to="/Home">首页</router-link></li>
        <li class="nav-item"><router-link class="nav-link text-white" to="/Readcard">阅读卡对换专区</router-link></li>
        <li class="nav-item"><router-link class="nav-link text-white" to="/Sale">特卖场</router-link></li>
        <li class="nav-item"><router-link class="nav-link text-white" to="/Taobook">淘书会</router-link></li>
        <li class="nav-item"><router-link class="nav-link text-white" to="/Group">团购批发</router-link></li>
    </ul>
    <div><img class="pic1" src="../../assets/img/bt-2.jpg" alt=""></div>
</div>
 
    <footer-component></footer-component>
</div>
</template>
<script>
    // 引入子组件
    import footerComponent from "./footer.vue"
    export default {
    // 注册子组件
    components:{
        footerComponent
    },
     methods:{
        jumpCart(event){
            var url="findcart";
            var pid=event.target.dataset.pid;
            var obj={pid};
            this.axios.get(url,{params:obj})
            .then(res=>{
                if(res.data.code==-1){
                    alert("请登录!");
                    this.$router.push("/Login")
                }else{
                      this.$router.push("/Cart");

                 }
            })

        }
    }
    
}
</script>
<style scoped>
    @import  '../css/comm.css';
    @import  '../css/home.css';
     .container{
           margin:0 auto;
        }
        .nav li>a{
            margin-left:2rem;
        }
        .pic1{
            width:100%;
        }
         .pict:hover{
            background:#aaa;
        }
        .regt:hover{
             background:#aaa;
        }
        .logt:hover{
             background:#aaa;
        }
         #nav_top{
            width:100%;
            display: flex;
            justify-content: space-between;
        }
        .bigtext{
            width:100%;
            display: flex;
            justify-content: space-between;
        }
       
   

</style>


