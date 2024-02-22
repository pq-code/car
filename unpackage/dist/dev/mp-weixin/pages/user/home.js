"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const editUser = () => {
      common_vendor.index.navigateTo({
        url: "editUserInfo"
      });
    };
    common_vendor.onLoad(() => {
      const { user_info } = common_vendor.index.getStorageSync("userInfo");
      if (user_info) {
        formData.value.userAvatar = user_info.avatarUrl;
        formData.value.userName = user_info.nickName;
        formData.value.province = user_info.province;
        formData.value.sex = user_info.gender;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => editUser()),
        b: common_vendor.p({
          showLoading: true,
          src: _ctx.userAvatar,
          width: "80px",
          height: "80px",
          shape: "circle"
        }),
        c: common_vendor.t(formData.value.userName ? formData.value.userName : "用户名"),
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
