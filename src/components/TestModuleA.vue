<template>
     <section>
         <h3>其实我很好奇store的modules如何使用，来测试一下</h3>
         <p>{{name}}</p>
         <button @click="incrementModule" >增长模块A的count</button>
          <p></p>
         <span>{{count}}</span>       
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

