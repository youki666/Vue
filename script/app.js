 var myapp=new Vue({
  el: '#app',
  data: {
    message: 'hello yanghui!',
    x:0,
    y:0,
    name:'',
    age:'',
    changeColor:false,
    changeLength:false,
    error:false,
    success:false,
    charactors:['luffy','mario','youki'],
    users:[
             {name:"emily",age:20},
             {name:"youki",age:23},
             {name:"em3",age:220}
             ],
    website: 'http://www.cctv.com',
    websiteTag:"<a href='http://www.cctv.com' >央视</a>"
  },
  methods:{
  	greet:function(time){
  		return 'good'+' '+time+' '+this.name+'!';
  	},
  	add:function (inc) {
  		this.age+=inc;
  	},
  	subtract:function(dec){
  		this.age-=dec;
  	},

  	updateXY :function(ev){
  		console.log(ev);
           this.x=ev.offsetX;
           this.y=ev.offsetY;
  	},
  	stopMove:function(ev){
  		ev.stopPropagation();
  	},
  	alert:function(){
  		alert('hello vue!')
  	},
  	logoname:function(){
  		//console.log("you are writing name!");
  		this.name=this.$refs.name.value;
  	},
	logoage:function(){
  		//console.log("you are writing age!");
  		this.age=this.$refs.age.value;
  	}
  },
  computed:{
  	comPclass:function(){
  		return {
  			changeColor:this.changeColor,
  			changeLength:this.changeLength
  		}
  	}
  }

})