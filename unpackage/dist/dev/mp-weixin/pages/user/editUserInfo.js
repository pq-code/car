"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  (_easycom_u_avatar2 + _easycom_u_button2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_icon2 + _easycom_u_form2 + _easycom_u_action_sheet2)();
}
const _easycom_u_avatar = () => "../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_u_action_sheet = () => "../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_button + _easycom_u_input + _easycom_u_form_item + _easycom_u_icon + _easycom_u_form + _easycom_u_action_sheet + page)();
}
const page = () => "../../components/pages/page.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "editUserInfo",
  setup(__props) {
    const formData = common_vendor.ref({
      userAvatar: "",
      userName: "",
      province: "",
      sex: ""
    });
    const showSex = common_vendor.ref(false);
    const actions = common_vendor.ref([
      {
        name: "男",
        value: 1
      },
      {
        name: "女",
        value: 2
      },
      {
        name: "未知",
        value: 0
      }
    ]);
    const sexSelect = (e) => {
      formData.value.sex = e.name;
    };
    const rules = common_vendor.ref();
    const editUserInfo = () => {
      debugger;
    };
    common_vendor.onLoad(() => {
      const { user_info } = common_vendor.index.getStorageSync("userInfo");
      if (user_info) {
        formData.value.userAvatar = user_info.avatarUrl;
        formData.value.userName = user_info.nickName;
        formData.value.province = user_info.province;
        formData.value.sex = user_info.gender == 0 ? "未知" : user_info.gender == 1 ? "男" : "女";
      }
    });
    const onChooseAvatar = (event) => {
      const file = event.detail.file;
      console.log(file);
      debugger;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "60",
          src: formData.value.userAvatar
        }),
        b: common_vendor.o(onChooseAvatar),
        c: common_vendor.p({
          type: "",
          disabled: true,
          hairline: "false",
          size: "large",
          ["open-type"]: "chooseAvatar"
        }),
        d: common_vendor.o(($event) => formData.value.userName = $event),
        e: common_vendor.p({
          type: "nickname",
          border: "none",
          modelValue: formData.value.userName
        }),
        f: common_vendor.sr("name", "1358535a-4,1358535a-3"),
        g: common_vendor.p({
          label: "昵称",
          prop: "formData.name",
          borderBottom: true
        }),
        h: common_vendor.o(($event) => formData.value.sex = $event),
        i: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          placeholder: "请选择性别",
          border: "none",
          modelValue: formData.value.sex
        }),
        j: common_vendor.p({
          name: "arrow-right"
        }),
        k: common_vendor.sr("sex", "1358535a-6,1358535a-3"),
        l: common_vendor.o(($event) => showSex.value = true),
        m: common_vendor.p({
          label: "性别",
          prop: "formData.sex",
          borderBottom: true
        }),
        n: common_vendor.sr("form1", "1358535a-3,1358535a-0"),
        o: common_vendor.p({
          labelPosition: "left",
          labelAlign: "right",
          model: formData.value,
          rules: rules.value
        }),
        p: common_vendor.o(($event) => showSex.value = false),
        q: common_vendor.o(sexSelect),
        r: common_vendor.p({
          show: showSex.value,
          actions: actions.value,
          title: "请选择性别",
          description: "如果选择保密会报错"
        }),
        s: common_vendor.o(($event) => editUserInfo()),
        t: common_vendor.p({
          shape: "circle",
          type: "primary",
          text: "确定"
        }),
        v: common_vendor.p({
          title: "修改用户信息"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1358535a"], ["__file", "E:/code/car/pages/user/editUserInfo.vue"]]);
wx.createPage(MiniProgramPage);
