<script setup>
import { ref } from "vue";
import { onLoad, onPullDownRefresh, onShow } from "@dcloudio/uni-app";
import { getSetting, getLoginFn } from "@/utils/index.js";
import { getUsedCarList } from "@/api/apis/usedCar.js";
import dayjs from "dayjs";
import listCard from "./components/listCard.vue";

const value1 = ref(0);
const keyword = ref("");
const datalist1 = ref([]);
const datalist2 = ref([]);

const userAvatar = ref(); // 用户头像
// const weather = ref({}); // 获取天气
const navbarHeight = ref();

const status = ref("loadmore");
const iconType = ref("flower");
const loadText = ref("暂无数据点击加载更多");

const tabsList = [
  {
    name: "二手车",
  },
  {
    name: "顺风车",
  },
  {
    name: "本地服务",
  },
  {
    name: "本地店铺",
  },
  {
    name: "房屋租售",
  },
  {
    name: "求职招聘",
  },
  {
    name: "农林畜牧",
  },
];

const imageList = ref([]);

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
  uni.navigateTo({
    url: "search",
  });
};

const addDiaryFn = () => {
  uni.navigateTo({
    url: "addDiary",
  });
};

const onpen = (item) => {
  uni.navigateTo({
    url: `listDetails?projectId${item.projectId}`,
  });
};

onPullDownRefresh(() => {
  console.log("下拉刷新");
});

onShow(() => {
  uni.getSystemInfo({
    success: (e) => {
      // #ifdef MP-WEIXIN
      navbarHeight.value = e.statusBarHeight + 44;
	  console.log("height", navbarHeight.value);
      // #endif
    },
  });

  //   console.log(uni.getStorageSync("weather"));
  //   if (uni.getStorageSync("weather")) {
  //     weather.value = uni.getStorageSync("weather");
  //   } else {
  //     getWeather();
  //   }

  // 判断是否已经登录
  // uni.checkSession({
  //   success(res) {
  //     console.log("当前登录未失效，不需要重新登录");
  //   },
  //   fail: (err) => {
  //     console.log("当前登录已经失效重新登录");
  //     getSetting("scope.record").then((res) => {
  //       getLoginFn().then((res) => {
  //         userAvatar.value = res.result.user_profile_photo;
  //         console.log("userAvatar", userAvatar);
  //       });
  //     });
  //     const { user_profile_photo } = uni.getStorageSync("userInfo");
  //     userAvatar.value = user_profile_photo;
  //   },
  // });

  if (!uni.getStorageSync("token")) {
    console.log("当前登录已经失效重新登录");
    // #ifdef MP-WEIXIN
    getSetting("scope.record").then((res) => {
      getLoginFn().then((res) => {
        getDataListFn();
      });
    });
    // #endif
    const { user_profile_photo } = uni.getStorageSync("userInfo");
    userAvatar.value = user_profile_photo;
  } else {
    getDataListFn();
  }
});

const onPageScroll = (e) => {};
const tabsClick = (item) => {
  console.log("item", item);
};

// 获取文件列表
const getDataListFn = () => {
  getUsedCarList()
    .then((res) => {
      let data = res.result;
      status.value = "loadmore";
      if (data.count == 0) {
        status.value = "nomore";
        loadText.value = "没有更多数据了";
        console.log("没有更多数据了", res.result.rows);
      }
      imageList.value = data.rows;
      init();
    })
    .catch((err) => {
      status.value = "loadmore";
      console.log("err", err);
    });
};

// 加载前值为loadmore，加载中为loading，没有数据为nomore
const onReachBottom = () => {
  status.value = "loading";
  getDataListFn();
};
</script>

<template>
  <view class="content">
    <u-navbar fixed placeholder>
      <template #left>
        <view style="width: 100%; display: flex">
          <u-search
            placeholder="搜索"
            disabled
            :show-action="false"
            :animation="false"
            @click="searchFn"
            @custom="searchFn"
            v-model="keyword"
          ></u-search>
        </view>
      </template>
      <template #center>
        <!-- <u-search
          placeholder="搜索"
          disabled
          :show-action="false"
          :animation="false"
          @click="searchFn"
          @custom="searchFn"
          v-model="keyword"
        ></u-search> -->
      </template>
      <template #right>
        <!-- <view>1212</view> -->
      </template>
    </u-navbar>

    <u-sticky :offset-top="navbarHeight" bgColor="#fff">
      <u-tabs :list="tabsList" @click="tabsClick"></u-tabs>
    </u-sticky>

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

      <view class="content-main-list">
        <ul class="ul">
          <list-card
            v-for="(item, index) in datalist1"
            :key="`left-${index}`"
            :item="item"
          />
        </ul>
        <ul class="ul">
          <list-card
            v-for="(item, index) in datalist2"
            :key="`left-${index}`"
            :item="item"
          />
        </ul>
      </view>
    </view>

    <u-loadmore
      v-if="imageList.length == 0"
      @loadmore="onReachBottom"
      :status="status"
      :icon-type="iconType"
      :load-text="loadText"
    />
    <tabbar></tabbar>
  </view>
</template>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 20px);
  flex-wrap: nowrap;
  background: #f0efef;
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
    width: calc(100% - 5px);
    padding: 10px 0px;
    border-radius: 6px;
    background: #f0efef;
    // padding-bottom: 20px;

    .content-main-heard {
      // height: 100%;
      width: 100%;
      border-radius: 6px;
      background-color: rgb(255, 174, 124);
      margin-bottom: 10px;
    }
    .noData {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .content-main-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: start;
      grid-gap: 5px;
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
