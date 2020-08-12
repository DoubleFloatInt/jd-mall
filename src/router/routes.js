import Layout from '@/Layout/index';
import Index from '@/view/Index/index';
import Login from '@/view/Login/index';
import SecondKill from '@/view/SecondKill/index';
import Register from '@/view/Register/index';
import ProductDetail from '@/view/ProductDetail/index';
import TeJia from '@/view/TeJia/index';
import ShanGou from '@/view/ShanGou/index';
import HaoWu from '@/view/HaoHuo/index';
import OrderList from '@/view/OrderList/index';
import Search from '@/view/Search/index';
import PinLeiSecondKill from '@/view/PinLeiSecondKill';
import JDFood from '@/view/jd_food/index';
import Trade from '@/view/Trade/index';
import ShaiDan from '@/view/ShaiDan/index';
import ShopCar from '@/view/ShopCar/index';

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
                    headNav: true,
                    searchBox: true,
                    nav: true
                },
            },
            {
                path: '/orderList',
                component: OrderList,
                meta: {
                    title: '我的订单',
                    headNav: false,
                    searchBox: false,
                    nav: false
                },
            },
            {
                path: '/productDetail',
                component: ProductDetail,
                meta: {
                    title: '商品详情订单',
                    headNav: true,
                    searchBox: true,
                    nav: true
                },
            },
            {
                path: '/trade',
                component: Trade,
                meta: {
                    title: '订单结算',
                    headNav: true,
                    searchBox: false,
                    nav: false
                }
            },
            {
                path: '/search',
                component: Search,
                meta: {
                    title: '搜索',
                    headNav: true,
                    searchBox: true,
                    nav: true
                }
            },
            {
                path: '/shopcar',
                component: ShopCar,
                meta: {
                    title: '购物车',
                    headNav: true,
                    searchBox: false,
                    nav: false
                }
            },
            {
                path: '/miaosha',
                component: SecondKill,
                meta: {
                    title: '秒杀',
                    headNav: true,
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/tejia',
                component: TeJia,
                meta: {
                    title: '每日特价',
                    headNav: true,
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/shangou',
                component: ShanGou,
                meta: {
                    title: '大牌闪购',
                    headNav: true,
                    searchBox: true,
                    nav: false
                },
            },
            {
                path: '/haowu',
                component: HaoWu,
                meta: {
                    title: '发现好物',
                    headNav: true,
                    searchBox: false,
                    nav: false
                },
            },
            {
                path: '/pinlei',
                component: PinLeiSecondKill,
                meta: {
                    title: '品类团购',
                    headNav: true,
                    searchBox: true,
                    nav: false
                }
            },
            {
                path: '/food',
                component: JDFood,
                meta: {
                    title: '食品',
                    headNav: true,
                    searchBox: false,
                    nav: false
                }
            },
            {
                path: '/shaidan',
                component: ShaiDan,
                meta: {
                    title: '晒单',
                    headNav: true,
                    searchBox: false,
                    nav: false
                }
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
    },


]