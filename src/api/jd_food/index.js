import request from '@/utils/request';

export function getfoodProductBycateId(cateId) {
    return request({
        url: '/foodProduct/listBycateId/' + cateId,
        method: 'get'
    });
}