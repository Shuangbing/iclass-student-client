import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: "yamada@uni.edu",
      lastname: "山田",
      fristname: "デモ"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
