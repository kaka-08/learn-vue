const productsModule = {
    //namespaced: true,  // 加了命名空间，相当于 state 组件化，或者私有化
    state: { 
        productList:[
            {
            id:"p1001",name:"绿茶",price:"21.50",quantity:"100"
           }, {
            id:"p1002",name:"红茶",price:"21.50",quantity:"20"
           }, {
            id:"p1003",name:"蜜茶",price:"21.50",quantity:"90"
           }, {
            id:"p1004",name:"娃哈哈水",price:"15",quantity:"8"
           }, {
            id:"p1005",name:"可口可乐",price:"56",quantity:"67"
           }, {
            id:"p1006",name:"百岁山",price:"52",quantity:"900"
           }
        ],
        obj:{
            message:"this is obj message"
        }
     },
    mutations: { 
        updateMessage(state,v){
            state.obj.message = v
          }
     },
    actions: { 
        
     },
    getters: { 
        getFewProductList (state) {
            return state.productList.filter(product=>product.quantity<=20)
        },
        gettotalPrice (state, getters, rootState) {
            return rootState.price
        },
        getMessage(state){
            return state.obj.message
        }
     }
  }



  export default productsModule;