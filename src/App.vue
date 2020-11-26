<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <login/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import login from './components/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
#app,body,html {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
