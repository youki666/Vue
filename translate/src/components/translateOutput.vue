<template>
  <div id="translateOutput" class="well">
    <h2 class="text-center">{{translatedText}}</h2>
  </div>
</template>

<script>

export default {
  name: 'translateOutput',
  props: [
       "translatedText"
  ]

}
</script>

<style scoped>
  #translateOutput {
  	border: 1px solid green;
  	width: 400px;
  	margin: 10px auto;
  }
  #translateOutput h2{
  	font-family: serif;
  	height: 20px;
  	line-height: 20px;
  	border: 1px solid #3f3;
  }
 @media( max-width: 768px){
   #translateOutput {
    border: 1px solid black;
  	width: 200px;
  	margin: 10px auto;
   }
     #translateOutput h2{
  	font-family: serif;
  	height: 20px;
  	line-height: 20px;
  	border: 1px solid black;
  }
  }
</style>