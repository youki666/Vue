<!-- 模板 -->
<template>
  <div id="app">
      <app-header></app-header> 
      <users></users>
      <app-footer></app-footer>
  </div>
</template>
<!-- 行为 -->
<script>
import Users from './components/User'//局部注册组件
import apphead from './components/app-Header'//局部注册组件
import appfooter from './components/footer'//局部注册组件
       export default {
      name: 'app',
       data(){
        return {

        }
       components:{
        "users":Users,
        "app-header":apphead,
        'app-footer':appfooter
       }
     }
    }
</script>
<!-- 样式 -->
<style scoped>
  h1 {
    color: purple;
  }
</style>
