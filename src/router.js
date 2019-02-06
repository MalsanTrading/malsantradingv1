import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue' )
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/products/sino',
      name: 'products-sino',
      component: () => import(/* webpackChunkName: "products-sino" */ './views/Products/Sino.vue')
    },
    {
      path: '/products/xcmg',
      name: 'products-xcmg',
      component: () => import(/* webpackChunkName: "products-xcmg" */ './views/Products/xcmg.vue')
    },
    {
      path: '/products/weichai',
      name: 'products-weichai',
      component: () => import(/* webpackChunkName: "products-weichai" */ './views/Products/weichai.vue')
    },
    {
      path: '/products/glass',
      name: 'products-glass',
      component: () => import(/* webpackChunkName: "products-glass" */ './views/Products/glass.vue')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
