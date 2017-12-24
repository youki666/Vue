Vue.component('greeting',{
	template:`
	 <p>
	     {{name}}:大家好，这是我的男朋友！
        <button v-on:click='change'>change</button>
	  </p>
	`,
	 data:function(){
	 	return {
	 		name:'鹿晗'
	 	}
	 },
	 methods:{
	 	change:function(){
	 		this.name='henry';
	 	}
	 }
})
 new Vue({
 	el:'#app4-one'
 })
 new Vue({
 	el:'#app4-two'
 })
 Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})