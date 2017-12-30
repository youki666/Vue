<template>
  <div id="app">
  <h1>在线翻译</h1>
  <h5>简单、便捷</h5>
    <translateform></translateform>
  </div>
</template>

<script>
/*import Test from './components/test'*/
import Output from './components/translateoutput'
import Form from './components/translateform'


export default {
  name: 'app',
  components: {
   
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
