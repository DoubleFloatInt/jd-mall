import request from '@/utils/request';

export function getAddressList() {
    return request({
        url: '/address/userAddress',
        method: 'post'
    });
}