import request from '@/utils/request';

export function addShopCar(params) {
    return request({
        url: '/shopcar/add',
        method: 'post',
        params: params
    });
}