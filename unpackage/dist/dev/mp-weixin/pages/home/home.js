"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const api_apis_usedCar = require("../../api/apis/usedCar.js");
require("../../api/apis/user.js");
require("../../api/index.js");
require("../../api/service/wxService.js");
require("../../api/error/errTips.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_u_search2 + _easycom_u_navbar2 + _easycom_u_tabs2 + _easycom_u_sticky2 + _easycom_u_swiper2 + _easycom_u_loadmore2 + _easycom_tabbar2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_loadmore = () => "../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_navbar + _easycom_u_tabs + _easycom_u_sticky + _easycom_u_swiper + listCard + _easycom_u_loadmore + _easycom_tabbar)();
}
const listCard = () => "./components/listCard.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.ref(0);
    const keyword = common_vendor.ref("");
    const datalist1 = common_vendor.ref([]);
    const datalist2 = common_vendor.ref([]);
    const userAvatar = common_vendor.ref();
    const navbarHeight = common_vendor.ref();
    const status = common_vendor.ref("loadmore");
    const iconType = common_vendor.ref("flower");
    const loadText = common_vendor.ref("暂无数据点击加载更多");
    const tabsList = [
      {
        name: "二手车"
      },
      {
        name: "顺风车"
      },
      {
        name: "本地服务"
      },
      {
        name: "本地店铺"
      },
      {
        name: "房屋租售"
      },
      {
        name: "求职招聘"
      },
      {
        name: "农林畜牧"
      }
    ];
    const imageList = common_vendor.ref([]);
    const init = () => {
      datalist1.value = [];
      datalist2.value = [];
      let i = 0;
      while (i < imageList.value.length) {
        datalist1.value.push(imageList.value[i]);
        i++;
        if (i < imageList.value.length) {
          datalist2.value.push(imageList.value[i]);
          i++;
        }
      }
    };
    const searchFn = () => {
      common_vendor.index.navigateTo({
        url: "search"
      });
    };
    common_vendor.onPullDownRefresh(() => {
      console.log("下拉刷新");
    });
    common_vendor.onShow(() => {
      common_vendor.index.getSystemInfo({
        success: (e) => {
          navbarHeight.value = e.statusBarHeight + 44;
          console.log("height", navbarHeight.value);
        }
      });
      if (!common_vendor.index.getStorageSync("token")) {
        console.log("当前登录已经失效重新登录");
        utils_index.getSetting("scope.record").then((res) => {
          utils_index.getLoginFn().then((res2) => {
            getDataListFn();
          });
        });
        const { user_profile_photo } = common_vendor.index.getStorageSync("userInfo");
        userAvatar.value = user_profile_photo;
      } else {
        getDataListFn();
      }
    });
    const tabsClick = (item) => {
      console.log("item", item);
    };
    const getDataListFn = () => {
      api_apis_usedCar.getUsedCarList().then((res) => {
        let data = res.result;
        status.value = "loadmore";
        if (data.count == 0) {
          status.value = "nomore";
          loadText.value = "没有更多数据了";
          console.log("没有更多数据了", res.result.rows);
        }
        imageList.value = data.rows;
        init();
      }).catch((err) => {
        status.value = "loadmore";
        console.log("err", err);
      });
    };
    const onReachBottom = () => {
      status.value = "loading";
      getDataListFn();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(searchFn),
        b: common_vendor.o(searchFn),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          placeholder: "搜索",
          disabled: true,
          ["show-action"]: false,
          animation: false,
          modelValue: keyword.value
        }),
        e: common_vendor.p({
          fixed: true,
          placeholder: true
        }),
        f: common_vendor.o(tabsClick),
        g: common_vendor.p({
          list: tabsList
        }),
        h: common_vendor.p({
          ["offset-top"]: navbarHeight.value,
          bgColor: "#fff"
        }),
        i: common_vendor.p({
          list: ["https://cdn.uviewui.com/uview/swiper/swiper1.png", "https://cdn.uviewui.com/uview/swiper/swiper2.png", "https://cdn.uviewui.com/uview/swiper/swiper3.png"],
          indicator: true,
          indicatorMode: "line",
          circular: true
        }),
        j: common_vendor.f(datalist1.value, (item, index, i0) => {
          return {
            a: `left-${index}`,
            b: "07e72d3c-5-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        k: common_vendor.f(datalist2.value, (item, index, i0) => {
          return {
            a: `left-${index}`,
            b: "07e72d3c-6-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        l: imageList.value.length == 0
      }, imageList.value.length == 0 ? {
        m: common_vendor.o(onReachBottom),
        n: common_vendor.p({
          status: status.value,
          ["icon-type"]: iconType.value,
          ["load-text"]: loadText.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "/Users/pq/code/car/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
