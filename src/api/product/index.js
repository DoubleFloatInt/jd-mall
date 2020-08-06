import request from '../../utils/request';

export function getProductInfo(id) {
    return request({
        url: '/product/info/' + id
    });
}