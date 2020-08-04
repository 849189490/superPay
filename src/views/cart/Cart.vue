<template>
  <div class="cart">
		<nav-bar>
			<div slot="left" class="title">购物车</div>
			<div slot="right" class="manage">管理</div>
		</nav-bar>
		<scroll class="scroll">
			<cart-list></cart-list>
			<cart-list></cart-list>
			<cart-list></cart-list>
			<cart-list></cart-list>
			<cart-list></cart-list>
		</scroll>
		<van-submit-bar :price="29900" button-text="提交订单" @submit="onSubmit" class="submit">
		  <van-checkbox v-model="checked">全选</van-checkbox>
		</van-submit-bar>
  </div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll'
	import NavBar from 'components/common/navbar/NavBar'
	import CartList from 'components/common/cartlist/CartList'
	
  export default {
    name:'Category',
		data() {
			return {
				checked:true
			}
		},
		components:{
			NavBar,
			CartList,
			Scroll
		},
		methods:{
			onSubmit() {
				console.log('submit');
			}
		}
  }
</script>

<style scoped>
	.cart {
		background-color: rgb(250,250,250);
		position: relative;
		height: 100vh;
	}
	.scroll {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 93px;
		left: 0;
		right: 0;
	}
	.title {
		font-weight: 700;
		font-size: 18px;
		padding-left: 5px;
	}
	.manage {
		
	}
	.submit {
		position: fixed;
		bottom: 49px;
	}
</style>
