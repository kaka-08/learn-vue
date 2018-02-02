import * as types from './mutation-types';
import * as actions from './action';
import mutations from './mutation';

const moduleA = {
    namespaced: true ,  // 命名空间 将此模块 组件化 或者私有化? 
    state: { 
      count: 32,
      name:"moduleA",
      newName:null
    },
    getters: {
      doubleCount (state) {
        return state.count * 2
      },
      sumWithRootCount (state, getters, rootState) {
        return state.count + rootState.storeCount
      }
    },
    mutations,    
    actions,
  }


export default moduleA;