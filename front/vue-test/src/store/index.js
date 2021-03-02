import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:8000/",
    token: localStorage.getItem('token')
  },
  getters: {
    getAuthToken() {
      return localStorage.getItem('token')
    }
  },
  mutations: {
    resetAuthToken(state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  modules: {}
});
