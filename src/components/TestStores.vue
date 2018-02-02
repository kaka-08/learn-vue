<template>
    <section>
      <button @click="changeStoreNameForKaka">修改store name 为 kaka</button>
      <p>所有用户</p>
      <p>mapState方法映射所有的用户</p>
      <ul>
        <li v-for="user in users">
          {{user.name}}
        </li>
      </ul>
      <p>偶像列表</p>
      <p>mapGetters方法映射过滤处理的用户</p>
      <ul>
        <li v-for="user in getIdols">
          {{user.name}}
        </li>
      </ul>
      <p>我自己的名字:{{getIsMe.name}}</p>
      <p>mapState得到store里面的storeCount: {{ storeCount }}</p>
      <p>mapGetters得到store里面的storeCount: {{ getStoreCount }}</p>
      <button @click="changeStoreCountByMutation">mutation改变store里面的state,Mutation是同步的，无法异步，所以下面用了action</button>
      <button @click="changeStoreCountByAction">action改变store里面的state,3000ms之后执行</button>
      <button @click="do2Action">action改变store里面的state，把前面两个方法结合，感受一下异步</button>
      <p>{{username}}</p>
    </section>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapState(["users","storeCount","storeName"]),
    ...mapGetters(["getIdols","getIsMe","getStoreCount"]),
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods:{
    ...mapMutations([
      "changeStoreCountByMutation"
    ]),
   ...mapActions({
      changeStoreCountByAction: 'incrementStoreCountAction', //  将 `this.changeStoreCountByAction()` 映射为 `this.$store.dispatch('incrementStoreCountAction')`
      do2Action: 'do2Action', //  将 `this.do2Action()` 映射为 `this.$store.dispatch('do2Action')`
    }),
    changeStoreNameForKaka(){
        const payload = {
          "newName":"kaka"
        };
        this.$store.dispatch('changeStoreNameAction',payload) 
      }
  },
  components: {
  }
}
</script>