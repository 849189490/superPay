<template>
	<div class="comment">
		<div class="title">
			<div class="left">商品评论 (92)</div>
			<div class="right">查看全部 ></div>
		</div>
		<div class="info">
			<div class="avater">
				<img src="./like.png" alt="">
				<span>coderlie</span>
			</div>
			<div class="content">
				<span>很好很好很好很好，很好很好很好很好很好很好很好。很好很好很好很好很好</span>
			</div>
			<div class="detail">
				<span>2020-08-02 尺码：均码 颜色分类：绿色</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsComment'
	}
</script>

<style scoped>
	.comment {
		width: 100vw;
		padding: 5px 5px;
		box-sizing: border-box;
		font-family: verdana;
		border-bottom: 1px solid #eeeeee;
	}
	.title {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}
	.title .left {
		font-size: 14px;
	}
	.title .right {
		font-size: 13px;
		color: #FF0036;
	}
	.info {
		margin-top: 5px;
	}
	.avater {
		display: flex;
		justify-content: flex-start;
		color: #999999;
		font-size: 12px;
	}
	.avater span {
		display: block;
		line-height: 22px;
	}
	.avater img{
		width: 22px;
		height: 22px;
		padding-right: 3px;
	}
	.content {
		font-size: 13px;
		margin-top: 4px;
	}
	.detail {
		font-size: 12px;
		color: #999999;
		margin-top: 6px;
		padding-bottom: 5px;
	}
</style>
