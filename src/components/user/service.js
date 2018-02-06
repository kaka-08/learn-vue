import $http from 'common/axios';


export function loginService(params){
   return $http.post('user/login.do',params)
}

export function registerService(params){
    return $http.post('user/register.do',params)
 }

 export function checkUsernameService(username){
    return $http.get(`user/hasUserExist/${username}`)
 }
 