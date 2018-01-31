import Vue from "vue";
import App from "./components/App.vue";
import store from "./store/index";

const root = document.getElementById("root");

new Vue({
    store,
    render:(h) => h(App)
}).$mount(root)


// 在根组件 里面  引入 store  则所有组件都会有store的引用


