<template>
  <div id="app">
    <header>
      <h1>Hello Vuex</h1>
      <p>FIRST NAME:{{ firstName }},LAST NAME:{{LastName}},FULL NAME:{{fullName}},AGE {{ count }}</p>
    </header>
    <UserList />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserList from './UserList';
export default {
  data(){
    return{
      firstName:"Zhang Weijie"
    }
  },
   computed:mapState({
    count :state=> state.count,
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // 传字符串参数 'count' 等同于 `state => state.count`
    LastName: 'lastName',
    fullName(state){
      return this.firstName +" . "+ state.lastName
    }
  }),
  components: {
    UserList
    }
}
</script>