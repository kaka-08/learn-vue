import * as types from './mutation-types';

export const incrementModuleACount = ({ commit }) => {
  setTimeout(() => {
    commit(types.INCREMENT_MODULE_A_COUNT)         
  }, 1000);
}


