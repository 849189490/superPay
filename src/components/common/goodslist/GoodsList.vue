<template>
	<div class="goods">
		<div v-for="value in goods" :key="value.num" class="goods_list">
			<img :src="value.address" alt="" @load="goodsLoad" @click="toDetail(value.num)">
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
		},
		methods:{
			goodsLoad() {
				this.$bus.$emit('goodsLoad')
			},
			toDetail(index) {
				this.$emit('toDetail',index)
			}
		}
	}
</script>

<style scoped>
	.goods {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		padding: 5px 5px;
		text-align: center;
		font-size: 12px;
		background-color: #FFFFFF;
	}
	.goods_list {
		width: 48%;
	}
	.goods_list img {
		width: 100%;
		border-radius: 5px;
	}
</style>
