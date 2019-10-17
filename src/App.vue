<template>
  <div id="app" >
        <div v-if="this.$route.path !== '/login'">
          <Menu></Menu>
          <router-view></router-view>
        </div>
        <div v-else >
            <loading :active.sync="isLoading" ></loading>
            <login></login>
        </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Login from '@/components/Login.vue'
import store from '@/store'
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'app',
  components: {
    Menu,
    Login,
    Loading
  },
  data(){
      return {
          
      }
  },
  computed: {
    ...mapState(['isLoading']),
    count () {
      return store.getters.doneTodos
    },
    count2(){
      return store.state.todos
    },
  },
  methods: {
       Loading
  },
}
</script>

