<template>
   <div>
    <Header/>
    <section> 
       <Index />
       <Banner />
       <Products />
    </section>  
    <Footer/>
   </div>  
</template>

<script>
import Header from 'components/header/index.vue';
import Footer from 'components/footer/index.vue';
import Weather from 'components/Weather';
import Products from 'components/products/Products';
import Index from 'components/index/webIndex';
import Banner from 'components/banner/Banner';

export default {
  data(){
    return{
    }
  },
  computed:{
  },
  components: {
    Header,Footer,Products,Index,Banner
  }
}
</script>


