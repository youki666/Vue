<template>
  <div class="User">
  <h1>hello world!</h1>
     <ul>
     	<li v-for='user in users' v-on:click="user.show=!user.show">
     		<h2>{{user.name}}</h2>
     		<h3 v-show="user.show">{{user.position}}</h3>
     	</li>
     </ul>
  </div>
</template>

<script>
    export default {
      name: 'User',
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
             ]
       	}
       }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .User{
   	width: 100%;
   	max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    box-sizing: border-box;
   }
   ul {
   	display: flex;
   	flex-wrap: wrap;
   	list-style: none;
   	padding: 0;
   }
   li{
   	flex-grow: 1;
   	flex-basis: 200px;
   	text-align: center;
   	padding: 30px;
   	border: 1px solid #222;
   	margin: 10px;
   }
   h3{
   	color:#3e3;
   }
</style>
