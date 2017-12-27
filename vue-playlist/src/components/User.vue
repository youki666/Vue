<template>
  <div class="users">
        <h1>父组件传值</h1>
     <ul>
     	<li v-for='user in users' v-on:click="user.show=!user.show">
     		<h2>{{user.name}}</h2>
     		<h3 v-show="user.show">{{user.position}}</h3>
     	</li>
     </ul>
     <button v-on:click='deleteUser'>删除</button>
  </div>
</template>

<script>
/*传值：string array boolean 
   引用：array object*/
    export default {
      name: 'users',
     props:['users'],
     methods:{
     	deleteUser:function(){
     		this.users.pop();
     	}
     }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .users{
   	width: 100%;
   	max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    color: #aaa;
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
