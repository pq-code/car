<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import dayjs from "dayjs";

let list = [
  { name: "二手车", router: "addPage/addCar" },
  { name: "顺风车", router: "addPage/freeRide" },
  { name: "本地服务", router: "addPage/sameCityService" },
  { name: "本地商家", router: "addPage/merchantMerchants" },
  { name: "房屋租售", router: "addPage/housingSales" },
  { name: "求职招聘", router: "addPage/employment" },
  { name: "农林畜牧", router: "addPage/agriculture" },
];
onLoad(() => {});

const addPage = (router) => {
  uni.navigateTo({
    url: router,
  });
};
</script>

<template>
  <view class="content">
    <view class="content-heard"> </view>
    <u-divider text="选择你要添加的类型"></u-divider>
    <view class="content-main">
      <view
        class="li"
        v-for="(item, index) of list"
        :key="`${item.name}_${index}`"
        @click="addPage(item.router)"
      >
        <u-image
          :showLoading="true"
          :src="userAvatar"
          width="40px"
          height="40px"
          shape="circle"
        ></u-image>
        <view> {{ item.name }} </view>
      </view>
    </view>
    <tabbar></tabbar>
  </view>
</template>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 40px);
  padding: 10px;
  flex-wrap: nowrap;

  //   background: linear-gradient(rgb(0, 229, 255) 0%, rgb(59, 242, 255) 0%, rgb(255, 255, 255) 30%);
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
  }

  .content-main {
    height: 400px;
    width: 100%;
    // overflow-y: auto;
    padding: 10px;
    border-radius: 6px;
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 20%);
    grid-template-columns: repeat(auto-fill, 20%);
    // flex-direction: row;
    // flex-wrap: wrap;
    // align-items: center;
    // justify-content: flex-start;
    // align-content: flex-start;
    .li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //   height: 80px;
      //   width: 80px;
      // background-color: rgb(198, 198, 198);
      font-size: 13px;
    }
  }
}
</style>
