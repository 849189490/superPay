<template>
	<div>
		<swiper>
			<swiper-item v-for="(item,index) in result" :key = "index">
				<a :href="item.num"></a>
				<img :src="item.url" @load="imageLoad">
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index'
	export default {
		name:'HomeSwiper',
		props: {
			result:{
				type: Array,
				default() {
					return []
				}
			}
		},
		methods:{
			imageLoad() {
				this.$emit('swiperImageLoad')
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
