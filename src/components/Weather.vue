<template>
    <div> 
        <p>{{message}}</p>
        <ul class="weather">
            <li class="weacher-item" v-for="weather in weathers">
                <p>日期 {{weather.date}}</p>
                <p>高温 {{weather.high}}</p>
                <p>低温 {{weather.low}}</p>
                <p>风力 {{weather.fengli}}</p>
                <p>风向 {{weather.fengxiang}}</p>
                <p>天气状况 {{weather.type}}</p>
            </li>     
        </ul>
    </div>    
</template>

<script>
export default {
  data(){
    return{
        message:null,
        weathers:[]
    }
  },
  mounted:function(){ //created方法，页面初始调用   
  this.$nextTick(function () {
        var url = "weather/json.shtml?city=北京";
        this.$http({
            method: 'get',
            url: url,
            data: null
        }).then(res=>{
            this.message = res.data.result.warning || "今天天气很好，愿您开心!";
            this.weathers = res.data.result.forecast
        },
        res=>{

        })
      })   
  },
}
</script>


<style lang="less" scoped>
  .weather{
      widows: 80%;
      height: auto;
      .weacher-item{
          float: left;
          width: 150px;
          height: 150px;
          border: 1px solid #8c0776;
          border-radius: 3px;
          margin: 5px 5px;
          padding:5px 5px;
          cursor: pointer;
          p{
              line-height: 20px;
              font-size: 12px;
          }
      }

  }
</style>

