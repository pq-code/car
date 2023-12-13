"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_u_col2 + _easycom_u_row2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_col = () => "../../uni_modules/uview-plus/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/uview-plus/components/u-row/u-row.js";
const _easycom_u_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_col + _easycom_u_row + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "dropdown",
  props: {
    dataList: {
      type: Array,
      default() {
        return [{ title: "品牌" }, { title: "价格区间" }, { title: "年份" }, { title: "地区" }];
      }
    }
  },
  setup(__props) {
    const show = common_vendor.ref();
    common_vendor.ref();
    const close = () => {
      show.value = false;
    };
    const open = () => {
      show.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "a66da52b-2-" + i0 + "," + ("a66da52b-1-" + i0),
            c: "a66da52b-1-" + i0 + ",a66da52b-0"
          };
        }),
        b: common_vendor.p({
          name: "arrow-down"
        }),
        c: common_vendor.o(($event) => show.value = true),
        d: common_vendor.p({
          span: 12 / __props.dataList.length
        }),
        e: common_vendor.o(close),
        f: common_vendor.o(open),
        g: common_vendor.p({
          show: show.value,
          mode: "bottom"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a66da52b"], ["__file", "E:/code/car/components/dropdown/dropdown.vue"]]);
wx.createComponent(Component);
