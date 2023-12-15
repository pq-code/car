"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_loading_page2 = common_vendor.resolveComponent("u-loading-page");
  (_easycom_u_search2 + _easycom_u_loading_page2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_u_loading_page = () => "../../uni_modules/uview-plus/components/u-loading-page/u-loading-page.js";
if (!Math) {
  (_easycom_u_search + pageSearch + _easycom_u_loading_page)();
}
const pageSearch = () => "../../components/pageSearch/pageSearch.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const loading = common_vendor.ref(false);
    const keyword = common_vendor.ref();
    const searchFn = () => {
      loading.value = true;
      setInterval(() => loading.value = false, 1e3);
      common_vendor.index.navigateTo({
        url: "searchList"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(searchFn),
        b: common_vendor.o(searchFn),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          placeholder: "搜索",
          focus: true,
          ["show-action"]: true,
          actionText: "搜索",
          width: "100",
          bgColor: "rgb(235, 235, 235)",
          animation: false,
          modelValue: keyword.value
        }),
        e: common_vendor.o(searchFn),
        f: common_vendor.o(searchFn),
        g: common_vendor.o(searchFn),
        h: common_vendor.p({
          title: "搜索"
        }),
        i: common_vendor.p({
          loading: loading.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b05802bf"], ["__file", "/Users/pq/code/car/pages/home/search.vue"]]);
wx.createPage(MiniProgramPage);
