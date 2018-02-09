import * as types from './mutation-types';
import { assembleCategoryTree } from  'common/utils';

const mutations = {
    [types.GET_CATEGORY_LIST]:(state, data)=>state.catogoryList = assembleCategoryTree(data,"0")
}

export default mutations;


