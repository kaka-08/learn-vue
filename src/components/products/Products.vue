<template>
    <div class="clearfl">
      <div class="productMain w1224 clearflt"> 
        <div class="proTitle">
            <h3 class="fl h36"><span>新品推荐</span></h3>
        </div>
        <div class="sproductBox">
            <ul class="riPro">
                <li class="box01" v-for="(product,index) in productList" v-if="index<=4">
                    <a href="#">
                        <div class="imgDiv"><img v-bind:src="product.mainImage"></div>
                        <div class="proTxt"><p>{{ product.subtitle }}</p></div>
                        <p class="priceP">{{ product.price | moneyFormat }}</p>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
     export default {
        data () {
            return {
                productList: []
            }
        },
  mounted:function(){ //created方法，页面初始调用   
  this.$nextTick(function () {
        var url = "/manage/product/get_product_list.do";
        this.$axiosHttp.post(url).then(res=>{
           this.productList =  res.data.data.data.list
        },
        res=>{
           console.log(res);
        })
      })   
  },
}
</script>


<style lang="less" scoped rel="stylesheet/less">
  @import "./styles/products.less"; 
</style>

