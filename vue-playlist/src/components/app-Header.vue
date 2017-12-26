<template>
  <div class="header">
     <header>
     	<h1>{{title}}</h1>
     </header>
  </div>
</template>

<script>
    export default {
      name: 'hello',
     data(){
     	return {
     		title:'Vue.js Demo'
     	}
     }
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
