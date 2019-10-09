<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is an about page</h1>
    <HelloWorld msg="About to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    HelloWorld
  }
}
</script>
