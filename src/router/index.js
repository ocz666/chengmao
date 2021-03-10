import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/Home'
import login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   redirect:'/home'
    // },
    {
      path: '/home',
      name: '主页',
      component: home
    },
    {
      path:'/login',
      name: '登录页面',
      component: login
    }
  ]
})
