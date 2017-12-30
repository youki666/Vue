// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Helloworld from './components/Helloworld'
import Home from './components/Home'
// import Users from './components/User'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
	routes:[
      {path:"/",component:Home},
      {path:"/Helloworld",component:Helloworld},

	],
	mode:'history'
})
//全局注册组件
// Vue.component('users',Users)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{

  }
})

//index.html ==>https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s