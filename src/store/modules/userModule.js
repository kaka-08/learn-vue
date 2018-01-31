const userModule = {
    //namespaced: true,   // 加了命名空间，相当于 state 组件化，或者私有化
    state: { 
        userList:[
            {
            id:"p1001",name:"张三",level:30300
           }, {
            id:"p1002",name:"李四",level:28120
           }, {
            id:"p1003",name:"王五",level:14010
           }, {
            id:"p1004",name:"赵六",level:6000
           }, {
            id:"p1005",name:"田七",level:5400
           }, {
            id:"p1006",name:"你管呢",level:3200
           }
        ]
     },
    mutations: { 
        
     },
    actions: { 
        
     },
    getters: { 
        getVIPUserList (state) {
            return state.userList.filter(user=>user.level>=10000)
          },
        getRootCount (state, getters, rootState) {
            return rootState.count
        }
     }
  }

  export default userModule;

  