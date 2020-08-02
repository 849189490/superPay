<template>
	<div class="shop">
		<div class="left">
			<div class="left-item" @click="shopClick">
				<img src="./image/shop.png" alt="">
				<div>
					<span>商店</span>
				</div>
			</div>
			<div class="left-item" @click="customerClick">
				<img src="./image/wangwang.png" alt="">
				<div>
					<span>客服</span>
				</div>
			</div>
			<div class="left-item" @click="collectClick">
				<img src="./image/collect.png" alt="" v-if="show">
				<img src="./image/collect2.png" alt="" v-else>
				<div>
					<span>收藏</span>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="rightone" @click="cartClick">
				加入购物车
			</div>
			<div class="righttwo" @click="buyClick">
				立即购买
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ShopBar',
		data() {
			return {
				show:true
			}
		},
		methods:{
			shopClick() {
				this.$emit('shopClick')
			},
			customerClick() {
				this.$emit('customerClick')
			},
			collectClick() {
				this.$emit('collectClick')
				this.show = !this.show
			},
			cartClick() {
				this.$emit('cartClick')
			},
			buyClick() {
				this.$emit('buyClick')
			}
		}
	}
</script>

<style scoped>
	.shop {
		display: flex;
		width: 100vw;
		height: 49px;
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 -2px 1px rgba(0,0,0,0.15);
		padding: 0 10px;
		box-sizing: border-box;
		text-align: center;
	}
	.left {
		flex: 1;
		flex-grow: 0.8;
		display: flex;
		font-size: 12px;
		color: #999;
	}
	.left-item {
		flex: 1;
	}
	.left-item img {
		width: 22px;
		height: 22px;
		margin: 3px auto;
	}
	.right {
		flex: 1;
		display: flex;
		font-size: 13px;
		line-height: 35px;
		margin: 7px auto;
		color: #FFFFFF;
		font-weight: 500;
	}
	.rightone {
		flex: 1;
		background-color: #FF9500;
		border-radius: 18px 0 0 18px;
	}
	.righttwo {
		flex: 1;
		background-color: #FF0036;
		border-radius: 0 18px 18px 0;
	}
</style>
