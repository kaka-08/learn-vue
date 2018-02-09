<template>
    <div class="bannerBox w1224">
        <div class="leftProductsList fl">
            <div class="wrap" id="leftNav">
                <ul>
                    <li :data-id="index" v-for="(firstNavItem,index) in catogoriesList.firstLevel" v-on:mouseenter="changeIndex(index)" v-on:mouseleave="outChangeIndex">
                        <span>
                            {{ firstNavItem.name }}
                        </span>
                    </li>
                </ul>
                <div id="sub" class="none">
                    <div :id="ids[index]" class="sub_content" v-for="(firstNavItem,index) in catogoriesList.firstLevel" v-if="currentIndex == index">
                        <dl v-for="(secondNavItem,i) in firstNavItem.secondList">
                            <dt>
                                <a href="">{{ secondNavItem.name  }}<i>&gt;</i></a>
                            </dt>
                            <dd v-for="thirdNavItem in secondNavItem.thirdList">
                                <a href="">{{ thirdNavItem.name  }}</a>
                            </dd>
                        </dl>
                    </div>
               </div>
            </div>
        </div>
        <!--  JQ写的banner淡入淡出特效 -->
        <Lunbo /> 
        <Announcement />   
    </div>
</template>


<script>
import 'assets/js/jquery.min.js';
import 'assets/js/functions.js';
import 'assets/js/transforData.js';
import 'assets/js/megadropdown.js';
import { getCatogoriesService,checkUsernameService } from './service';
import { mapGetters, mapActions } from 'vuex'
import Lunbo from './Lunbo';
import Announcement from './Announcement';
import $http from 'common/axios';
     export default {
        data () {
            return {
                index:0,
                ids:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
                currentIndex:-1,
                _timer : null,
                
            }
        },
        computed:mapGetters({catogoriesList:'catogories'}),
        mounted:function(){ //created方法，页面初始调用  
        let _this = this; 
        _this.$nextTick(function () {
                $http.post('manage/category/get_categorieDatas.do?parentId=0').then(res=>{
                   _this.getCategoryList(res.data);
                },
                res=>{
                   console.log(res);
                })
            })   
        },
        methods:{ 
            ...mapActions({
                getCategoryList: 'getCategoryListAction' // 将 `this.getCategoryList()` 映射为 `this.$store.dispatch('getCategoryListAction')`
            }),
            changeIndex:function(index){
                const _this = this;
                 _this._timer = setTimeout(function(){
                    _this.currentIndex = index;
                },100);
                            
            },
            outChangeIndex:function(){
                clearTimeout(this._timer);
                this._timer = null;
                this.changeIndex(this.currentIndex);
            }
        } ,
        components: {
           Lunbo,Announcement
        }
}
</script>



<style lang="less" scoped rel="stylesheet/less">
  @import "./styles/index.less"; 
</style>
