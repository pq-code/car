"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/home/listDetails.js";
  "./pages/home/search.js";
  "./pages/home/searchList.js";
  "./pages/home/addDiary.js";
  "./pages/user/home.js";
  "./pages/user/login.js";
  "./pages/user/editUserInfo.js";
  "./pages/tool/home.js";
  "./pages/tool/addPage/addCar.js";
  "./pages/tool/addPage/freeRide.js";
  "./pages/tool/addPage/sameCityService.js";
  "./pages/tool/addPage/merchantMerchants.js";
  "./pages/tool/addPage/housingSales.js";
  "./pages/tool/addPage/employment.js";
  "./pages/tool/addPage/agriculture.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/pq/code/car/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  app.use(common_vendor.uviewPlus);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
