import * as types from './mutation-types';

export const userLoginAction = ({ commit,state },data) => {
  setTimeout(() => {
    commit(types.USER_LOGIN_SUCCESS,data)      
  }, 100);
}


