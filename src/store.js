import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:{
      hola: 0
    }
  },
  mutations: {
    logout: (state) => {
      state.accessToken = null;
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem('accessToken');
      commit('logout');
      router.push('/login');
    }
  }
})
