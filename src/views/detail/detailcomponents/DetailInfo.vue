<template>
	<div class="main">
		<div class="price">
			<div class="price-top">
				<span class="span1">16.9-25.9</span>
				<span class="span2">促销活动</span>
				<span class="span2">顺丰包邮</span>
			</div>
			<div class="price-bottom">
				<span>价格:</span>
				<s>22.8-51.8</s>
			</div>
		</div>
		<div class="shop">
			<div class="shop-left">
				女装女装女装女装女装女装女装女装女装女装
			</div>
			<div class="shop-right">
				<img src="./share.png" alt="">
				<span>分享</span>
			</div>
		</div>
		<div class="bottom">
			<div>收藏222</div>
			<div>月销333</div>
			<div>广东深圳</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailInfo',
		props:{
			goodsInfo:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.main {
		border-bottom: 6px solid #ececec;
	}
	.price {
		height: 50px;
	}
	.price-top {
		height: 30px;
		color: #ff5000;
		display: flex;
		justify-content: flex-start;
		padding: 0 5px;
		box-sizing: border-box;
	}
	.price-top span {
		display: block;
		margin: 12px 12px 0 0;
	}
	.span1 {
		font-size: 20px;
	}
	.span2 {
		font-size: 12px;
		line-height: 18px;
		background-color: #FFF1EB;
	}
	.span1::before {
		content: '\FFE5';
		font-size: 12px;
		margin-top: 12px;
	}
	.price-top:nth-child(1) {
		font-size: 16px;
	}
	.price-bottom {
		height: 15px;
		font-size: 12px;
		color: #999999;
		padding: 2px 5px;
		box-sizing: border-box;
	}
	.price-bottom span::after {
		content: '\FFE5';
	}
	.shop {
		height: 44px;
		display: flex;
		padding-left: 5px;
		
	}
	.shop-left {
		width: 85%;
		font-size: 18px;
		line-height: 22px;
	}
	.shop-right {
		width: 15%;
		color: #999999;
		display: flex;
		justify-content: flex-end;
		margin: 13px auto;
		font-size: 12px;
		line-height: 18px;
		background-color: #eaeaea;
		border-radius: 7px 0 0 7px;
	}
	.shop-right img {
		width: 14px;
		height: 14px;
	}
	.shop-right span {
		display: block;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		line-height: 14px;
		color: #999999;
		padding: 6px 5px;
	}
</style>
