<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from 'components/context/maintabbar/MainTabbar.vue'
  export default {
    name: 'App',
    components:{
      MainTabbar
    }
  }
</script>

<style>
	@import "assets/css/normalize.css";
</style>
