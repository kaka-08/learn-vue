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
    time:new Date(),
    users:[
      {id:'1001',name:"zhangsan",isVip:false},
      {id:'1002',name:"lisi",isVip:false},
      {id:'1003',name:"wangwu",isVip:true},
      {id:'1004',name:"maliu",isVip:false},
      {id:'1005',name:"tianqi",isVip:true}
    ]
  },
  // 有时候我们需要从 store 中的 state 中派生出一些状态 ，即筛选一些 state里面的数据
  getters: {
    vipUsers: state => {
      return state.users.filter(user => user.isVip)
    },
    normalUsers:state => {
      return state.users.filter(user => !user.isVip)
    },
  },
  //更改 Vuex 的 store 中的state 的唯一方法是提交 mutation 在 Vuex 中，mutation 都是同步事务 所以异步还得是  action
  mutations: {
    increment (state) {
      // 变更状态
      state.count+=19
    },
    decrement (state) {
      // 变更状态
      state.count-=9
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  // 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
  // store.dispatch 是返回  Promise 滴 
  actions: {
    increment (context) {
      context.commit('increment')
    },
    // { commit }  == context.commit  remember this.
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('decrement')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('increment')
      })
    }
  }
})


export default store;