"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_loading_page2 = common_vendor.resolveComponent("u-loading-page");
  (_easycom_u_upload2 + _easycom_u__textarea2 + _easycom_u_button2 + _easycom_u_loading_page2)();
}
const _easycom_u_upload = () => "../../uni_modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_u__textarea = () => "../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_loading_page = () => "../../uni_modules/uview-plus/components/u-loading-page/u-loading-page.js";
if (!Math) {
  (_easycom_u_upload + _easycom_u__textarea + _easycom_u_button + page + _easycom_u_loading_page)();
}
const page = () => "../../components/pages/page.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "addDiary",
  setup(__props) {
    const loading = common_vendor.ref(false);
    const textContent = common_vendor.ref();
    const fileList = common_vendor.ref([]);
    const addDiaryFn = () => {
      loading.value = true;
      loading.value = false;
    };
    const uploadFilePromise = (url) => {
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: "http://localhost:3005/weixin/xcx/upload",
          // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          header: {
            Authorization: common_vendor.index.getStorageSync("kxzc-token")
          },
          formData: {
            user: "test"
          },
          success: (res) => {
            resolve(JSON.parse(res.data).result.imagePath);
          }
        });
      });
    };
    const deletePic = (event) => {
      fileList.value.splice(event.index, 1);
    };
    const afterRead = async (event) => {
      let lists = [].concat(event.file);
      let fileListLen = fileList.value.length;
      lists.map((item) => {
        fileList.value.push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await uploadFilePromise(lists[i].url);
        let item = fileList.value[fileListLen];
        fileList.value.splice(
          fileListLen,
          1,
          Object.assign(item, {
            status: "success",
            message: "",
            url: result
          })
        );
        fileListLen++;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(afterRead),
        b: common_vendor.o(deletePic),
        c: common_vendor.p({
          fileList: fileList.value,
          name: "1",
          multiple: true,
          maxCount: 3
        }),
        d: common_vendor.o(($event) => textContent.value = $event),
        e: common_vendor.p({
          placeholder: "请输入内容",
          modelValue: textContent.value
        }),
        f: common_vendor.o(($event) => addDiaryFn()),
        g: common_vendor.p({
          shape: "circle",
          type: "primary",
          text: "确定"
        }),
        h: common_vendor.p({
          title: "添加日记"
        }),
        i: common_vendor.p({
          loading: loading.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a767883"], ["__file", "/Users/pq/code/car/pages/home/addDiary.vue"]]);
wx.createPage(MiniProgramPage);
