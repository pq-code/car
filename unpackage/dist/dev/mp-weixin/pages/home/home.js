"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
require("../../api/apis/user.js");
require("../../api/index.js");
require("../../api/service/wxService.js");
require("../../api/error/errTips.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_search2 + _easycom_u_swiper2 + _easycom_u_navbar2 + _easycom_u_tabs2 + _easycom_u_sticky2 + _easycom_u_image2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_u_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_swiper + _easycom_u_navbar + _easycom_u_tabs + _easycom_u_sticky + _easycom_u_image + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const value1 = common_vendor.ref(0);
    const keyword = common_vendor.ref("");
    const datalist1 = common_vendor.ref([]);
    const datalist2 = common_vendor.ref([]);
    const userAvatar = common_vendor.ref();
    const navbarHeight = common_vendor.ref();
    const tabbarClick = (e) => {
      common_vendor.index.switchTab({
        url: e.pagePath
      });
    };
    const tabsList = [
      {
        name: "关注"
      },
      {
        name: "推荐"
      },
      {
        name: "电影"
      },
      {
        name: "科技"
      },
      {
        name: "音乐"
      },
      {
        name: "美食"
      },
      {
        name: "文化"
      },
      {
        name: "财经"
      },
      {
        name: "手工"
      }
    ];
    const tabList = [
      {
        pagePath: "/pages/home/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "首页",
        name: "home"
      },
      {
        pagePath: "/pages/tool/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "工具",
        name: "tool"
      },
      {
        pagePath: "/pages/user/home",
        iconPath: "/static/user.png",
        selectedIconPath: "/static/user_sec.png",
        text: "我的",
        name: "user"
      }
    ];
    const imageList = common_vendor.ref([
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "标题1",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://cdn.uviewui.com/uview/album/1.jpg",
        title: "标题2",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        title: "标题",
        details: "的多撒点萨达啊但是大的多撒点"
      }
    ]);
    const init = () => {
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
    const onpen = () => {
      common_vendor.index.navigateTo({
        url: "listDetails"
      });
    };
    common_vendor.onLoad(() => {
      init();
      common_vendor.index.getSystemInfo({
        success: (e) => {
          navbarHeight.value = e.statusBarHeight + 44;
          console.log("height", navbarHeight.value);
        }
      });
      common_vendor.index.checkSession({
        success(res) {
          console.log("当前登录未失效，不需要重新登录");
        },
        fail: (err) => {
          console.log("当前登录已经失效重新登录");
          utils_index.getSetting("scope.record").then((res) => {
            utils_index.getLoginFn().then((res2) => {
              userAvatar.value = res2.result.user_profile_photo;
            });
          });
          const { user_profile_photo } = common_vendor.index.getStorageSync("userInfo");
          userAvatar.value = user_profile_photo;
        }
      });
    });
    const tabsClick = (item) => {
      console.log("item", item);
    };
    return (_ctx, _cache) => {
      return {
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
          list: ["https://cdn.uviewui.com/uview/swiper/swiper1.png", "https://cdn.uviewui.com/uview/swiper/swiper2.png", "https://cdn.uviewui.com/uview/swiper/swiper3.png"],
          indicator: true,
          indicatorMode: "dot",
          circular: true
        }),
        f: common_vendor.p({
          fixed: true,
          placeholder: true
        }),
        g: common_vendor.p({
          list: ["https://cdn.uviewui.com/uview/swiper/swiper1.png", "https://cdn.uviewui.com/uview/swiper/swiper2.png", "https://cdn.uviewui.com/uview/swiper/swiper3.png"],
          indicator: true,
          indicatorMode: "line",
          circular: true
        }),
        h: common_vendor.o(tabsClick),
        i: common_vendor.p({
          list: tabsList
        }),
        j: common_vendor.p({
          ["offset-top"]: navbarHeight.value,
          bgColor: "#fff"
        }),
        k: common_vendor.f(datalist1.value, (item, index, i0) => {
          return {
            a: "07e72d3c-6-" + i0,
            b: common_vendor.p({
              showLoading: true,
              lazyLoad: true,
              radius: "6px 6px 0 0",
              src: item.src,
              width: "100%"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.details),
            e: common_vendor.o(($event) => onpen(), `left-${index}`),
            f: `left-${index}`
          };
        }),
        l: common_vendor.f(datalist2.value, (item, index, i0) => {
          return {
            a: "07e72d3c-7-" + i0,
            b: common_vendor.p({
              showLoading: true,
              lazyLoad: true,
              radius: "6px 6px 0 0",
              src: item.src,
              width: "100%",
              height: "120"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.details),
            e: common_vendor.o(($event) => onpen(), `right-${index}`),
            f: `right-${index}`
          };
        }),
        m: common_vendor.f(tabList, (item, i, i0) => {
          return {
            a: item.selectedIconPath,
            b: item.iconPath,
            c: item.name,
            d: common_vendor.o(($event) => tabbarClick(item), item.name),
            e: "07e72d3c-9-" + i0 + ",07e72d3c-8",
            f: common_vendor.p({
              text: item.text,
              name: item.name,
              icon: "home"
            })
          };
        }),
        n: common_vendor.o((name) => value1.value = name),
        o: common_vendor.p({
          activeColor: "#d81e06",
          value: value1.value,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "/Users/pq/code/car/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
