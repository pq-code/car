

import { http } from '../index'

export const armorTransformation = (params) => {
    return http.post('weixin/users/xcx/login', params);
};

export const uploadFilePromise = (params) => {
    return http.post('weixin/xcx/upload', params);
};
