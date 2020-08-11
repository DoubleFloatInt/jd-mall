import request from '../utils/request';

export function getCaptchaImg() {
    return request({
        url: '/captcha',
        method: 'get'
    });
}

export function login(params) {
    return request({
        url: '/login',
        method: 'post',
        params: params
    })
}

export function getUserInfo() {
    return request({
        url: '/getUserInfo',
        method: 'post'
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}