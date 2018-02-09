
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


export function assembleCategoryTree(targetArr,dgPoint){
    var finalMap = {};

    var firstLevel = [];

    //判断数组是否长度为0，如果是，直接返回
    if(targetArr.length == 0){ return }
    for(var i=0;i<targetArr.length;i++){
        // 获取第一层 
       if(targetArr[i].parentId === dgPoint ){
          targetArr[i]["secondList"] = [];  // 给元素添加接收第二层的节点
          firstLevel.push(targetArr[i]);
          targetArr.splice(i,1);  //循环到之后 删除该数据，避免重复循环
       }
    }

 
  //获取第二层的树
  for(var i=0;i<firstLevel.length;i++){
      //循环第一层，获取第一层的id,并判断数组的parentId
      var _tempDgPoint = firstLevel[i].id;  //递归点 
      var _list = firstLevel[i]["secondList"];
      for(var j=0;j<targetArr.length;j++){
          // 获取第一层 
         if(targetArr[j].parentId === _tempDgPoint ){
              targetArr[j]["thirdList"] = [];  //给元素添加接收第三层的节点
              _list.push(targetArr[j]);          
              targetArr.splice(j,1);  //循环到之后 删除该数据，避免重复循环
         }
      }
  }
  
  //获取第三层的树
  for(var m=0;m<firstLevel.length;m++){
  var firstObjectItem = firstLevel[m];   //假设第一层节点的item元素
      var secondList = firstObjectItem.secondList; // 第二层的数组
      for(var i=0;i<secondList.length;i++){
          if(secondList.length == 0){
              continue;   //避免不必要的循环
          }
          // 获取递归点 
          var _tempPoint = secondList[i].id;
          var _list = secondList[i]["thirdList"];
          for(var j=0;j<targetArr.length;j++){
              if(targetArr[j].parentId === _tempPoint){
                  //  targetArr[j]["thirdList"] = [];  //给元素添加接收第四层的节点   如果有的话
                  _list.push(targetArr[j]);          
                  targetArr.splice(j,1);  //循环到之后 删除该数据，避免重复循环  ==>如果层级有三层，此时targetArr的长度应为0
              }
           }
      }
  }   


   // 组装map
   finalMap.firstLevel = firstLevel; 

   return finalMap
   

}
