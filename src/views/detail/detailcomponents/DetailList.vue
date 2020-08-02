<template>
	<div class="list">
		<div v-for="(value,index) of list" :key="index">
			<img :src="value" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailList',
		props:{
			list:{
				type:Array,
				default() {
					return [
						"http://localhost:3001/public/image/gallery/1.jpg",
						"http://localhost:3001/public/image/gallery/2.jpg",
						"http://localhost:3001/public/image/gallery/3.jpg",
						"http://localhost:3001/public/image/gallery/4.jpg",
						"http://localhost:3001/public/image/gallery/5.jpg",
					]
				}
			}
		}
	}
</script>

<style scoped>
	.list {
		margin-top: 10px;
		padding: 5px 5px;
	}
	img {
		width: calc(100vw - 10px);
	}
</style>
