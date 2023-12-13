"use strict";
const api_index = require("../index.js");
const armorTransformation = (params) => {
  return api_index.http.post("weixin/users/xcx/login", params);
};
exports.armorTransformation = armorTransformation;
