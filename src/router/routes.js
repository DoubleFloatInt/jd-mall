import Layout from '../Layout/index';
import Index from '../view/Index/index';
import Login from '../view/Login/index';
import SecondKill from '../view/SecondKill/index';
import Register from '../view/Register/index';
import ProductDetail from '../view/ProductDetail/index';

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
            },
            {
                path: '/productDetail',
                component: ProductDetail,
                meta: '商品详情'
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: '登录'
    },
    {
        path: '/register',
        component: Register,
        meta: '注册'
    }
]