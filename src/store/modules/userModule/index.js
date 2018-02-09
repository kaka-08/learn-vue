import * as types from './mutation-types';
import * as actions from './action';
import mutations from './mutation';

const categoryModule = {
    state: { 
      catogoryList:{
        firstNav:[
        {
            id:"product-a-id",
            productId:"0",
            name:"粮油米面",
            secondNavs:[
                {
                    id:"product-a-son-001-id",
                    parentId:"product-a-id",
                    name:"方便面",
                    thirdNav:[
                        {
                            id:"product-a-son-001-son-001-id",
                            parentId:"product-a-son-001-id",
                            name:"华龙"
                        },
                        {
                            id:"product-a-son-001-son-002-id",
                            parentId:"product-a-son-001-id",
                            name:"今麦郎"
                        },
                        {
                            id:"product-a-son-001-son-001-id",
                            parentId:"product-a-son-003-id",
                            name:"康师傅"
                        },
                        {
                            id:"product-a-son-001-son-001-id",
                            parentId:"product-a-son-004-id",
                            name:"白象"
                        },
                        {
                            id:"product-a-son-001-son-005-id",
                            parentId:"product-a-son-001-id",
                            name:"统一"
                        }
                    ]
                },
                {
                    id:"product-a-son-002-id",
                    parentId:"product-a-id",
                    name:"调味品",
                    thirdNav:[
                    {
                        id:"product-a-son-002-son-001-id",
                        parentId:"product-a-son-002-id",
                        name:"海天"
                    },
                    {
                        id:"product-a-son-002-son-002-id",
                        parentId:"product-a-son-002-id",
                        name:"宁化府"
                    },
                    {
                        id:"product-a-son-002-son-003-id",
                        parentId:"product-a-son-002-id",
                        name:"乌江"
                    },
                    {
                        id:"product-a-son-002-son-004-id",
                        parentId:"product-a-son-002-id",
                        name:"太古"
                    },
                    {
                        id:"product-a-son-002-son-005-id",
                        parentId:"product-a-son-002-id",
                        name:"王致和"
                    },
                    {
                        id:"product-a-son-002-son-006-id",
                        parentId:"product-a-son-002-id",
                        name:"老干妈"
                    }
                    ]
                }     
            ]  
        },
        {
            id:"product-b-id",
            productId:"0",
            name:"冲饮茗茶",
            secondNavs:[
                {
                    id:"product-b-son-003-id",
                    parentId:"product-b-id",
                    name:"茶叶茶包",
                    thirdNav:[
                        {
                            id:"product-b-son-003-son-001-id",
                            parentId:"product-b-son-003-id",
                            name:"茗茶"
                        }
                    ]
                }
            ]   
        }
        ]
    }
    },
    getters: {
      catogories: state => state.catogoryList
    },
    mutations,    
    actions
  }


export default categoryModule;