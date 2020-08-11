import axios from 'axios';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
});

service.interceptors.response.use(res => {
    /*const code = res.data.code || 200;*/
    /*const message = res.data.msg || '';*/
    return res.data;
})


export default service;