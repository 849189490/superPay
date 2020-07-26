<template>
	<div class="tab">
		<div v-for="(value,index) in controlList" :key="index" 
				 @click="controlListClick(index)" 
				 :class="{active: currentIndex === index}">
				 <span>{{value}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		props:{
			controlList:{
				type:Array,
				default() {
					return ['流行','新款','精选']
				}
			}
		},
		data() {
			return{
				currentIndex:0
			}
		},
		methods:{
			controlListClick(index) {
				this.currentIndex = index
				this.$emit('controlListClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab {
		display: flex;
		justify-content: space-around;
		line-height: 20px;
		height: 20px;
		padding: 6px 0;
		font-size: 12px;
		text-align: center;
	}
	.active span {
		padding: 8px 8px;
	}
	.active {
		color: #42B983;
		border-bottom: 2px solid #42B983;
	}
</style>
