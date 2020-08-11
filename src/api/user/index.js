import request from '../../utils/request';

export function addUser(params) {
    return request({
        url: '/user/add',
        method: 'post',
        params: params
    });
}