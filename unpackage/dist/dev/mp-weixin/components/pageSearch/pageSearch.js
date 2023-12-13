"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  (_easycom_u_icon2 + _easycom_u_image2 + _easycom_u_navbar2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_image + _easycom_u_navbar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "pageSearch",
  props: {
    title: {
      type: String,
      default() {
        return "";
      }
    },
    userInfor: {
      type: Object,
      default() {
        return {};
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
      if (props.backUrl == "") {
        common_vendor.index.navigateBack({});
      } else {
        console.log(props.backUrl);
        common_vendor.index.switchTab({
          url: props.backUrl
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(leftClick),
        b: common_vendor.p({
          name: "arrow-left",
          size: "20"
        }),
        c: Object.keys(__props.userInfor).length !== 0
      }, Object.keys(__props.userInfor).length !== 0 ? {
        d: common_vendor.p({
          showLoading: true,
          src: __props.userInfor.srv,
          width: "30px",
          height: "30px",
          shape: "circle"
        })
      } : {}, {
        e: Object.keys(__props.userInfor).length !== 0
      }, Object.keys(__props.userInfor).length !== 0 ? {
        f: common_vendor.t(__props.userInfor.name)
      } : {}, {
        g: common_vendor.o(leftClick),
        h: common_vendor.p({
          title: __props.title,
          height: "50",
          fixed: false,
          placeholder: true,
          autoBack: false
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-95474626"], ["__file", "E:/code/car/components/pageSearch/pageSearch.vue"]]);
wx.createComponent(Component);
