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
    ],
    user: [],
    axios1: []
  },
  mutations: {
    logout: (state) => {
      state.accessToken = null;
    },
    llenarUser(state, userActions){
      state.user = userActions
    }
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done === false)
    },
    doneUser(state){
      return state.user.filter(usuario => usuario.estado)
    }
  },
  actions: {
    getUser: async function({commit}){
      const data = await fetch('user.json')
      const usuario = await data.json()
      commit('llenarUser', usuario)
    },
    logout({ commit }) {
      localStorage.removeItem('accessToken');
      commit('logout');
      router.push('/login');
    }
  }
})
