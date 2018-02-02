import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './modules/moduleA/index';
import * as types from './mutation-types';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

 
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    users:[
       {id:1,name:"KAKA",idol:true,isMe:false},
       {id:2,name:"Cristiano Ronaldo",idol:true,isMe:false},
       {id:3,name:"Zhang weijie",idol:false,isMe:true}
     ],
     storeCount:100,
     storeName:"store name"
  },
  // 有时候我们需要从 store 中的 state 中派生出一些状态 ，即筛选一些 state里面的数据
  getters: {
      getIdols(state){
        return state.users.filter(user=>user.idol)
      },
      getIsMe(state){
        return state.users.filter(user=>user.isMe)[0]
      },
      getStoreCount(state){
        return state.storeCount
      }
  },
  //更改 Vuex 的 store 中的state 的唯一方法是提交 mutation 在 Vuex 中，mutation 都是同步事务 所以异步还得是  action
  //其实 mutations 做的一般都是定义一些事件。
  mutations,
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  // 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
  // store.dispatch 是返回  Promise 滴 
  // actions  调   mutations
  actions,
  modules: {
    moduleA
  }
});




export default store;

