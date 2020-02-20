import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/book/login.vue'
import Register from '../components/book/register.vue'
import Home from '../components/book/home.vue'
import Readcard from '../components/book/readcard.vue'
import Sale from '../components/book/sale.vue'
import Taobook from '../components/book/taobook.vue'
import Group from '../components/book/group.vue'
import Product from '../components/book/product.vue'
import Cart from '../components/book/cart.vue'
// import Banner from '../components/book/banner.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/Login',component:Login},
    {path:'/Register',component:Register},
    {path:'/Home',component:Home},
    {path:'/Readcard',component:Readcard},
    {path:'/Sale',component:Sale},
    {path:'/Taobook',component:Taobook},
    {path:'/Group',component:Group},
    {path:'/Product',component:Product},
    {path:'/Cart',component:Cart},
    // {path:'/Banner',component:Banner},
    
    ]
})
