import request from '@/utils/request';

export function getAddressList() {
    return request({
        url: '/address/userAddress',
        method: 'post'
    });
}

export function getAddressInfo(addressId) {
    return request({
        url: '/address/info/' + addressId,
        method: 'post'
    })
}

export function addAddress(address) {
    return request({
        url: '/address/add',
        method: 'post',
        params: address
    })
}

export function updateAddress(address) {

    const data = {
        addressId: address.addressId,
        userId: address.userId,
        realName: address.realName,
        phonenum: address.phonenum,
        province: address.province,
        city: address.city,
        area: address.area,
        street: address.street,
        defaultAddress: address.defaultAddress
    }
    return request({
        url: '/address/modify',
        method: 'post',
        params: data
    })
}