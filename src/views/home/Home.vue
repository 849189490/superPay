<template>
  <div id="home">
		<nav-bar class="home-nav">
			<div slot = 'center'>首页</div>
		</nav-bar>
		<!-- <scroll class="content"> -->
			<home-swiper :result="result"></home-swiper>
			<a href="">
				<home-recommend :recommend="recommend"></home-recommend>
			</a>
			<tab-control @controlListClick = "controlListClick"></tab-control>
			<goods-list :goods="goods[index].list"></goods-list>
		<!-- </scroll> -->
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from 'components/common/scroll/Scroll'
	import TabControl from 'components/common/tabcontrol/TabControl'
	import GoodsList from 'components/common/goodslist/GoodsList'
	
	import HomeSwiper from './homecomponents/HomeSwiper'
	import HomeRecommend from './homecomponents/HomeRecommend'
	
  import {getHomeMultidata,
					getHomeGallery,
					getHomeRecommend} 
					from 'network/home'
	export default {
    name:'Home',
		components:{
			NavBar,
			Scroll,
			HomeSwiper,
			HomeRecommend,
			GoodsList,
			TabControl
		},
		data(){
			return {
				result:[],
				recommend:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'choice':{page:0,list:[]},
				},
				index:'pop'
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeRecommend()
			this.getHomeGallery('pop')
			this.getHomeGallery('new')
			this.getHomeGallery('choice')
		},
		methods:{
			//轮播图
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.result = res.list
				})
			},
			//导航列表
			getHomeRecommend() {
				getHomeRecommend().then(res => {
					this.recommend = res.list
				})
			},
			//商品列表
			getHomeGallery(style) {
				let pages = this.goods[style].page + 1
				getHomeGallery(style,pages,4).then(res => {
					this.goods[style].list.push(...res.list)
				})
			},
			//商品列表导航条控制数据与子组件的传递
			controlListClick(index) {
				if(index === 0){
					this.index = 'pop'
				}else if(index === 1){
					this.index = 'new'
				}else{
					this.index = 'choice'
				}
			}
		}
  }
</script>

<style scoped>
	.home {
		height: 100vh;
		position: relative;
	}
	.home-nav {
		background-color: #42B983;
		color: #FFFFFF;
	}
 	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
