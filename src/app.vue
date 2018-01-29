<template>
  <div id="app">
       <div id="cover"></div>
        <Header />
        <Todo />         
        <Footer />
  </div>
   
</template>


<script>
import Header from "./head.vue";
import Footer from "./footer.jsx";
import Tabs from "./tabs.vue";
import Todo from "./todo.vue";

export default {
    components:{
     Header,Footer,Tabs,Todo
    }
}
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  #cover { 
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: .5;
  z-index: -1}
}

</style>

