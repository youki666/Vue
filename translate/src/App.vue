<template>
  <div id="app">
      <h1 class="text-info">Translate online</h1>
       <h5 class="text-muted">简单/ 便捷/实用</h5>
          <translateform v-on:submit="translateText"></translateform>
          <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import Form from './components/translateForm'
import Output from './components/translateOutput'


export default {
  name: 'app',
  data:function(){
    return  {
      translatedText:'',
    }
  },
  components: {
    "translateOutput":Output,
    "translateform":Form,
  },
  methods:{
    translateText:function(text,lang){
      //console.log(text);
      this.$http.jsonp("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171230T131002Z.f12e910c440f488a.ff152755f28df7f3127044c905646e07a05b3c21&lang="+lang+"&text="+text)
      .then((response)=>{
       console.log(response);
       this.translatedText=response.body.text[0];
      })
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
