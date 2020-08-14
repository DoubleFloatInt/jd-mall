import request from '@/utils/request';

export function addOrder(order) {
    return request({
        url: '/order/add',
        method: 'post',
        type: 'json',
        data: order,
    })
}

export function getOrderList(order) {
    return request({
        url: '/order/list',
        method: 'post',
        params: order
    })
}

export function deleteOrder(orderId) {
    return request({
        url: '/order/delete/' + orderId,
        method: 'delete'
    })
}