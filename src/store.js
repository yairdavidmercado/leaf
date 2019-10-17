import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';
import {HTTP} from '@/http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    user: [],
    tabla: [],
    isLoading: false
  },
  mutations: {
    logout: (state) => {
      state.accessToken = null;
    },
    llenarUser(state, userActions){
      state.user = userActions
    },
    llenarTabla(state,tablaAction){
      state.tabla = tablaAction
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
    saveRegister: async function({commit}){
      this.state.isLoading = true
        HTTP.get('users/hadley/orgs')
        .then(response => {
        commit('llenarTabla', response.data)
        this.state.isLoading = false
        //this.tabla = response.data
        //alert(response.data)
        //this.loading = false
        })
        .catch(error => {
        console.log(error)
        })
    },
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
