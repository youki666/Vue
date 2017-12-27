<template>
  <div class="headers">
     <header v-on:click='changetitle'>
     	<h1>{{title1}}             {{title}}</h1>
     </header>
  </div>
</template>

<script>
    export default {
      name: 'headers',
      props:{
          title:{
      	type:String
      	}
      },
     data(){
     	return {
     		title1:'Vue.js Demo'
     	}
     },
     methods:{
     	changetitle:function(){
     		//this.title='changed';
     		this.$emit('titleChanged','son to father');
     	}
     },
     // beforeCreate:function(){
     //        alert("组件实例化之前");
     // },
     // created:function(){
     // 	alert("组件实例化完毕，页面未展示");
     // 	console.log("组件实例化完毕，页面未展示");
     // },
     // beforeMount:function(){
     // 	alert("组件挂在前，页面未更新。虚拟DOM已配置");
     // },
     // Mounted:function(){
     //       alert("组件挂在后，此方法执行后，页面显示");
     // },
     // beforeUpdate:function(){
     // 	alert('组件更新前，页面仍未更新，虚拟DOM已配置');
     // },
     // update:function(){
     // 	alert("组件更新，此方法执行后，页面显示");
     // },
     // beforeDestroy:function(){
     // 	alert('组件销毁前');
     // },
     // Destroyed:function(){
     // 	alert('组件销毁后');
     // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     header{
     	background: lightgreen;
     	padding: 10px;
     }
     h1 {
     	color: #222;
     	text-align: center;
     }
</style>
