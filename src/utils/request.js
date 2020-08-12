import axios from 'axios';
import {getToken} from "@/utils/tokenUtils";
import errorCode from "@/utils/errorCode";
import {Message} from "element-ui";
import store from "@/store";
import router from "@/router";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
});

service.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['Authorization'] = 'JD-' + getToken();
    }
    return config;
})

service.interceptors.response.use(res => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const message = errorCode[code] || res.data.msg || errorCode['default']
        if (code === 401) {
            store.dispatch('Logout');
            router.push({path: '/'})
        } else if (code === 500) {
            Message({
                message: message,
                type: 'error'
            })
            return Promise.reject(new Error(message))
        } else if (code !== 200) {
            Notification.error({
                title: message
            })
            return Promise.reject('error')
        } else {
            return res.data
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)


export default service;