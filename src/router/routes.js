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
import Search from '../view/Search/index';

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Index,
                meta: {
                    title: '首页',
                    searchBox: true,
                    nav: true
                },
            },
            {
                path: '/orderList',
                component: OrderList,
                meta: {
                    title: '我的订单',
                    searchBox: false,
                    nav: false
                },

            },
            {
                path: '/productDetail',
                component: ProductDetail,
                meta: {
                    title: '商品详情订单',
                    searchBox: true,
                    nav: true
                },
            },
            {
                path: '/search',
                component: Search,
                meta: {
                    title: '搜索',
                    searchBox: true,
                    nav: true
                }
            },
            {
                path: '/miaosha',
                component: SecondKill,
                meta: {
                    title: '秒杀',
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/tejia',
                component: TeJia,
                meta: {
                    title: '每日特价',
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/shangou',
                component: ShanGou,
                meta: {
                    title: '大牌闪购',
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/haowu',
                component: HaoWu,
                meta: {
                    title: '发现好物',
                    searchBox: false,
                    nav: false
                },
            },

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