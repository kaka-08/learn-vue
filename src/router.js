import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./components/App.vue";
import App from './components/App.vue';
import TestModuleA from "./components/TestModuleA.vue";
import TestStores from "./components/TestStores.vue";
import TestIview from "./components/TestIview.vue";



Vue.use(VueRouter);

const routes = [
    { path: '/index', component: App },
    { path: '/testModuleA', component: TestModuleA },
    { path: '/testStores', component: TestStores },
    { path: '/testIview', component: TestIview }
];


const router = new VueRouter({
    routes
  });

export default router;