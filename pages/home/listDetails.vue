<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import dayjs from "dayjs";

let form = ref({});
onLoad((data) => {
  if (data != null) {
    form.value = JSON.parse(data.data);
  }
  console.log(form.value);
});
</script>
<template>
  <pageSearch
    :userInfor="{
      name: '微信用户',
      src: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    }"
  >
    <view class="listDetails-center-heard">
		<view class="listDetails-center-main-title">
		  {{ form.articleTitle }}
		</view>
		<view class="listDetails-center-main-text">
		  {{ form.describe }}
		</view>
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
    </view>
    <view class="listDetails-center-main">
      <view class="listDetails-center-main-bottom">
        发布时间：{{ dayjs(form.createdAt).format("YYYY-MM-DD") }}
      </view>
	  <view class="listDetails-center-main-unifiedTemplate" >
	  </view>
    </view>
  </pageSearch>
</template>
<style lang="less" scoped>
.listDetails-center-heard {
  // height: 260px;
  .listDetails-center-main-title {
	padding: 10px;
    font-size: 40rpx;
    font-weight: 600;
    color: rgb(28, 28, 28);
    white-space: normal;
    word-wrap: break-word;
    line-height: 1.5;
  }
  
  .listDetails-center-main-text {
    padding: 0px 10px 10px 10px;
    width: 100%;
    line-height: 1.5;
    font-size: 33rpx;
    font-weight: 500;
    color: rgb(58, 58, 58);
    white-space: normal;
    word-wrap: break-word;
  }
}

.listDetails-center-main {
  flex: 1;
  padding: 10px;

  .listDetails-center-main-bottom {
    width: 100%;
    font-size: 25rpx;
    font-weight: 500;
    color: rgb(134, 134, 134);
    white-space: normal;
    word-wrap: break-word;
    margin: 10px 0;
  }

  .listDetails-center-main-unifiedTemplate {
    width: calc(100% - 20px);
    height: 100px;
    background-color: #ebebeb;
    border-radius: 6px;
    padding: 10px;
  }
}
</style>
