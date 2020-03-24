import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: "yamada@uni.edu",
      lastname: "山田",
      firstname: "デモ"
    }
  },
  mutations: {
    setUser(state, user) {
      state.user.lastname = user.lastname;
      state.user.firstname = user.firstname;
    }
  },
  actions: {
  },
  modules: {
  }
})
