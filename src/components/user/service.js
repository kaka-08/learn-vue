import $http from 'common/axios';


export function loginService(params){
   return $http.post('user/login.do',params)
}