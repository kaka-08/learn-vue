<template>
<header class="header">
  <!-- 顶部导航 -->
  <div class="headerBar">
    <div class="topBar">
      <div class="leftNavBar fr">
        <ul>
          <li class="liSpan"><a href="#">个人中心</a><span></span>
          </li>
          <li class="liSpan" id="topCar"><a href="#"><img src="src/assets/images/topCar.png">购物车<b>3</b></a><span></span>
          </li>
          <li><a href="#">商品分类</a></li>
          <li><a href="#">积分活动</a></li>
          <li><a href="#">代理专区</a></li>
          <li class="liSpan"><a href="#">联系客服</a><span></span>
          </li>
          <li class="liSpan"><a href="#">网站导航</a><span></span>
          </li>
        </ul>
      </div>
      <div class="rightNavBar fl">
        <ul>
          <!--<li><a href="#">欢迎您，请登录！</a></li>
          <li><a href="#">注册</a></li>-->
          <li class="liSpan"><a href="#">{{usermsg.username}}</a><span></span>
          </li>
         <li class="liSpan"><a href="#">积分<b>1000</b></a><span></span>
          </li>
          <li class="liSpan"><a href="#">消息<b>5</b></a><span></span>
          </li>
          <li class=""><a href="#">退出</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 顶部LOGO -->
  <div class="logoSearchLevel">
    <div class="leftLogoBox fl"> <a href="#"><img src="src/assets/images/logo.png"></a> </div>
    <div class="rightSearchBox fl">
      <div class="searchBox">
        <input type="text" class="searchInp" placeholder="产品编号/关键词/条形号号">
        <a href="#" class="searchBtn"> 
          <span>搜&nbsp;索</span> </a> </div>
      <!-- <div class="cartBox"> <a href="#"> <span>购物车（<b class="countPro">0</b>）</span> </a>
        <div class="hideCartList"> </div> -->
      <div class="commendList">
        <ul>
          <li><a href="#">康师傅红茶</a></li>
          <li><a href="#">康师傅冰糖雪梨</a></li>
          <li><a href="#">哇哈哈八宝粥</a></li>
          <li><a href="#">礼盒</a></li>
          <li><a href="#">干果</a></li>
          <li><a href="#">竹叶青</a></li>
          <li><a href="#">哇哈哈八宝粥</a></li>
          <li><a href="#">礼盒</a></li>
          <li><a href="#">干果</a></li>
          <li><a href="#">竹叶青</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
    }
  },
  computed: {
    usermsg () {
      return this.$store.state.usermsg
    }
  }
    
}
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "./styles/header.less"; 
</style>
