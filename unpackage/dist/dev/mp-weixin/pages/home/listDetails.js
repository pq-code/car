"use strict";
const common_vendor = require("../../common/vendor.js");
const config_index = require("../../config/index.js");
if (!Array) {
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_pageSearch2 = common_vendor.resolveComponent("pageSearch");
  (_easycom_u_form_item2 + _easycom_u_col2 + _easycom_u_row2 + _easycom_u_gap2 + _easycom_u_modal2 + _easycom_u_form2 + _easycom_u_image2 + _easycom_pageSearch2)();
}
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_col = () => "../../uni_modules/uview-plus/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/uview-plus/components/u-row/u-row.js";
const _easycom_u_gap = () => "../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_modal = () => "../../uni_modules/uview-plus/components/u-modal/u-modal.js";
const _easycom_u_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_pageSearch = () => "../../components/pageSearch/pageSearch.js";
if (!Math) {
  (_easycom_u_form_item + _easycom_u_col + _easycom_u_row + _easycom_u_gap + _easycom_u_modal + _easycom_u_form + _easycom_u_image + _easycom_pageSearch)();
}
const _sfc_main = {
  __name: "listDetails",
  setup(__props) {
    let form = common_vendor.ref({ contactsPhone: "", weChatId: "" });
    const weChatIdShow = common_vendor.ref(false);
    const contactsPhoneShow = common_vendor.ref(false);
    const list = common_vendor.ref([]);
    common_vendor.onLoad((data) => {
      if (data != null) {
        form.value = JSON.parse(data.data);
        JSON.parse(form.value.fileList).map((e) => {
          list.value.push(config_index.host + "/image" + e.img_path);
        });
      }
    });
    const previewImage = (e) => {
      common_vendor.index.previewImage({
        urls: list.value,
        // 这里是图片的数组，可以传入多张图片地址进行预览
        current: e
        // 当前显示图片的http链接或者临时文件路径
      });
    };
    const contactsPhone = common_vendor.computed(() => {
      return (e) => {
        return e.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
      };
    });
    const weChatId = common_vendor.computed(() => {
      return (e) => {
        return "****";
      };
    });
    const content = common_vendor.ref();
    const obtain = (e) => {
      console.log(e);
      if (e == "contactsPhoneShow") {
        content.value = "1111";
        contactsPhoneShow.value = true;
      }
      if (e == "weChatIdShow") {
        content.value = "2222";
        weChatIdShow.value = true;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(form).articleTitle),
        b: common_vendor.t(common_vendor.unref(form).describe),
        c: common_vendor.t(common_vendor.unref(common_vendor.dayjs)(common_vendor.unref(form).createdAt).format("YYYY-MM-DD")),
        d: common_vendor.t(common_vendor.unref(form).usedCarBrand),
        e: common_vendor.sr("item1", "f060453a-4,f060453a-3"),
        f: common_vendor.p({
          label: "车辆品牌",
          prop: "usedCarBrand",
          borderBottom: true
        }),
        g: common_vendor.p({
          span: "6"
        }),
        h: common_vendor.t(common_vendor.unref(form).usedCarCity),
        i: common_vendor.p({
          label: "所在城市",
          prop: "usedCarCity",
          borderBottom: true
        }),
        j: common_vendor.p({
          span: "6"
        }),
        k: common_vendor.p({
          gutter: "16"
        }),
        l: common_vendor.t(common_vendor.unref(form).kilometers),
        m: common_vendor.sr("kilometersRef", "f060453a-9,f060453a-8"),
        n: common_vendor.p({
          label: "公里数",
          prop: "kilometers",
          borderBottom: true
        }),
        o: common_vendor.p({
          span: "6"
        }),
        p: common_vendor.t(common_vendor.unref(form).registrationTime ? common_vendor.unref(common_vendor.dayjs)(common_vendor.unref(form).registrationTime).format("YYYY-MM-DD") : ""),
        q: common_vendor.p({
          label: "上牌时间",
          prop: "registrationTime",
          borderBottom: true
        }),
        r: common_vendor.p({
          span: "6"
        }),
        s: common_vendor.p({
          gutter: "16"
        }),
        t: common_vendor.p({
          height: "13",
          bgColor: "rgba(177, 183, 191, 0.1)"
        }),
        v: common_vendor.t(common_vendor.unref(form).contacts),
        w: common_vendor.sr("item1", "f060453a-15,f060453a-14"),
        x: common_vendor.p({
          label: "联系人",
          prop: "contacts",
          borderBottom: true
        }),
        y: common_vendor.p({
          span: "6"
        }),
        z: common_vendor.o(($event) => contactsPhoneShow.value = $event),
        A: common_vendor.p({
          content: content.value,
          modelValue: contactsPhoneShow.value
        }),
        B: common_vendor.t(common_vendor.unref(contactsPhone)(common_vendor.unref(form).contactsPhone)),
        C: common_vendor.o(($event) => obtain("contactsPhoneShow")),
        D: common_vendor.sr("item1", "f060453a-17,f060453a-16"),
        E: common_vendor.p({
          label: "联系电话",
          prop: "contactsPhone",
          borderBottom: true
        }),
        F: common_vendor.p({
          span: "6"
        }),
        G: common_vendor.p({
          gutter: "16"
        }),
        H: common_vendor.o(($event) => weChatIdShow.value = $event),
        I: common_vendor.p({
          content: content.value,
          modelValue: weChatIdShow.value
        }),
        J: common_vendor.t(common_vendor.unref(weChatId)(common_vendor.unref(form).weChatId)),
        K: common_vendor.o(($event) => obtain("weChatIdShow")),
        L: common_vendor.sr("item1", "f060453a-19,f060453a-1"),
        M: common_vendor.p({
          label: "微信号",
          prop: "weChatId",
          borderBottom: true
        }),
        N: common_vendor.sr("formRef", "f060453a-1,f060453a-0"),
        O: common_vendor.p({
          labelPosition: "left",
          model: common_vendor.unref(form),
          labelWidth: "70"
        }),
        P: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => previewImage(item), index),
            b: "f060453a-21-" + i0 + ",f060453a-0",
            c: common_vendor.p({
              width: "100%",
              src: item
            }),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f060453a"], ["__file", "/Users/pq/code/car/pages/home/listDetails.vue"]]);
wx.createPage(MiniProgramPage);
