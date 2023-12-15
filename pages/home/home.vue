<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { getSetting, getLoginFn } from "../../utils/index";
import dayjs from "dayjs";

const value1 = ref(0);
const keyword = ref("");
const datalist1 = ref([]);
const datalist2 = ref([]);

const userAvatar = ref(); // 用户头像
// const weather = ref({}); // 获取天气
const navbarHeight = ref();
const tabbarClick = (e) => {
  uni.switchTab({
    url: e.pagePath,
  });
};
const tabsList = [
  {
    name: "关注",
  },
  {
    name: "推荐",
  },
  {
    name: "电影",
  },
  {
    name: "科技",
  },
  {
    name: "音乐",
  },
  {
    name: "美食",
  },
  {
    name: "文化",
  },
  {
    name: "财经",
  },
  {
    name: "手工",
  },
];
const tabList = [
  {
    pagePath: "/pages/home/home",
    iconPath: "/static/home.png",
    selectedIconPath: "/static/home_sec.png",
    text: "首页",
    name: "home",
  },
  {
    pagePath: "/pages/tool/home",
    iconPath: "/static/home.png",
    selectedIconPath: "/static/home_sec.png",
    text: "工具",
    name: "tool",
  },
  {
    pagePath: "/pages/user/home",
    iconPath: "/static/user.png",
    selectedIconPath: "/static/user_sec.png",
    text: "我的",
    name: "user",
  },
];

const imageList = ref([
  {
    src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    title: "标题1",
    details:
      "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点",
  },
  {
    src: "https://cdn.uviewui.com/uview/album/1.jpg",
    title: "标题2",
    details:
      "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点",
  },
  {
    src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title: "标题",
    details: "萨达啊但是大的多撒点萨达啊但是大的多撒点",
  },
  {
    src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    title: "标题",
    details: "萨达啊但是大的多撒点萨达啊但是大的多撒点",
  },
  {
    src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    title: "标题",
    details: "萨达啊但是大的多撒点萨达啊但是大的多撒点",
  },
  {
    src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    title: "标题",
    details: "的多撒点萨达啊但是大的多撒点",
  },
]);

// 获取天气
// const getWeather = () => {
//   uni.request({
//     url: "https://devapi.qweather.com/v7/weather/now?location=101010100&key=bf108d402c7e471b90e9f0323364ee3a",
//     method: "GET",
//     success: (res) => {
//       const { now } = res.data;
//       weather.value = {
//         title: `${now.text} ${now.windDir}`,
//         icon: now.icon,
//       };
//       uni.setStorageSync("weather", weather.value);
//     },
//     fail: () => {
//       this.openmsg("警告", "天气接口获取失败");
//     },
//     complete: () => {},
//   });
// };

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
  uni.navigateTo({
    url: "search",
  });
};

const addDiaryFn = () => {
  uni.navigateTo({
    url: "addDiary",
  });
};
const onpen = () => {
  uni.navigateTo({
    url: "listDetails",
  });
};

onLoad(() => {
  init();
  uni.getSystemInfo({
    success: (e) => {
      // #ifdef MP-WEIXIN
      navbarHeight.value = e.statusBarHeight + 44;
      // #endif
      console.log("height", navbarHeight.value);
    },
  });

  //   console.log(uni.getStorageSync("weather"));
  //   if (uni.getStorageSync("weather")) {
  //     weather.value = uni.getStorageSync("weather");
  //   } else {
  //     getWeather();
  //   }

  // 判断是否已经登录
  uni.checkSession({
    success(res) {
      console.log("当前登录未失效，不需要重新登录");
    },
    fail: (err) => {
      console.log("当前登录已经失效重新登录");
      getSetting("scope.record").then((res) => {
        getLoginFn().then((res) => {
          userAvatar.value = res.result.user_profile_photo;
        });
      });
      const { user_profile_photo } = uni.getStorageSync("userInfo");
      userAvatar.value = user_profile_photo;
    },
  });
});

const onPageScroll = (e) => {};
const tabsClick = (item) => {
  console.log("item", item);
};
</script>

<template>
  <view class="content">
    <u-navbar fixed placeholder>
      <template #left>
        <view style="width: 100%; display: flex">
          <view style="line-height: 34px; margin-left: 10px"> 标题 </view>
        </view>
      </template>
      <template #center>
        <u-search
          style="width: 10% !important"
          placeholder="搜索"
          disabled
          :show-action="false"
          :animation="false"
          @click="searchFn"
          @custom="searchFn"
          v-model="keyword"
        ></u-search>
      </template>
      <template #right>
        <u-swiper
          :list="[
            'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            'https://cdn.uviewui.com/uview/swiper/swiper2.png',
            'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          ]"
          indicator
          indicatorMode="dot"
          circular
        ></u-swiper>
      </template>
    </u-navbar>
    <view class="content-main">
      <view class="content-main-heard">
        <u-swiper
          :list="[
            'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            'https://cdn.uviewui.com/uview/swiper/swiper2.png',
            'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          ]"
          indicator
          indicatorMode="line"
          circular
        ></u-swiper>
      </view>

      <u-sticky :offset-top="navbarHeight" bgColor="#fff">
        <u-tabs :list="tabsList" @click="tabsClick"></u-tabs>
      </u-sticky>

      <view class="content-main-list">
        <ul class="ul">
          <li
            class="li"
            v-for="(item, index) in datalist1"
            @click="onpen(item)"
            :key="`left-${index}`"
          >
            <u-image
              :showLoading="true"
              :lazyLoad="true"
              radius="6px 6px 0 0"
              :src="item.src"
              width="100%"
            ></u-image>
            <view class="text">
              <view class="text-title">{{ item.title }}</view>
              <view class="text-details">{{ item.details }}</view>
            </view>
          </li>
        </ul>
        <ul class="ul">
          <li
            class="li"
            v-for="(item, index) in datalist2"
            @click="onpen(item)"
            :key="`right-${index}`"
          >
            <u-image
              :showLoading="true"
              :lazyLoad="true"
              radius="6px 6px 0 0"
              :src="item.src"
              width="100%"
              height="120"
            ></u-image>
            <view class="text">
              <view class="text-title">{{ item.title }}</view>
              <view class="text-details">{{ item.details }}</view>
            </view>
          </li>
        </ul>
      </view>
    </view>

    <u-tabbar
      activeColor="#d81e06"
      :value="value1"
      @change="(name) => (value1 = name)"
      :fixed="true"
      :placeholder="true"
      :safeAreaInsetBottom="true"
    >
      <u-tabbar-item
        v-for="(item, i) in tabList"
        :key="item.name"
        :text="item.text"
        :name="item.name"
        @click="tabbarClick(item)"
        icon="home"
      >
        <image
          class="bar_img"
          slot="active-icon"
          :src="item.selectedIconPath"
        ></image>
        <image
          class="bar_img"
          slot="inactive-icon"
          :src="item.iconPath"
        ></image>
      </u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 40px);
  padding: 10px;
  flex-wrap: nowrap;

  .content-heard {
    display: flex;
    width: 100%;
    height: 100px;
    position: sticky;
    // #ifdef MP-WEIXIN
    margin-top: 20px;
    // #endif
    margin-bottom: 10px;
    flex-direction: column;
    align-items: flex-start;

    .content-heard-top {
      display: flex;
      flex-direction: row;
      flex: 1, 1;

      .content-heard-top-weather {
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
        color: rgb(85, 85, 85);
      }
    }

    .content-heard-bottom {
      height: 48px;
      display: flex;
      align-items: flex-end;

      .content-heard-currentDate {
        width: 120px;

        .content-heard-currentDate-p1 {
          font-size: 20px;
          font-weight: 600;
          color: rgb(28, 28, 28);
          white-space: nowrap;
        }

        .content-heard-currentDate-p2 {
          font-size: 14px;
          font-weight: 400;
          color: rgb(85, 85, 85);
          white-space: nowrap;
        }
      }

      .content-heard-search {
        flex: 1;
        // padding: 0 10px;
      }
    }
  }

  .content-main {
    width: 100%;
    border-radius: 6px;
    // padding-bottom: 20px;

    .content-main-heard {
      // height: 100%;
      width: 100%;
      border-radius: 6px;
      background-color: rgb(255, 174, 124);
      margin-bottom: 10px;
    }

    .content-main-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: start;
      grid-gap: 10px;
      margin-bottom: 84px;
      overflow: hidden;

      .ul {
        margin: 0;
        padding: 0;
        width: 100%;

        .li {
          display: flex;
          flex-direction: column;
          align-content: space-around;
          background-color: rgb(219, 219, 219);
          margin-bottom: 10px;
          border-radius: 6px;

          .text {
            flex: 1;
            padding: 10px;
            font-size: 12px;

            .text-title {
              font-size: 16px;
            }

            .text-details {
              font-size: 12px;
            }
          }
        }
      }
    }

    .content-main-noList {
      height: 100%;

      .content-main-noList-add {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        .title {
          font-size: 20px;
          font-weight: 600;
          color: rgb(28, 28, 28);
          margin: 10xp 0;
        }
      }
    }
  }
}
</style>
