import $http from 'common/axios';


export function getCatogoriesService(params){
    return $http.post('manage/category/get_categories.do',params)
 }
