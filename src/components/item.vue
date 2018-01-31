<template>
   <div :class="['todo-item',todoitem.completed ? 'completed': '']">
       <input 
         type="checkbox"
         class="toggle"
         v-model="todoitem.completed"
         >
         <label>{{todoitem.content}}</label>
         <button class="destroy" @click="deleteTodo" >X</button>
   </div>
</template>



<script>
export default {
    props:{
        todoitem:{
            type:Object,
            required:true
        }
    },
    methods:{
        deleteTodo(){
        // this.$emit  ==> 父组件会遍历子组件的 方法，看看有没有触发  this.$emit，一旦触发，父组件就会去调用方法并且更新组件
        this.$emit("del",this.todoitem.id)
        }
    }
}
</script>


<style lang="less" scoped>
.todo-item{
    width:100%;
    margin:0 auto;
    height:50px;
    border-bottom: 1px solid #000;
    text-align: left;
    line-height: 50px;
    background-color: #fff;
    input{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        float: left;
        border: 0;
    }
    label{
        line-height:50px;
        height:50px;
        display:inline-block;
        float:left;
    }
    .destroy{
        width:40px;
        height: 40px;
        float: right;
        margin-top: 5px;
        border:0;
        background:#fff;
        font-size: 20px;
    }
    :hover{
        .destroy{
            display: block;
            cursor: pointer;
         }
    }   
}
 .completed{
       label{
         text-decoration:line-through;
       }
    }
        
        
    
    
</style>
