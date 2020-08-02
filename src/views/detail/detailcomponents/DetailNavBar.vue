<template>
	<div class="nav">
		<nav-bar>
			<div slot="left" class="left">
				<img src="./back.svg" alt="" @click="navBarBack">
			</div>
			<div slot="center" class="center">
				<div class="center-item"
						 v-for="(value,index) of detailNavBarList"
						 :key="index"
						 @click="detailNavBarClick(index)"
						 :class="{active: currentIndex === index}">{{value}}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	export default {
		name: 'DetailNavBar',
		props:{
			detailNavBarList:{
				type:Array,
				default() {
					return ['aa','bb','cc','dd']
				}
			}
		},
		data() {
			return {
				currentIndex:0,
			}
		},
		methods: {
			navBarBack() {
				this.$emit('navBarBack')
			},
			detailNavBarClick(index) {
				this.currentIndex = index
				this.$emit('detailNavBarClick',index)
			}
		},
		components:{
			NavBar
		}
	}
</script>

<style scoped>
	.nav {
		border-bottom: 2px solid #e8e8e8;
	}
	.left {
		display: flex;
		margin: 10px 19px;
	}
/* 	.left img {
		align-self: center;
	} */
	.center {
		display: flex;
		font-size: 13px;
	}
	.center-item {
		flex: 1;
	}
	.active {
		color: #42B983;
	}
</style>
