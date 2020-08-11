import request from '../../utils/request';

export function getProductInfo(id) {
    return request({
        url: '/product/info/' + id
    });
}

export function getProductList(params) {
    return request({
        url: '/product/list',
        method: 'get',
        params: params
    });
}