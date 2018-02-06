import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "components/App.vue";
import TestModuleA from "components/TestModuleA.vue";
import TestStores from "components/TestStores.vue";
import TestIview from "components/TestIview.vue";
import Weather from "components/Weather.vue";
import SonA from "components/SonA.vue";
import SonB from "components/SonB.vue";
import Login from "components/user/login.vue";
import Register from "components/user/register.vue";
import Home from "components/home/index.vue";


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Register },    
    { path: '/login', component: Login },
    { path: '/home', component: Home },  
    { path: '/index', component: App },
    { path: '/TestModuleA', component: TestModuleA },
    { path: '/testStores', component: TestStores },
    { path: '/testIview/:id', component: TestIview,
        children: [
            {
            // 当 /testIview/:id/sonA 匹配成功，
            // SonA 会被渲染在 TestIview 的 <router-view> 中
            path: '/sonA',
            component: SonA
            },
            {
             // 当 /testIview/:id/sonB 匹配成功，
            // SonB 会被渲染在 TestIview 的 <router-view> 中
            path: '/sonB',
            component: SonB
            },
            {
                // 当 /testIview/:id/weather 匹配成功，
               // weather 会被渲染在 TestIview 的 <router-view> 中
               // 测试着玩儿 
               path: '/weather',
               component: Weather
            }
        ] 
    }   
];


const router = new VueRouter({
    mode:'hash',
    routes
  });

export default router;