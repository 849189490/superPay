<template>
  <div>
    <keep-alive exclude="Detail">
			<router-view/>
		</keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/image/tabbar/home.png" slot="item-icon">
        <img src="~assets/image/tabbar/home2.png" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/image/tabbar/order.png" slot="item-icon">
        <img src="~assets/image/tabbar/order2.png" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/image/tabbar/account.png" slot="item-icon">
        <img src="~assets/image/tabbar/account2.png" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/image/tabbar/my.png" slot="item-icon">
        <img src="~assets/image/tabbar/my2.png" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    name: 'MainTabbar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
