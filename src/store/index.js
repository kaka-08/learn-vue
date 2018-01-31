import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//全局过滤器
Vue.filter('vipUser', function (value) {
  // 返回处理后的值
})

const store = new Vuex.Store({
  state: {
    count: 0,
    lastName:"God",
    users:[
      {id:'1001',name:"zhangsan",isVip:false},
      {id:'1002',name:"lisi",isVip:false},
      {id:'1003',name:"wangwu",isVip:true},
      {id:'1004',name:"maliu",isVip:false},
      {id:'1005',name:"tianqi",isVip:true}
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    vipUsers: state => {
      return state.users.filter(user => user.isVip)
    },
    normalUsers:state => {
      return state.users.filter(user => !user.isVip)
    },
  }
})


export default store;