<template>
    <Carousel class="lunbo-box"  v-model="value1" autoplay  loop>
        <CarouselItem>
            <img src="src/assets/images/banner01.jpg">
        </CarouselItem>
        <CarouselItem>
            <img src="src/assets/images/banner02.jpg">
        </CarouselItem>
        <CarouselItem>
            <img src="src/assets/images/banner03.jpg">
        </CarouselItem>
        <CarouselItem>
            <img src="src/assets/images/banner04.jpg">
        </CarouselItem>
         <CarouselItem>
            <img src="src/assets/images/banner05.jpg">
        </CarouselItem>
    </Carousel>   
</template>

<script>
export default {
    data(){
        return{
            value1:0
        }
    }
   
}
</script>



<style lang="less" scoped>
     .lunbo-box{
        width: 710px;
        height: 418px;
        overflow: hidden;
        padding:10px 5px 0px 5px;
        img{
            width: 710px;
            height: 418px;
        }
    }
</style>
