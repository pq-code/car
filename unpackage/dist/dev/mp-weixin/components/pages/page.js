"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  _easycom_u_navbar2();
}
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
if (!Math) {
  _easycom_u_navbar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "page",
  props: {
    title: {
      type: String,
      default() {
        return "主页";
      }
    },
    backUrl: {
      type: String,
      default() {
        return "";
      }
    }
  },
  setup(__props) {
    const props = __props;
    const leftClick = () => {
      console.log(props.backUrl);
      if (props.backUrl == "") {
        common_vendor.index.navigateBack({});
      } else {
        console.log(props.backUrl);
        common_vendor.index.navigateTo({
          url: props.backUrl
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(leftClick),
        b: common_vendor.p({
          title: __props.title,
          height: "50",
          fixed: false,
          placeholder: true,
          autoBack: false
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4f1132a"], ["__file", "/Users/pq/code/car/components/pages/page.vue"]]);
wx.createComponent(Component);
