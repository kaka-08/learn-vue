import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/src/';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export function get(url){
    return axios.get(url)
}


export function post(url,params){
    return axios.post(url,params)
}






