import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "@/router/routes";
import {getToken} from "@/utils/tokenUtils";
import {Notification} from 'element-ui';
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

const whitePath = [
    '/',
    '/login',
    '/register',
    '/search',
    '/productDetail',
    '/miaosha',
    '/tejia',
    '/shangou',
    '/pinlei',
    '/food',
    '/shaidan',
    '/video',
    '/clothing',
    '/haowu'
];

router.beforeEach((to, from, next) => {
    if (getToken() !== undefined) {
        if (to.path === '/login' || to.path === '/register') {
            Notification.info("你已登录!");
            next({path: '/'});
        } else {
            if (store.getters.username === '') {
                store.dispatch('GetUserInfo').then(() => {
                    next();
                }).catch(() => {
                    next({path: '/'})
                });
            } else {
                next();
            }
        }
    } else {
        if (whitePath.indexOf(to.path) === -1) {
            let params = '';
            for (let queryKey in to.query) {
                params += '?' + queryKey + '=' + to.query[queryKey];
            }
            next({path: '/login?redirect=' + to.path + params});
        } else {
            next();
        }
    }
});

export default router;