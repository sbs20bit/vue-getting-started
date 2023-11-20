import Vue from 'vue';
import Router from 'vue-router';
import CoffeeOrder from './views/coffeeorder.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'CoffeeOrder',
        },
        {
            path: '/coffeeorder',
            name: 'CoffeeOrder',
            component: CoffeeOrder,
        },
        {
            path: '/about',
            name: 'about',
            //lazy loaded when route is visited
            component: () =>
             import(/* webpackChunkName: "about" */ './views//about.vue')
        },
        
    ]
})