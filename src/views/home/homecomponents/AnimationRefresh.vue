<template>
		<div class="animation" name="animation" v-show="isShow">
			<p>正在刷新</p>
		</div>
</template>

<script>
	export default {
		name: 'AnimationRefresh',
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.animation {
		position: relative;
		width: 100vw;
	}
	p {
		text-align: center;
		font-size: 12px;
	}
	/* .animation-enter-active{
		height: 0px;
		animation-fill-mode:forwards;
	  transition: height 2s linear;
	}
	.animation-enter, .animation-leave-to {
		height: 50px;
	} */
</style>
