<template>
  <div id="translateForm">
      <div >
      	      <form v-on:submit="Formsubmit" class="well form-inline">
      	<input type="text" placeholder="请输入要翻译的内容" v-model="textTotranslate" class="form-control">
      	<select v-model="language"  class="form-control">
      		<option value="en">English</option>
      		<option value="ru">Russian</option>
      		<option value="ko">Korean</option>
      		<option value="ja">Japanese</option>
      	</select>
      	<button class="btn btn-primary">翻译</button>
      </form>
      </div>
  </div>
</template>

<script>

export default {
  name: 'translateForm',
  data:function(){
       return {
       	textTotranslate:'',
       	language:''
       }
  },
  methods:{
  	Formsubmit:function(e){
  		//alert(this.textTotranslate);
  		this.$emit("submit",this.textTotranslate,this.language);
  		e.preventDefault();
  	}
  }
}
</script>

<style scoped>
@media (min-width: 768px){
     #translateForm {
     	position: absolute;
     	top: 160px;
     	left:420px;
     	width: 600px;
     }
 }
</style>