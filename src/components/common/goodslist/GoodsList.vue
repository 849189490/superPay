<template>
	<div class="goods">
		<div v-for="value in goods" :key="value.num" class="goods_list">
			<img :src="value.address" alt="">
			<div>{{value.name}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.goods {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 5px 10px;
		text-align: center;
		font-size: 12px;
	}
	.goods_list {
		width: 48%;
	}
	.goods_list img {
		width: 100%;
	}
</style>
