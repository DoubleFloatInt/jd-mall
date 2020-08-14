import request from '../../utils/request';

export function getfoodProductBycateId(cateId) {
    return request({
        url: '/foodProduct/listBycateId',
        method: 'get',
        params: cateId
    });
}