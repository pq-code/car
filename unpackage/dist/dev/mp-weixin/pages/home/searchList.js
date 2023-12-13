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
  (_easycom_u_search + Dropdown + pageSearch + _easycom_u_loading_page)();
}
const Dropdown = () => "../../components/dropdown/dropdown.js";
const pageSearch = () => "../../components/pageSearch/pageSearch.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "searchList",
  setup(__props) {
    const loading = common_vendor.ref(false);
    const keyword = common_vendor.ref();
    const searchFn = () => {
      loading.value = true;
      setInterval(() => loading.value = false, 1e3);
    };
    const list = common_vendor.ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const onpen = (e) => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(searchFn),
        b: common_vendor.o(searchFn),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          placeholder: "搜索",
          ["show-action"]: true,
          actionText: "搜索",
          width: "100",
          bgColor: "rgb(235, 235, 235)",
          animation: false,
          modelValue: keyword.value
        }),
        e: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => onpen())
          };
        }),
        f: common_vendor.p({
          title: "搜索",
          backUrl: "home"
        }),
        g: common_vendor.p({
          loading: loading.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-68eb5c03"], ["__file", "E:/code/car/pages/home/searchList.vue"]]);
wx.createPage(MiniProgramPage);
