<template>
  <div id="app" >
        <div v-if="this.$route.path !== '/login'">
            <Menu></Menu>
        </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu
  },
  data(){
      return {
          
      }
  },
  methods: {
      
  },
}
</script>

