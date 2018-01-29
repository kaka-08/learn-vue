<template>
  <div class="helper">
      <span class="left">{{unFinishedTodoItemLength}} items left</span>
      <span class="tabs">
          <span
             v-for="state in states"
             :key="state"
             :class="[state,filter === state ? 'actived' :'']"
             @click="toggleFilter(state)" >
              {{state}}
          </span>
      </span>
      <span class="clear" @click="clearAllCompleted">Clear completed</span>
  </div>
</template>

<script>
export default {
    props:{
      filter:{
          type:String,
          required:true
      },
      todoList:{
          type:Array,
          required:true
      }
    },
   data(){
       return{
           states:['all','active','completed'],
           itemCount:0
       }
   },
   computed:{
       unFinishedTodoItemLength(){
         return this.todoList.filter(todoitem => !todoitem.completed).length;         
       }
   },
   methods:{
       toggleFilter(state){
           this.$emit("toggle",state)
       },
       clearAllCompleted(){
           this.$emit("clearAllCompletedItem")
       }
   }
}
</script>


<style lang="less" scoped>
.helper{
    width: 600px;
    height:40px;
    line-height: 40px;
    background: #fff;
    text-indent: 10px;
    .left{
        float: left;
    }
    .clear{
        float: right;
        margin-right: 10px;
        cursor: pointer;
    }
    .tabs{
       margin-left: 100px;
       span{
         padding:0 5px;
         margin:0 5px;
         cursor: pointer;
       }
        .actived{
           border:1px solid #000000
         }
    }
}

</style>

