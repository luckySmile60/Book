// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
Vue.config.productionTip = false

// main.js脚手架
// 引入第三方 axios
import axios from "axios"
// 配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
// 保存session信息
// 每次ajax访问服务器将session id
// 发送服务器验证使用
axios.defaults.withCredentials=true
// 将axios注册Vue实例中
// 注意顺序:不能配置在vue对象后面
Vue.prototype.axios=axios;

// 引入第三方库vuex 
//vue_app_00/npm i vuex -s
// 9：引入vuex
import Vuex from "vuex"
//10：注册 vuex
Vue.use(Vuex)
// 11: 创建存储对象
var store=new Vuex.Store({
 //  (1)共享数据
 state:{
  
   cartCount:0//购物车数量

 },
 // （2)修改函数
 mutations:{
   //2.1:增加减少清空购物车数量
   addCartCount(state){//增加
     state.cartCount++;
   },
   modifyCartCount(state,num){
     state.cartCount+=num;

   },
   subCartCount(state){//减少
     state.cartCount--;
   },
   clearCartCount(state){//清空
     state.cartCount=0;
   },
   
 },
 // (3)获取函数
 getters:{
   getCartCount(state){
     return state.cartCount;
   },
   
 }
 // (4)异步修改函数
})
// 12: 将存储对象添加vue实例





/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
