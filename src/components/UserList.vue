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
   </section>
</template>


<script>
import { mapState,mapGetters } from 'vuex';
export default {
    data(){
        return{
            users:[],
            normalUsersCount:null,
            normalUserList:[]
        }
    },
    computed:mapState({
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
        }
    }  
}
</script>
