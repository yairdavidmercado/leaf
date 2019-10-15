import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hola: 'hola Perros',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    logout: (state) => {
      state.accessToken = null;
    }
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done === false)
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
