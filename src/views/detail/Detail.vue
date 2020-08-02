<template>
	<div class="detail">
		<detail-nav-bar 
			@navBarBack="navBarBack" 
			@detailNavBarClick="detailNavBarClick" 
			:detailNavBarList="detailNavBarList"
			ref="nav"/>
		<scroll class="scroll" ref="scroll" @scroll="detailScroll">
			<detail-swiper 
				:swiperList="swiperList" 
				@imageLoad="imageLoad" />
			<detail-info />
			<detail-serve @click.native="serveClick1" ref="serve"/>
			<detail-serve
				serveName="选择"
				serveDetail="请选择尺码"
				@click.native="serveClick3" />
			<goods-comment ref="comment" />
			<detail-list ref="list"/>
		</scroll>
		<van-popup
			v-model="show1"
			position="bottom"
			:style="{ height: '60%' }">
			<van-cell-group>
			  <van-cell title="发货" value="付款后三天内发货" />
			  <van-cell title="退换" value="15天退货" />
			  <van-cell title="保障" value="1次破损补发" />
			</van-cell-group>
		</van-popup>
		<van-sku
		  v-model="show3"
			:sku="sku"
			:goods="goods"
		/>
		<shop-bar/>
	</div>
</template>

<script>
	import DetailSwiper from './detailcomponents/DetailSwiper'
	import DetailNavBar from './detailcomponents/DetailNavBar'
	import DetailInfo from './detailcomponents/DetailInfo'
	import DetailServe from './detailcomponents/DetailServe'
	import DetailList from './detailcomponents/DetailList'
	
	import Scroll from 'components/common/scroll/Scroll'
	import ShopBar from 'components/common/shopbar/ShopBar'
	import GoodsComment from 'components/common/goodscomment/GoodsComment'
	
	import {getDetail} from 'network/detail'
	export default {
		name: 'Detail',
		data() {
			return {
				num:0,
				detailNavBarList:['商品','参数','评论','推荐'],
				detailList:[],
				swiperList:[],
				topOffsetY:[],
				posY:0,
				index:0,
				show1:false,
				show3:false,
				sku: {
				  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
				  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
				  tree: [
				    {
				      k: '颜色', // skuKeyName：规格类目名称
				      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				      v: [
				        {
				          id: '1', // skuValueId：规格值 id
				          name: '红色', // skuValueName：规格值名称
				          imgUrl: 'http://localhost:3001/public/image/gallery/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
				          previewImgUrl: 'http://localhost:3001/public/image/gallery/1.jpg', // 用于预览显示的规格类目图片
				        },
				        {
				          id: '1',
				          name: '蓝色',
				          imgUrl: 'http://localhost:3001/public/image/gallery/2.jpg',
				          previewImgUrl: 'http://localhost:3001/public/image/gallery/2.jpg',
				        }
				      ],
				      largeImageMode: true, //  是否展示大图模式
				    }
				  ],
				  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				  list: [
				    {
				      id: 2259, // skuId
				      s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
				      s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
				      price: 100, // 价格（单位分）
				      stock_num: 110 // 当前 sku 组合对应的库存
				    }
				  ],
				  price: '1.00', // 默认价格（单位元）
				  stock_num: 227, // 商品总库存
				  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				  none_sku: false, // 是否无规格商品
				  messages: [
				    {
				      // 商品留言
				      datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
				      multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
				      name: '留言', // 留言名称
				      type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
				      required: '1', // 是否必填 '1' 表示必填
				      placeholder: '' // 可选值，占位文本
				    }
				  ],
				  hide_stock: false // 是否隐藏剩余库存
				},
				goods: {
				  picture: 'http://localhost:3001/public/image/gallery/1.jpg '
				}
			}
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailInfo,
			DetailServe,
			DetailList,
			ShopBar,
			GoodsComment,
			Scroll
		},
		created() {
			this.getDetail()
			this.num = this.$route.params.num
		},
		mounted() {
		},
		methods:{
			navBarBack() {
				this.$router.back()
			},
			detailNavBarClick(index) {
				this.index = index
				this.$refs.scroll.scrollTo(0,-this.topOffsetY[index],300)
			},
			getTopOffsetY() {
				this.topOffsetY = []
				this.topOffsetY.push(0)
				this.topOffsetY.push(this.$refs.serve.$el.offsetTop)
				this.topOffsetY.push(this.$refs.comment.$el.offsetTop)
				this.topOffsetY.push(this.$refs.list.$el.offsetTop)
				this.topOffsetY.push(Number.MAX_VALUE)
			},
			getDetail() {
				getDetail().then(res => {
					this.detailList = res.list
					this.swiperList = res.list[0].image
				})
			},
			imageLoad() {
				this.getTopOffsetY()
				this.$refs.scroll.refresh()
			},
			serveClick1() {
				this.show1 = true
			},
			serveClick3() {
				this.show3 = true
			},
			detailScroll(pos) {
				this.posY = -pos.y
				for(let i = 0; i < this.topOffsetY.length - 1; i++) {
					if(this.index != i && (this.posY >= this.topOffsetY[i] && this.posY < this.topOffsetY[i+1])){
						this.index = i
						this.$refs.nav.currentIndex = i
					}
				}
			}
		}
	}
</script>
	
<style scoped>
	.detail {
		background-color: #FFFFFF;
		position: relative;
		z-index: 9;
		height: 100vh;
	}
	.scroll {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.center {
		background-color: #42B983;
	}
</style>
