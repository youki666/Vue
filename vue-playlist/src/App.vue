<!-- 模板 -->
<template>
  <div id="app">
      <app-header  v-on:titleChanged="update($event)"  v-bind:title='title'></app-header> 
      <users v-bind:users='users'></users>
      <users v-bind:users='users'></users>
      <app-footer v-bind:title='title'></app-footer>
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
       users:[
                 {name:'youki',position:'developer',show:false},
                 {name:'gates',position:'developer',show:false},
                 {name:'jobs',position:'developer',show:false},
                 {name:'mango',position:'developer',show:false},
                 {name:'bill',position:'developer',show:false},
                 {name:'john',position:'developer',show:false},
                 {name:'kitty',position:'developer',show:false},
                 {name:'echo',position:'developer',show:false},
                 {name:'santo',position:'developer',show:false},
                 {name:'youki',position:'developer',show:false},
             ],
             title:'传递的是一个值(number ,string,boolean)',
         }
        },
        methods:{
          update(title1){
            this.title=title1;
          }
        },
       components:{
        "users":Users,
        "app-header":apphead,
        'app-footer':appfooter,
       }
    }
</script>
<!-- 样式 -->
<style scoped>

</style>
