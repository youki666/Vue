<template>
  <div id="app">
     <users></users>
  </div>
</template>

<script>
/*import Test from './components/test'*/
import users from './components/users'

export default {
  name: 'app',
  components: {
    users
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
