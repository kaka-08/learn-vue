<template>
     <section>
         <h3>其实我很好奇store的modules如何使用，来测试一下</h3>
         <p>{{name}}</p>
         <button @click="incrementModule" >增长模块A的count</button>
         <span>{{count}}</span><br />
         <router-link to="testStores">跳转到测试store页面</router-link> 
         <router-link to="testIview">跳转到测试vue的ui组件页面，包含axios</router-link> 
     </section>
</template>



<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers('moduleA');  //注册过的模块，mapState mapActions的state参数默认为局部模块的state
export default {
    data(){
        return{
            newName:"kaka is my new Name"
        }
    },
    computed: {
    ...mapState({
         count:state=>state.count,
         name:state=>state.name
       })
    },
    methods: {
        ...mapActions({
           incrementModule:"incrementModuleACount"
        })  
    }
}

</script>

