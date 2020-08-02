<template>
	<div>
		<swiper>
			<swiper-item v-for="(item,index) in swiperList"
									 :key = "index" class="swiper">
				<img :src="item" @load="imageLoad">
			</swiper-item>
		</swiper>	
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper/index'
	export default {
		name: 'DetailSwiper',
		props:{
			swiperList:{
				type:Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				flag:true
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imageLoad() {
				if(this.flag) {
					setTimeout(() => {
						this.$emit('imageLoad')
						this.flag = true
					},100)
				}
			}
		}
	}
</script>

<style scoped>
	.swiper {
		overflow: hidden;
	}
	.swiper img {
		height: 300px;
		object-fit:cover; 
	}
</style>
