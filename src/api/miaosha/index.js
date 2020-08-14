import request from '@/utils/request';

export function getMiaoShaList() {
    return request({
        url: '/miaosha/list',
        method: 'get',
    })
}