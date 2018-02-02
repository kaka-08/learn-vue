<template>
  <div id="app">
    <header>
      <h1>Hello Vuex</h1>
      <router-link to="testStores">Store的配置结果</router-link>      
      <router-link to="testModuleA">测试模块</router-link>
      <router-link to="testIview">测试iview-ui</router-link>
    </header>
    <section>
      <!-- 对应的组件内容渲染到router-view中 -->
      <router-view></router-view>
    </section>
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
  },
  components: {
  }
}
</script>