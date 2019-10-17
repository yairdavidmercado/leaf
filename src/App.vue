<template>
  <div id="app" >
        <div v-if="this.$route.path !== '/login'">
          <Menu></Menu>
          <router-view></router-view>
        </div>
        <div v-else >
            <login></login>
        </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Login from '@/components/Login.vue'
import store from '@/store'

export default {
  name: 'app',
  components: {
    Menu,
    Login
  },
  data(){
      return {
          
      }
  },
  computed: {
    count () {
      return store.getters.doneTodos
    },
    count2(){
      return store.state.todos
    },
  },
  methods: {
      
  },
}
</script>

