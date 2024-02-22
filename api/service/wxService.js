
import { showToast } from "../../utils/index"
import { errTips } from '../error/errTips';

// let baseURL = 'http://localhost:4005/'
let baseURL = 'http://42.192.153.216:3005/api/'
let token = uni.getStorageSync('kxzc-token')

export const wxService = (urls, config, method) => {
    let url = baseURL + urls

    let data = {
        provider: 'weixin', // 微信登录标识
        ...config
    }

    let header

    if (method == "POST") {
        header = {
            'content-type': "application/x-www-form-urlencoded"
        };
    } else {
        header = {
            'content-type': "application/json"
        };
    }
    if (token) {
        header.Authorization = token;
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: method,
            header: Object.assign({}, header),
            data: data,
            dataType: 'json',
            timeout: 1000 * 60 * 1,
            success: (data) => {
                const res = data.data
                if (res.code == 0) {
                    resolve(res)
                } else {
                    showToast(errTips[res.code] || res.message || '未知错误');
                }
            },
            fail: (err) => {
                // 处理 HTTP 网络错误
                let message = '';
                // HTTP 状态码
                switch (err) {
                    case 401:
                        message = 'token 失效，请重新登录';
                        // 这里可以触发退出的 action
                        break;
                    case 403:
                        message = '拒绝访问';
                        break;
                    case 404:
                        message = '请求地址错误';
                        break;
                    case 500:
                        message = '服务器故障';
                        break;
                    default:
                        message = '网络连接故障';
                }
                showToast(message);
                reject(err)
            },
            complete: () => {
                uni.hideLoading();
            },
        })
    })
}
