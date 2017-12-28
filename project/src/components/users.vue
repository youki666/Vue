<template>
	<div class="users">
          <h1>users</h1>
            <form v-on:submit='addUser'>
            	<input type="text" placeholder="Enter your name" v-model='newUser.name'>
            	<input type="text" placeholder="Enter your email" v-model='newUser.email'>
            	<input type="submit" value="submit">
            </form>
          <!-- show the user information -->
          <ul>
          	<li v-for="user in users">
              <input type="checkbox" class="toggle" v-model='user.contacted'>
              <span v-bind:class='{contacted:user.contacted}'>
              {{user.name}} : {{user.email}}
                   <button v-on:click="deleteUser(user)">Delete</button>
                   </span>
          	
          	</li>
          </ul>
	</div>
</template>
<script>
	export default{
		name:'users',
        data(){
     	return {
     		newUser:{},
     		users:[
              {name:'youki',email:'1060636771@qq.com',contacted:false},
              {name:'jobs',email:'xiaohuihui1334@qq.com',contacted:false},
              {name:'gate',email:'hahhhahaha@qq.com',contacted:false},
     		]
     	}
     },
     methods:{
        addUser:function(e){
           console.log('success');
           this.users.push({name:this.newUser.name,email:this.newUser.email,contacted:false});
           e.preventDefault();
        },
        deleteUser:function(user){
        	this.users.splice(this.users.indexOf(user),1)
        }
     }
	}
</script>
<style scoped>
  ul {
  	list-style: none;
  }
  .contacted{
  	text-decoration: line-through;
  }
</style>