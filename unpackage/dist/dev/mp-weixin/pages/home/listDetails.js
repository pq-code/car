"use strict";
const common_vendor = require("../../common/vendor.js");
const config_index = require("../../config/index.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_pageSearch2 = common_vendor.resolveComponent("pageSearch");
  (_easycom_u_swiper2 + _easycom_u_form_item2 + _easycom_u_gap2 + _easycom_u_input2 + _easycom_u_form2 + _easycom_pageSearch2)();
}
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_gap = () => "../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_pageSearch = () => "../../components/pageSearch/pageSearch.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_form_item + _easycom_u_gap + _easycom_u_input + _easycom_u_form + _easycom_pageSearch)();
}
const _sfc_main = {
  __name: "listDetails",
  setup(__props) {
    let form = common_vendor.ref({});
    const list = common_vendor.ref([]);
    common_vendor.onLoad((data) => {
      if (data != null) {
        form.value = JSON.parse(data.data);
        JSON.parse(form.value.fileList).map((e) => {
          list.value.push(config_index.host + "/image" + e.img_path);
        });
        console.log("form.value", form.value);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: list.value,
          indicator: true,
          indicatorMode: "dot",
          mode: "number"
        }),
        b: common_vendor.t(common_vendor.unref(form).articleTitle),
        c: common_vendor.t(common_vendor.unref(form).describe),
        d: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(common_vendor.unref(form).createdAt).format("YYYY-MM-DD")),
        e: common_vendor.t(common_vendor.unref(form).usedCarBrand),
        f: common_vendor.sr("item1", "f060453a-3,f060453a-2"),
        g: common_vendor.p({
          label: "车辆品牌",
          prop: "usedCarBrand",
          borderBottom: true
        }),
        h: common_vendor.t(common_vendor.unref(form).usedCarCity),
        i: common_vendor.p({
          label: "所在城市",
          prop: "usedCarCity",
          borderBottom: true
        }),
        j: common_vendor.t(common_vendor.unref(form).kilometers),
        k: common_vendor.sr("kilometersRef", "f060453a-5,f060453a-2"),
        l: common_vendor.p({
          label: "公里数",
          prop: "kilometers",
          borderBottom: true
        }),
        m: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(common_vendor.unref(form).registrationTime).format("YYYY-MM-DD")),
        n: common_vendor.p({
          label: "车辆上牌时间",
          prop: "registrationTime",
          borderBottom: true
        }),
        o: common_vendor.p({
          height: "13",
          bgColor: "rgba(177, 183, 191, 0.1)"
        }),
        p: common_vendor.t(common_vendor.unref(form).contacts),
        q: common_vendor.sr("item1", "f060453a-8,f060453a-2"),
        r: common_vendor.p({
          label: "联系人",
          prop: "contacts",
          borderBottom: true
        }),
        s: common_vendor.t(common_vendor.unref(form).contactsPhone),
        t: common_vendor.sr("item1", "f060453a-9,f060453a-2"),
        v: common_vendor.p({
          label: "联系电话",
          prop: "contactsPhone",
          borderBottom: true
        }),
        w: common_vendor.o(($event) => common_vendor.unref(form).weChatId = $event),
        x: common_vendor.p({
          border: "none",
          modelValue: common_vendor.unref(form).weChatId
        }),
        y: common_vendor.sr("item1", "f060453a-10,f060453a-2"),
        z: common_vendor.p({
          label: "微信号",
          prop: "weChatId",
          borderBottom: true
        }),
        A: common_vendor.sr("formRef", "f060453a-2,f060453a-0"),
        B: common_vendor.p({
          labelPosition: "left",
          model: common_vendor.unref(form),
          labelWidth: "100",
          rules: _ctx.rules
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f060453a"], ["__file", "/Users/pq/code/car/pages/home/listDetails.vue"]]);
wx.createPage(MiniProgramPage);
