"use strict";
const common_vendor = require("../common/vendor.js");
const api_service_wxService = require("./service/wxService.js");
const http = {
  get: (url, config) => {
    return requset(url, config, "get");
  },
  post: (url, config) => {
    return requset(url, config, "post");
  }
};
function requset(url, config, method) {
  const { hideLoading } = config;
  if (!hideLoading) {
    common_vendor.index.showLoading({
      title: "加载中..."
    });
  }
  {
    return api_service_wxService.wxService(url, config, method);
  }
}
exports.http = http;
