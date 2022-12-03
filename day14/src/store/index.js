import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[1,2,3,4,5]
  },
  getters: {
  },
  mutations: {

    add(state,obj){
      this.state.list.push({...obj})
    }
  },
  actions: {
  },
  modules: {
  }
})
