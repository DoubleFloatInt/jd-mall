import Layout from '../Layout/index';
import Index from '../view/Index/index';
import Login from '../view/Login/index';
import SecondKill from '../view/SecondKill/index';
import Register from '../view/Register/index';
import ProductDetail from '../view/ProductDetail/index';
import TeJia from '../view/TeJia/index';
import ShanGou from '../view/ShanGou/index';
import HaoWu from '../view/HaoHuo/index';
import OrderList from '../view/OrderList/index';

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
            },
            {
                path: '/tejia',
                component: TeJia,
                meta: '每日特价'
            },
            {
                path: '/shangou',
                component: ShanGou,
                meta: '大牌闪购'
            },
            {
                path: '/haowu',
                component: HaoWu,
                meta: '发现好物'
            },
            {
                path: '/orderList',
                component: OrderList,
                meta: '我的订单'
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