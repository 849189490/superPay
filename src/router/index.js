import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home.vue'
import Category from 'views/category/Category.vue'
import Profile from 'views/profile/Profile.vue'
import Cart from 'views/cart/Cart.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/category',
		name: 'Category',
		component: Category
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
