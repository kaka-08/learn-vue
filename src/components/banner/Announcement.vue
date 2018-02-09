<template>
   <div class="announcement-box">
    <Card class="cart-box">
        <p slot="title" class="msg-title">
            <Icon type="speakerphone"></Icon>
            公告消息
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            Change
        </a>
        <ul>
            <li v-for="item in randomMsgList" class="msg-li" :class="[item.rate>9.5 ? 'toRed' : 'toGreen']">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
            </li>
        </ul>
    </Card>
    <Tabs size="small" class="tabs-box">
        <TabPane label="市场">
            <p>
               市场(market) 是由那些具有特定的需要或欲望，而且愿意并能够通过交换来满足这种需要或欲望的市场的大小取决于那些表示有某种需要
            </p>

        </TabPane>
        <TabPane label="积分">
            <p>
               积分商城的“积分”,实现客户关怀、客户忠诚度提升的目的。其消费模式包括传统的现场消费如超市购物，也包括现在日益普及的网上购物    
            </p></TabPane>
        <TabPane label="加盟">
            <p>
                免费加盟我们吧，拥有优秀的开发小组和营销团队
            </p>
        </TabPane>
        <TabPane label="推广">
            <p>
                不止于线下的面对面，我们也会在线上做SEO,产品的质量和效率是我们永远追求的。
            </p>
        </TabPane>
    </Tabs>
    <!-- <div class="ad-box">
        <h1>广告部门</h1>
    </div> -->
   </div>
</template>

<script>
    export default {
        data () {
            return {
                msgList: [
                    {
                        name: '春运高峰期，货物销售紧张，请提前囤货',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 10.0
                    },
                    {
                        name: '新品大部分都会有折扣，请移至新品区查看详情',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.8
                    },
                    {
                        name: '网站推出一些促销的货物，点击查看',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '只有登录的用户才有可能赚取积分哦',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: "Schindler's List",
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMsgList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMsgList = getArrayItems(this.msgList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>

<style lang="less" scoped>
    .ivu-card {
        font-size: 12px;
    }
    .announcement-box{
        width: 275px;
        height: 417px;
        position: absolute;
        right: 0px;
        top: 10px;
        .tabs-box{
           width: 270px;
           padding:5px 15px;
           margin: 0 auto;
        }
        .cart-box{
            min-height: 160px;
            overflow: hidden;
            padding-bottom: 10px;
        }
         .msg-title{
            font-weight: 400
        }
    }
    
    .ivu-tabs,.ivu-tabs-tabpane {
        padding: 3px 15px;
    }

    .msg-li{
        line-height: 20px;
    }
    .toRed{
        color: red;
        a{
            color: red;
        }
    }
    .toGreen{
         color:green;
          a{
            color: #898787;
        }
    }
 

    .ad-box{
        width: 100%;
        height: 88px;
        position: absolute;
        bottom: 0;
        right: 0;
        background: #ccc;
        line-height: 75px;
        text-align: center
    }
    
    .tabs-box{
        p{
            text-indent: 24px;
        }
    }
   
    
</style>
