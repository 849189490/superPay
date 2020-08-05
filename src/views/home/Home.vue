<template>
  <div id="home">
		<nav-bar class="home-nav">
			<div slot = 'center'>首页</div>
		</nav-bar>
		<van-loading type="spinner" 
								 v-show="isRefresh"
								 vertical
								 color="#42B983"
								 class="loading">加载中...</van-loading>
		<tab-control @controlListClick="controlListClick"
								 class="tabcontrol"
								 v-show="tabIsActive"
								 ref="tabControl2"></tab-control>
		<scroll class="scroll"
						ref="scroll"
						@scroll="scroll"
						@pullingUp="pullingUp"
						:pulldown="true"
						@pullingDown="pullingDown">
			<home-swiper :result="result" @swiperImageLoad="imageLoad"></home-swiper>
			<home-recommend :recommend="recommend" @recommendImgLoad="imageLoad"></home-recommend>
			<tab-control @controlListClick="controlListClick" ref="tabControl1"></tab-control>
			<goods-list :goods="goods[index].list" @toDetail="toDetail"></goods-list>
		</scroll>
		<back-top @click.native="backTopClick" v-show="isActive"></back-top>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from 'components/common/scroll/Scroll'
	import TabControl from 'components/common/tabcontrol/TabControl'
	import GoodsList from 'components/common/goodslist/GoodsList'
	import BackTop from 'components/context/backtop/BackTop'
	
	import HomeSwiper from './homecomponents/HomeSwiper'
	import HomeRecommend from './homecomponents/HomeRecommend'
	
  import {getHomeMultidata,
					getHomeGallery,
					getHomeRecommend} 
					from 'network/home'
	import {debounce} from 'common/util.js'
	export default {
    name:'Home',
		components:{
			NavBar,
			Scroll,
			HomeSwiper,
			HomeRecommend,
			GoodsList,
			TabControl,
			BackTop
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
				index:'pop',
				isActive:false, //回到顶部箭头是否显示
				pageSize:4, //每次请求的数据限制
				tabTop:0, //计算tab-control的offsettop
				tabIsActive:false, //吸顶效果出现
				saveY:0,
				isRefresh:false
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeRecommend()
			this.getHomeGallery('pop')
			this.getHomeGallery('new')
			this.getHomeGallery('choice')
		},
		mounted() {
			this.goodsLoad()
		},
		activated() {
			this.$refs.scroll.scrollTo(0,this.saveY,500)
			this.$refs.scroll.refresh()
		},
		deactivated() {
			this.saveY = this.$refs.scroll.getScrollY()
			this.$bus.$off()
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
				getHomeGallery(style,pages,this.pageSize).then(res => {
					this.goods[style].list.push(...res.list)
					this.goods[style].page += 1
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
				this.$refs.tabControl2.currentIndex = index
				this.$refs.tabControl1.currentIndex = index
			},
			//回到顶部
			backTopClick() {
				this.$refs.scroll.scrollTo(0,0,500)
			},
			//监听滚动位置
			scroll(pos) {
				this.isActive = pos.y < -300
				this.tabIsActive = (-pos.y) > this.tabTop
			},
			//触底加载更多
			pullingUp() {
				this.getHomeGallery(this.index)
				this.$refs.scroll.finishPullUp()
			},
			//下拉刷新后重新获取商品列表
			getHomeGalleryFirst(style) {
				this.goods[style].page = 1
				getHomeGallery(style,1,this.pageSize).then(res => {
					this.goods[style].list = res.list
				})
			},
			//下拉刷新
			pullingDown() {
				this.isRefresh=true
				setTimeout(() => {
					this.isRefresh=false
				},300)
				this.getHomeGalleryFirst('pop')
				this.getHomeGalleryFirst('new')
				this.getHomeGalleryFirst('choice')
			},
			//尝试事件总线的方法获取事件
			//监听图片加载，刷新scroll
			goodsLoad() {
				const refresh = debounce(this.$refs.scroll.refresh,200)
				this.$bus.$on('goodsLoad',() => {
					refresh()
				})
			},
			//监听图片加载，刷新tabscroll与顶部距离
			imageLoad() {
				this.tabTop = this.$refs.tabControl1.$el.offsetTop
			},
			toDetail(index) {
				this.$router.push('/detail/' + index)
			}
		}
  }
</script>

<style scoped>
	#home {
		height: 100vh;
		position: relative;
	}
	.home-nav {
		background-color: #42B983;
		color: #FFFFFF;
	}
 	.scroll {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tabcontrol {
		position: fixed;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.loading {
		text-align: center;
	}
</style>
