import Vue from 'vue'
import Vant from 'vant'//有赞ui组件
import 'vant/lib/index.css'
import FastClick from 'fastclick'//解决移动端300ms延迟
import LazyLoad from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(LazyLoad,{
	loading:require('./assets/image/lazyload.png')
})
//事件总线
Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
