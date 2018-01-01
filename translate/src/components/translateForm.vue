<template>
  <div id="translateForm">
      <div class="container">
      	  <form v-on:submit="Formsubmit" class="well form-inline">
      	<input type="text" placeholder="请输入要翻译的内容" v-model="textTotranslate" class="form-control">
      	<select v-model="selected"  class="form-control">
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
       	selected:'en'
       }
  },
  methods:{
  	Formsubmit:function(e){
  		//alert(this.textTotranslate);
  		this.$emit("submit",this.textTotranslate,this.selected);
  		e.preventDefault();
  	}
  }
}
</script>

<style scoped>
       .container {
      width: 800px;
      margin: 0 auto;
    }
      .container h2 {
      margin-top: 20px;
      font-size: 48px;
      color: navy;
      text-align: center;
    }

    #translateForm input,select,button {
      margin: 0 50px;
     }
    @media( max-width: 768px){
    .container {
      width: 420px;
      margin: 0 auto;
    }
      .container h2 {
      margin-top: 20px;
      font-size: 24px;
      color: navy;
      text-align: center;
    }
      #translateForm form {
        width: 360px;
         margin: 20px;
         padding: 20px;
    }

     #translateForm input,select,button {
      margin: 20px 0px;
     }
      #translateForm button {
        width: 100%;
     }
    }
</style>