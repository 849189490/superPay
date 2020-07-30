<template>
	<div>
		详情页+{{num}}
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {
				num:0
			}
		},
		created() {
			this.num = this.$route.params.num
		}
	}
</script>

<style scoped>
	
</style>
