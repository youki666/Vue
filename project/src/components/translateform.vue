<template>
  <div id="translateform">
    <form v-on:submit="formSubmit" >
      <input type="text" placeholder="请输入需要翻译的内容">
       <select >
      <option value="en">English</option>
    </select>
    <input type="submit" value="submit">
    </form>
   
  </div>
</template>

<script>
/*import Test from './components/test'*/
import Trans from './components/translate'
import form from './components/translateform'


export default {
  name: 'translateform',
  data:{

  },
  method:{
    formSubmit:function(){
      
    }
  }
}
</script>

<style scoped>

</style>