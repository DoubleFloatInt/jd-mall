import request from '@/utils/request';

export function addOrder(order) {
    return request({
        url: '/order/add',
        method: 'post',
        type: 'json',
        data: order,
    })
}