import axios from 'axios';
import {getToken} from "@/utils/tokenUtils";

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
    /*const code = res.data.code || 200;*/
    /*const message = res.data.msg || '';*/
    return res.data;
})


export default service;