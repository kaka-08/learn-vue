import Vue from "vue";
import App from "./components/app.vue";
import "./styles/global.less";

const root = document.getElementById("root");

new Vue({
    render:(h) => h(App)
}).$mount(root)