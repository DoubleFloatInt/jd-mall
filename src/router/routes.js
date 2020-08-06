import Layout from '../Layout/index';
import Index from '../view/Index/index';
import Login from '../view/Login/index';
import SecondKill from '../view/SecondKill/index';

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Index,
                meta: '首页'
            },
            {
                path: '/miaosha',
                component: SecondKill,
                meta: '秒杀'
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: '登录'
    }


]