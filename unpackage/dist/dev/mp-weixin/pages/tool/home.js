"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_u_divider2 + _easycom_u_image2 + _easycom_tabbar2)();
}
const _easycom_u_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar.js";
if (!Math) {
  (_easycom_u_divider + _easycom_u_image + _easycom_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let list = [
      { name: "顺风车" },
      { name: "二手车" },
      { name: "同城服务" },
      { name: "同城商家" },
      { name: "房屋租售" },
      { name: "求职招聘" },
      { name: "农林畜牧" }
    ];
    common_vendor.onLoad(() => {
    });
    const addPage = () => {
      common_vendor.index.navigateTo({
        url: "addPage/addCar"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "选择你要添加的类型"
        }),
        b: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: "42baf874-1-" + i0,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => addPage(item.name))
          };
        }),
        c: common_vendor.p({
          showLoading: true,
          src: _ctx.userAvatar,
          width: "40px",
          height: "40px",
          shape: "circle"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/pq/code/car/pages/tool/home.vue"]]);
wx.createPage(MiniProgramPage);
