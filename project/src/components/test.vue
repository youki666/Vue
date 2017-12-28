<template>
	<div class="test">
		<h2>test</h2>
		<h3>{{title}}</h3>
	</div>
</template>
<script>
	export default{
		name:'test',
        data(){
     	return {
     		title:'Vue.js Demo',
     	}
     },
  methods:{
    
  }
	}
</script>
<style scoped>
	.test {
		font-size:24px;
		font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	}
</style>