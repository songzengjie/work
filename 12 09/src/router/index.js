import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
		redirect:"welcome",
    component: HomeView,
		children:[
			{
				path: "welcome",
				name: "welcome",
				component: () => import("../views/Welcome.vue")
			},
			{
				path: "users",
				name: "users",
				meta:["用户管理","用户列表"],
				component: () => import("../views/Users.vue")
			},
			{
				path: "roles",
				name: "roles",
				meta:["权限管理","角色列表"],
				component: () => import("../views/Roles.vue")
			},
			{
				path: "rights",
				name: "rights",
				meta:["权限管理","权限列表"],
				component: () => import("../views/Rights.vue")
			},
			{
				path: 'goods',
				name: "ShopList",
				component: () => import("../views/Shop/ShopList.vue"),
				meta: ['商品管理', '商品列表'],
			},
			{
				path: '/params',
				name: "/ClassParameter",
				component: () => import("../views/Shop/ClassParameter.vue"),
				meta: ['商品管理', '分类列表'],
			},
			{
				path: '/categories',
				name: "/ShopClass",
				component: () => import("../views/Shop/ShopClass.vue"),
				meta: ['商品管理', '商品分类'],
			},
			{
				path: '/orders',
				name: "/Orders",
				component: () => import("../views/Orders.vue"),
				meta: ['订单管理', '订单列表'],
			},
			// 数据统计
			{
				path: '/reports',
				name: "/Reports",
				component: () => import("../views/Reports.vue")
			},

		]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/longin",
    name: "longin",
    component: () => import("../views/Longin.vue")
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
