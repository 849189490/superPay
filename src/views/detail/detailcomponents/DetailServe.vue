<template>
	<div class="serve">
		<div class="left">{{serveName}}</div>
		<span>{{serveDetail}}</span>
		<div class="right">></div>
	</div>
</template>

<script>
	export default {
		name: 'DetailServe',
		props:{
			serveName:{
				type:String,
				default() {
					return '服务'
				}
			},
			serveDetail:{
				type:String,
				default() {
					return '付款后3天内发货 · 15天退货 · 1次破损补寄'
				}
			}
		}
	}
</script>

<style scoped>
	.serve {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		line-height: 26px;
		padding: 0 5px;
		border-bottom: 6px solid #ececec;
	}
	.left {
		width: 10vw;
		color: #999999;
	}
	.serve span {
		width: 80vw;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis; 
		white-space: nowrap; 
		margin: 0 5px;
	}
	.right {
		width: 10vw;
		color: #999999;
		margin-left: 5vw;
	}
</style>
