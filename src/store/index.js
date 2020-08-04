import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cartList: []
  },
  mutations: {
		addCount(state,payload) {
			payLoad.count++
		},
		addToCart(state,payload) {
			state.cartList.push(payload)
		}
  },
  actions: {
		addCart(context,payload) {
			let oldPayload = context.state.cartList.find(item => item.id === payload.id)
			if (oldPayload) {
				context.commit('addCount',oldPayload)
				oldPayload.count += 1
			}else{
				payload.count = 1
				context.commit('addToCart',payload)
			}
		}
  },
  modules: {
  }
})
