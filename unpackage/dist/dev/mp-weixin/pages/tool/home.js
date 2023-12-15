"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const tabbarClick = (e) => {
      common_vendor.index.switchTab({
        url: e.pagePath
      });
    };
    const tabList = [
      {
        pagePath: "/pages/home/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "首页",
        name: "home"
      },
      {
        pagePath: "/pages/tool/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "工具",
        name: "tool"
      },
      {
        pagePath: "/pages/user/home",
        iconPath: "/static/user.png",
        selectedIconPath: "/static/user_sec.png",
        text: "我的",
        name: "user"
      }
    ];
    common_vendor.onLoad(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(9, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.f(tabList, (item, i, i0) => {
          return {
            a: item.name,
            b: common_vendor.o(($event) => tabbarClick(item), item.name),
            c: "42baf874-1-" + i0 + ",42baf874-0",
            d: common_vendor.p({
              text: item.text,
              name: item.name,
              icon: "home"
            })
          };
        }),
        c: common_vendor.o((name) => _ctx.value1 = name),
        d: common_vendor.p({
          activeColor: "aqua",
          value: _ctx.value1,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/pq/code/car/pages/tool/home.vue"]]);
wx.createPage(MiniProgramPage);
