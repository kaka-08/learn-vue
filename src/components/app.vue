<template>
   <div id="app">
       <transition name="fade"
                mode="out-in">
                   <router-view></router-view>
                  <p @click="toRoutesVue">测试路由，跳转到路由的切换页面</p>        
                
    </transition>
   </div>      
</template>

<script>

export default {
  data(){
    return{
    }
  },
  computed:{
  },
  methods:{
      toRoutesVue(){
          this.$router.push({ path: 'testIview' })
      }
  },
  components: {
  }
}
</script>


