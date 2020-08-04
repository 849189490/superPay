<template>
	<div class="detail">
		<detail-nav-bar @navBarBack="navBarBack" @detailNavBarClick="detailNavBarClick"
										:detailNavBarList="detailNavBarList" ref="nav" />
		<scroll class="scroll" ref="scroll" @scroll="detailScroll">
			<detail-swiper :swiperList="swiperList" @imageLoad="imageLoad" />
			<detail-info />
			<detail-serve @click.native="serveClick1" ref="serve" />
			<detail-serve serveName="选择" serveDetail="请选择尺码" @click.native="serveClick3" />
			<goods-comment ref="comment" />
			<detail-list ref="list" />
		</scroll>
		<van-popup v-model="show1" position="bottom" :style="{ height: '60%' }">
			<van-cell-group>
				<van-cell title="发货" value="付款后三天内发货" />
				<van-cell title="退换" value="15天退货" />
				<van-cell title="保障" value="1次破损补发" />
			</van-cell-group>
		</van-popup>
		<shop-bar />
	</div>
</template>

<script>
import DetailSwiper from './detailcomponents/DetailSwiper';
import DetailNavBar from './detailcomponents/DetailNavBar';
import DetailInfo from './detailcomponents/DetailInfo';
import DetailServe from './detailcomponents/DetailServe';
import DetailList from './detailcomponents/DetailList';

import Scroll from 'components/common/scroll/Scroll';
import ShopBar from 'components/common/shopbar/ShopBar';
import GoodsComment from 'components/common/goodscomment/GoodsComment';

import { getDetail } from 'network/detail';
export default {
	name: 'Detail',
	data() {
		return {
			num: 0,
			detailNavBarList: ['商品', '参数', '评论', '推荐'],
			detailList: [],
			swiperList: [],
			topOffsetY: [],
			posY: 0,
			index: 0,
			show1: false,
			// show3: false
		};
	},
	components: {
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
		this.getDetail();
		this.num = this.$route.params.num;
	},
	mounted() {},
	methods: {
		navBarBack() {
			this.$router.back();
		},
		detailNavBarClick(index) {
			this.index = index;
			this.$refs.scroll.scrollTo(0, -this.topOffsetY[index], 300);
		},
		getTopOffsetY() {
			this.topOffsetY = [];
			this.topOffsetY.push(0);
			this.topOffsetY.push(this.$refs.serve.$el.offsetTop);
			this.topOffsetY.push(this.$refs.comment.$el.offsetTop);
			this.topOffsetY.push(this.$refs.list.$el.offsetTop);
			this.topOffsetY.push(Number.MAX_VALUE);
		},
		getDetail() {
			getDetail().then(res => {
				this.detailList = res.list;
				this.swiperList = res.list[0].image;
			});
		},
		imageLoad() {
			this.getTopOffsetY();
			this.$refs.scroll.refresh();
		},
		serveClick1() {
			this.show1 = true;
		},
		serveClick3() {
			console.log('click3');
		},
		detailScroll(pos) {
			this.posY = -pos.y;
			for (let i = 0; i < this.topOffsetY.length - 1; i++) {
				if (this.index != i && (this.posY >= this.topOffsetY[i] && this.posY < this.topOffsetY[i + 1])) {
					this.index = i;
					this.$refs.nav.currentIndex = i;
				}
			}
		}
	}
};
</script>

<style scoped>
.detail {
	background-color: #ffffff;
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
	background-color: #42b983;
}
</style>
