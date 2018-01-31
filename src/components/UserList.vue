<template>
   <section>
    <h6>当前的VIP用户</h6>
    <ul>
        <li v-for="user in vipUsers">
            {{ user.name }}
        </li>
    </ul>
    <h6>所有的用户</h6>  
    <ol>
        <li v-for="user in userList">
            {{ user.name }}
        </li>
    </ol>
    <button @click="getNormalUsersCount"> {{normalUsersCount == null?"点击获取普通用户数量" :normalUsersCount }}</button>
    <ol>
        <li v-for="user in normalUsers">
            {{ user.name }}
        </li>
    </ol>
    <button @click="changeStoreCountM">哥们，store里面的年龄太小，加19/次如何</button>
    <h5>Mulation直接处理:同步{{count}}</h5>
    <button @click="changeStoreCountA">哥们，store里面的年龄太小，加19/次如何</button>
    <h5>Action处理:异步{{count}}</h5>
    <button @click="actionB">哥们，store里面的年龄太小，加19/次如何</button>
    <h5>Action处理:异步:正经体验一下何为异步{{count}}</h5>
   <button @click="actionD">点击获取时间</button>
    <h5>当前时间: {{time}}</h5>
   </section>
</template>


<script>
import { mapState,mapGetters,mapMutations,mapActions  } from 'vuex';
export default {
    data(){
        return{
            users:[],
            normalUsersCount:null,
            normalUserList:[]
        }
    },
    computed:mapState({
        count : state=> state.count,
        time : state=> state.time,
        userList :state=> state.users,
        ...mapGetters([
        'vipUsers','normalUsers'
        ])
        // normalUsers(){
        //   this.normalUserList = this.$store.getters.normalUsers;
        //   return this.$store.getters.normalUsers
        // }
    }),
    methods:{
        getNormalUsersCount: function () {
            this.normalUsersCount = this.$store.getters.normalUsers.length;
        },
         ...mapMutations({
        changeStoreCountM: 'increment' // 将 `this.changeStoreCount()` 映射为 `this.$store.commit('increment')`
        }),
        ...mapActions({
        changeStoreCountA: 'increment' // 将 `this.changeStoreCountA()` 映射为 `this.$store.dispatch('increment')`  
        }),
        ...mapActions(["actionB"])
    }  
}
</script>
