import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:8000/"
  },
  getters: {
    getAuthToken() {
      return localStorage.getItem('token')
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
