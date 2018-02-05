
/**
 *  import qs from 'querystring'; nodejs环境下 这个是自带的，不用另外 import qs from 'qs',引用了也用不了
 *  算是踩的一个坑，这个坑浪费了数小时时间，原因是没有好好的研究axios的官方api,虽然下面的方法用不到了，不过还是想把它留下
 *  算是给自己的一个警醒：遇到问题，首先去阅读官方文档，最好是英文的。
 * @param {*} params 
 */  
export function stringify(params) {
    var values = "";
    var objKeys;
    var keysArr = Object.keys(params);   //  keys == ['username','password'];
    var valuesArr=[];
    //得到params的值的数组
    for(var key in params){
        values += key+'='+params[key]+'&'
      }
 
    return values;
};
