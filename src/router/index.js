import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home.vue'
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Detail = () => import('views/detail/Detail')

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
	{
		path: '/detail/:num',
		name: 'Detail',
		component: Detail
	}
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
