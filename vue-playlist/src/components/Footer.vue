<template>
  <div class="footers">
       <footer>
       	<h3>&copy; {{copyright}}{{title}}</h3>
       </footer>
  </div>
</template>

<script>
    export default {
      name: 'footers',
            props:{
          title:{
      	type:String
      	}
      },
      data(){
          return {
          	copyright:'Design by youki!'
          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   footer{
   	background: #3f3;
   }
   h3{
   	text-align: center;
   	font-size: 24px;
   	color: #fff;
   }
</style>
