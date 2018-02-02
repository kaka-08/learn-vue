import * as types from './mutation-types';

export const incrementStoreCountAction = ({ commit }) => {
    //三秒之后执行加一
    setTimeout(function(){
        commit(types.INCERMENT_STORE_COUNT)        
      },3000)
  }


export const do2Action = ({ commit }) => {
    // 先执行 加一  
    commit(types.INCERMENT_STORE_COUNT) ;
    //三秒之后再执行加一
    setTimeout(function(){
        commit(types.INCERMENT_STORE_COUNT)        
      },3000)
  }


export const changeStoreNameAction = ({ commit },payload) => {
    commit(types.CHANGE_STORE_NAME,payload)
}
