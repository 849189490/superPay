<template>
	<div class="rec">
		<div v-for="item in recommend" :key="item.num" class="list">
			<a :href="item.src">
				<img :src="item.image" alt="图片失效" @load="recommendImgLoad">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props:{
			recommend:{
				type:Array,
				default() {
					return []
				}
			}
		},
		methods:{
			recommendImgLoad() {
				this.$emit('recommendImgLoad')
			}
		}
	}
</script>

<style scoped>
	.rec {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		text-align: center;
		font-size: 12px;
		padding: 10px 0;
		background-color: #f6f6f6;
		border-bottom: 5px solid #dcdcdc;
	}
	.list {
		width: 22%;
	}
	.rec img {
		width: 60%;
		margin-top: 10px;
	}
</style>
