import request from '@/utils/request';

export function addShopCar(params) {
    return request({
        url: '/shopcar/add',
        method: 'post',
        params: params
    });
}

export function getShopCarList() {
    return request({
        url: '/shopcar/list',
        method: 'post'
    })
}

export function updateShopCarItem(params) {
    return request({
        url: '/shopcar/update',
        method: 'put',
        params: params
    })
}

export function deleteShopCarItems(ids) {
    const productIds = [...ids];
    return request({
        url: '/shopcar/deleteItems',
        method: 'delete',
        type: 'json',
        data: productIds
    })
}

export function deleteShopCarItem(id) {
    return request({
        url: '/shopcar/deleteItem/' + id,
        method: 'delete'
    })
}

export function deleteAll() {
    return request({
        url: '/shopcar/deleteAll',
        method: 'delete'
    })
}
