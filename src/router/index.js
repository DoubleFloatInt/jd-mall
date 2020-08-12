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
    '/search',
    '/productDetail',
    '/shopcar',
    '/miaosha',
    '/tejia',
    '/shangou',
    '/pinlei',
    '/food',
    '/shaidan'
];

router.beforeEach((to, from, next) => {
    console.log(getToken() === undefined);
    if (getToken() !== undefined) {
        if (to.path === '/login' || to.path === '/register') {
            Notification.info("你已登录!");
            next({path: '/'});
        } else {
            if (store.getters.username === '') {
                console.log('获取用户信息');
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