import Layout from '../Layout/index';
import Index from '../view/Index/index';

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Index,
                meta: '首页'
            }
        ]
    }

]