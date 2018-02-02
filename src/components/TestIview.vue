<template>
        <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
</template>


<script>
import Vue from "vue";
import { Button, Table } from 'iview';

Vue.component('Button', Button);
Vue.component('Table', Table);
export default {
    data(){
        return {
            theme1: 'light'
        }
    }
}
</script>






