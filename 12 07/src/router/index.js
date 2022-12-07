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
				component: () => import("../views/Users.vue")
			},
			{
				path: "roles",
				name: "roles",
				component: () => import("../views/Roles.vue")
			},
			{
				path: "rights",
				name: "rights",
				component: () => import("../views/Rights.vue")
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
