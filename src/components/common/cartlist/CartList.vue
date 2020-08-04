<template>
	<div class="cartlist">
		<div class="shop">
			<div class="choice" @click="isChooseClick">
				<img src="./choice1.png" alt="" v-if="isChoose">
				<img src="./choice2.png" alt="" v-else>
			</div>
			<img src="./shop.png" alt="">
			<div class="name">
				商店
			</div>
		</div>
		<div class="detail">
			<div class="choice" @click="isChooseClick">
				<img src="./choice1.png" alt="" v-if="isChoose">
				<img src="./choice2.png" alt="" v-else>
			</div>
			<div class="ima">
				<img src="./1.jpg" alt="">
			</div>
			<div class="detail-right">
				<div class="left">2020新款</div>
				<div class="center">
					<div>欧美风情款;红色</div>
					<img src="./more.png" alt="">
				</div>
				<div class="right">
					<div class="price">￥299.00</div>
					<div class="num">x1</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CartList',
		props:{
			list:{
				type:Object,
				default() {
					return {"id":1,"image":'./1.jpg'}
				}
			}
		},
		data() {
			return {
				isChoose:false
			}
		},
		methods:{
			isChooseClick() {
				this.isChoose = !this.isChoose
			}
		}
	}
</script>

<style scoped>
	.cartlist {
		width: calc(100vw - 20px);
		box-sizing: border-box;
		margin: 10px 10px;
		border-radius: 15px;
		background-color: #FFFFFF;
		padding-bottom: 5px;
	}
	.shop {
		height: 30px;
		font-size: 16px;
		font-weight: 600;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.shop>img {
		width: 16px;
		height: 16px;
	}
	.choice {
		width: 16px;
		height: 16px;
		margin-right: 10px;
	}
	.choice>img {
		width: 16px;
		height: 16px;
	}
	.name {
		padding-left: 5px;
	}
	.detail {
		display: flex;
		align-items: center;
		margin-top: 10px;
	}
	.ima {
		width: 80px;
		height: 80px;
		overflow: hidden;
	}
	.ima>img {
		width: 80px;
	}
	.detail-right {
		margin-left: 10px;
		line-height: 25px;
		font-size: 14px;
	}
	.detail-right>.center {
		background-color: rgb(250,250,250);
		padding: 0 5px;
		border-radius: 5px;
		display: flex;
		align-items: center;
	}
	.detail-right>.center>img {
		width: 14px;
		height: 14px;
	}
	.detail-right>.right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
	}
	.detail-right>.right>.price {
		color: #FF0036;
	}
	.detail-right>.right>.num {
		width: 16px;
		height: 16px;
		text-align: center;
		line-height: 16px;
		border: 1px solid #DCDCDC;
		border-radius: 5px;
	}
</style>
