import * as types from './mutation-types';

const mutations = {
    [types.INCERMENT_STORE_COUNT]:state=>state.storeCount++,
    changeStoreCountByMutation:state=>state.storeCount++,
    [types.CHANGE_STORE_NAME](state, payload){
        state.storeName = payload.newName
    }
}

export default mutations;


