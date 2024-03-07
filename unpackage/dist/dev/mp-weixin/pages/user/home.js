"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
require("../../api/apis/user.js");
require("../../api/index.js");
require("../../api/service/wxService.js");
require("../../api/error/errTips.js");
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_u_image2 + _easycom_tabbar2)();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar.js";
if (!Math) {
  (_easycom_u_image + _easycom_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const formData = common_vendor.ref({
      userAvatar: "",
      userName: "",
      province: "",
      sex: ""
    });
    const login = () => {
      console.log("当前登录已经失效重新登录");
      utils_index.getSetting("scope.record").then((res) => {
        utils_index.getLoginFn().then((data) => {
          const { user_profile_photo, user_nickname } = common_vendor.index.getStorageSync("userInfo");
          formData.value.userAvatar = user_profile_photo;
          formData.value.userName = user_nickname;
        });
      });
    };
    common_vendor.onLoad(() => {
      const { user_nickname, user_profile_photo } = common_vendor.index.getStorageSync("userInfo");
      formData.value.userAvatar = user_profile_photo;
      formData.value.userName = user_nickname;
      console.log(common_vendor.index.getStorageSync("userInfo"));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => login()),
        b: common_vendor.p({
          showLoading: true,
          src: formData.value.userAvatar,
          width: "80px",
          height: "80px",
          shape: "circle"
        }),
        c: common_vendor.t(formData.value.userName || "用户名"),
        d: common_vendor.f(["已发布的内容", "发布新的内容", "", ""], (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/pq/code/car/pages/user/home.vue"]]);
wx.createPage(MiniProgramPage);
