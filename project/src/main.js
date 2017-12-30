// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import test from './components/test'
import users from './components/users'

Vue.use(VueRouter)
Vue.use(VueResource)
//set设置路由
const router= new VueRouter({
     mode:'history',
     base:__dirname,
     routes:[
       { path:"/",component:users},
       { path:"/test",component:test},
     ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
     <div id="app">
         <ul>
             <li>
                   <router-link to="/">Users</router-link>
                   <router-link to="/test">Test</router-link>
             </li>
         </ul>
         <router-view></router-view>
     </div>
  `
}).$mount('#app')
