<template>
<div class="swiper-container">
  <!-- 轮播图 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/limingbo.jpg" alt="" width="100%">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/yueduka1.png" alt="" width="100%">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/yueduhui.jpg" alt="" width="100%">
        </div>
      </div>
  <!-- 左右箭头 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  <!-- 小圆点 -->
  <div class="swiper-pagination"></div>
</div>
    
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
     props:{
        
    },
   mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:3000,
          speed:300,
          loop:true,
          pagination:'.swiper-pagination',//可选选项，是否显示分页器
          nextButton:'.swiper-button-next',//下一页
          prevButton:'.swiper-button-prev',//上一页
        })
}
  
}
</script>

<style scoped>
.swiper-container {
        width: 100%;
        /*控制swiper组件的高度height*/
        /*height: 450px;*/
        max-height: 600px;
        margin-top:5px;
    }
    .swiper-slide {
        /* Center slide text vertically */
        /*弹性盒子flex的应用*/
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    /*swiper容器内图片*/
    .swiper-slide img{
        width: 100%;
    }
  .swiper-button-next{
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23cccccc'%2F%3E%3C%2Fsvg%3E");
      
    }
    .swiper-button-prev{
        background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23cccccc'%2F%3E%3C%2Fsvg%3E");
    }
   


</style>


