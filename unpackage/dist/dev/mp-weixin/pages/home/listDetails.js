"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_pageSearch2 = common_vendor.resolveComponent("pageSearch");
  (_easycom_u_swiper2 + _easycom_pageSearch2)();
}
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_pageSearch = () => "../../components/pageSearch/pageSearch.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_pageSearch)();
}
const _sfc_main = {
  __name: "listDetails",
  setup(__props) {
    let form = common_vendor.ref({});
    common_vendor.onLoad((data) => {
      if (data != null) {
        form.value = JSON.parse(data.data);
      }
      console.log(form.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(form).articleTitle),
        b: common_vendor.t(common_vendor.unref(form).describe),
        c: common_vendor.p({
          list: ["https://cdn.uviewui.com/uview/swiper/swiper1.png", "https://cdn.uviewui.com/uview/swiper/swiper2.png", "https://cdn.uviewui.com/uview/swiper/swiper3.png"],
          indicator: true,
          indicatorMode: "dot",
          circular: true
        }),
        d: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(common_vendor.unref(form).createdAt).format("YYYY-MM-DD")),
        e: common_vendor.p({
          userInfor: {
            name: "微信用户",
            src: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
          }
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f060453a"], ["__file", "/Users/pq/code/car/pages/home/listDetails.vue"]]);
wx.createPage(MiniProgramPage);
