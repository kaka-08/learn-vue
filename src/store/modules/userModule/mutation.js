import * as types from './mutation-types';

const mutations = {
    [types.USER_LOGIN_SUCCESS]:(state, data)=>state.usermsg = data
}

export default mutations;


