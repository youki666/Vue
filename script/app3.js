 var one=new Vue({
  el: '#app3-one',
  data: {
     message:'hello vue!',
     name:'youki'
  },
  methods:{
    
  },
  computed:{
       greet:function(){
     	return this.name+" "+'welcome to shanghai!';
     }
  }

})
  var two=new Vue({
  el: '#app3-two',
  data: {
     message:'hello vue!',
     name:'yanghui'
  },
  methods:{
  	
     change:function(){
     	one.message='hello youki!'
     }
    
  },
  computed:{
      greet:function(){
     	return this.name+" "+'welcome to shanghai!';
     }
  }

})