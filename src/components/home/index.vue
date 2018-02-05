<template>
   <div>
    <Header/>
    <section class="w1224"> 
       <Weather />
    </section>  
    <Footer/>
   </div>  
</template>

<script>
import Header from 'components/header/index.vue';
import Footer from 'components/footer/index.vue';
import Weather from 'components/Weather';

export default {
  data(){
    return{
    }
  },
  computed:{
  },
  components: {
    Header,Footer,Weather
  }
}
</script>


