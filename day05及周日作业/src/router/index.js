import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[ {
      path: 'manage',
      name: 'manage',
      meta:{
        one:'首页',
      },
      component: () => import('../views/home/manage')
    },
       {
      path: 'userlist',
      name: 'userlist',
      meta:{
        one:'首页',
        two:'数据管理',
        three:'数据列表'
      },
      component: () => import('../views/home/userlist')
    },{
      path: 'shopList',
      name: 'shopList',
      meta:{
        one:'首页',
        two:'数据管理',
        three:'商家列表'
      },
      component: () => import('../views/home/shopList')
    },{
      path: 'foodList',
      name: 'foodList',
      meta:{
        one:'首页',
        two:'数据管理',
        three:'食品列表'
      },
      component: () => import('../views/home/foodList')
    },{
      path: 'orderList',
      name: 'orderList',
      meta:{
        one:'首页',
        two:'数据管理',
        three:'订单列表'
      },
      component: () => import('../views/home/orderList')
    },{
      path: 'adminList',
      name: 'adminList',
      meta:{
        one:'首页',
        two:'数据管理',
        three:'管理员列表'
      },
      component: () => import('../views/home/adminList')
    },{
      path: 'addShop',
      name: 'addShop',
      meta:{
        one:'首页',
        two:'添加数据',
        three:'添加商铺'
      },
      component: () => import('../views/home/addShop')
    },{
      path: 'addGoods',
      name: 'addGoods',
      meta:{
        one:'首页',
        two:'添加数据',
        three:'添加商品'
      },
      component: () => import('../views/home/addGoods')
    },{
      path: 'explain',
      name: 'explain',
      meta:{
        one:'首页',
        two:'说明',
        three:'说明'
      },
      component: () => import('../views/home/explain')
    },{
      path: 'adminSet',
      name: 'adminSet',
      meta:{
        one:'首页',
        two:'设置',
        three:'管理员设置'
      },
      component: () => import('../views/home/adminSet')
    },{
      path: 'vueEdit',
      name: 'vueEdit',
      meta:{
        one:'首页',
        two:'编辑',
        three:'文本设置'
      },
      component: () => import('../views/home/vueEdit')
    },{
      path: 'visitor',
      name: 'visitor',
      meta:{
        one:'首页',
        two:'图表',
        three:'用户分布'
      },
      component: () => import('../views/home/visitor')
    },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
