import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import My from './views/My.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 登录路由
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      // 注册路由
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      // 首页
      path:'/app/home',
      name:'home',
      component:Home
    },
    {
      // 购物车
      path:'/app/cart',
      name:'cart',
      component:Cart
    },
    {
      // 我的
      path:'/app/my',
      name:'my',
      component:My
    }
  ]
})
