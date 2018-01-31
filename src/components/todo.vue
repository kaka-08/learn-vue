<template>
  <section class="real-app">
      <input 
        type="text" 
        class="add-inp" 
        autofocus
        placeholder="接下来要做什么"
        @keyup.enter="addTodo">
        <Item 
          :todoitem="todoitem"
          v-for="todoitem in filtedTodos"
          :key="todoitem.id"
          @del = "deleteTodo"
         />
        <Tabs :filter="filter" :todoList="filtedTodos" @toggle="toggle" @clearAllCompletedItem="clearAllCompletedItem" />
  </section>
</template>


<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";


let id = 0;

export default {
   data(){
       return{
         todos:[],
         filter:'all'
       }
   },
   components:{
      Item,Tabs
    },
    computed:{
        filtedTodos(){
         if(this.filter == "all"){
             return this.todos;
         }   
         const completed = this.filter === "completed";
          return this.todos.filter(todoitem=>todoitem.completed == completed)
       }
    },
    methods:{
       addTodo(e){
           this.todos.unshift(
               {
                id:id++,
                content:e.target.value.trim(),
                completed:false
            }
           )
           e.target.value = "";
           this.filter = 'all';
       },
       deleteTodo(id){
           this.todos.splice(this.todos.findIndex(todoitem=>todoitem.id === id),1);  
       },
       toggle(state){
           this.filter = state;
       },
       clearAllCompletedItem(){
           this.todos = this.todos.filter(todoitem=>!todoitem.completed);  
       }
    }
}
</script>

<style lang="less" scoped>
   .real-app{
       width: 600px;
       margin: 0 auto;
       box-shadow: 0 0 5px #666;
   }
   .add-inp{
       position: relative;
       width: 100%;
       font-size: 24px;
       font-family: inherit;
       font-weight: inherit;
       line-height: 1.4em;
       border: 0;
       outline: none;
       color: inherit;
       padding:6px;
       border:1px solid #999;
       box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 1);
       box-sizing: border-box;
       padding: 16px 16px 16px 60px;
       border: none;
       box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 1)
   }
</style>
