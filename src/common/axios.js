/**
 * create by zwj 2018/2/5
 */

import axios from 'axios';
import qs from 'querystring';


// 初始化 axios 实例
var axios_instance = axios.create();

// Add a request interceptor
axios_instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(config.method  === 'post'){  
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios_instance.interceptors.response.use(res=> {
  // 请求成功
    if(res.data.success){
      return Promise.resolve(res.data)
    }else{
      //提示error信息
      return Promise.reject(res.data);
    }  
}, error=>{
  // 404等异常 ===> 后台暂时没有做处理，因此前台接收不到？待研究 
  return Promise.reject(error)
});


axios_instance.defaults.timeout = 5000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios_instance.defaults.baseURL = 'http://localhost:8080/';

export default axios_instance;





