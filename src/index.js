import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./components/App.vue";
import store from "./store/index";
import iView from 'iview';
import router from './router';
import axios_instance from './common/axios';
import './assets/styles/index.less';


Vue.use(iView);
Vue.prototype.$http = axios_instance;
  

const root = document.getElementById("root");

new Vue({
    router,
    store,
    render:(h) => h(App)
}).$mount(root)


// 在根组件 里面  引入 store  则所有组件都会有store的引用


