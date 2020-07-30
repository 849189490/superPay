<template>
	<div class="backtop">
		<img src="./direction-up.png" alt="^">
	</div>
</template>

<script>
	export default {
		name: 'BackTop'
	}
</script>

<style scoped>
	.backtop {
		position: fixed;
		right: 10px;
		bottom: 60px;
	}
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
</style>
