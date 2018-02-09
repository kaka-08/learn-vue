import * as types from './mutation-types';

export const getCategoryListAction = ({ commit,state },data) => {
  setTimeout(() => {
    commit(types.GET_CATEGORY_LIST,data)      
  }, 100);
}


