<script setup>
import { ref, defineProps, computed } from "vue";
import { host } from "@/config/index";

import dayjs from "dayjs";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const onpen = (item) => {
  uni.navigateTo({
    url: `listDetails?data=${JSON.stringify(item)}`,
  });
};

// 封面图片
const coverPhoto = computed(() => {
  return (e) => {
    console.log(host + e.articleCover);
    return host + e.articleCover;
  };
});
</script>

<template>
  <view class="listCard" @click="onpen(item)">
    <view class="listCard-image">
      <u-image
        :showLoading="true"
        :lazyLoad="true"
        radius="6px 6px 0 0"
        :src="coverPhoto(item)"
        width="100%"
      ></u-image>
    </view>
    <view class="text">
      <view class="text-title">{{ item.articleTitle }}</view>
      <!-- <view class="text-details">{{ item.details }}</view> -->
    </view>
    <view class="button-icon">
      <view class="left-icon">
        <u-icon name="star" color="#6d6d6d" size="20"></u-icon>
        <u-icon name="heart" color="#6d6d6d" size="20"></u-icon>
        <u-icon name="man-add" color="#6d6d6d" size="20"></u-icon>
      </view>
      <view class="right-icon">
        <view class="right-time">{{
          dayjs(item.createdAt).format("YYYY-MM-DD")
        }}</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="less">
.listCard {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  // background-color: rgb(219, 219, 219);
  margin-bottom: 10px;
  border-radius: 10px;
  background: #ffffff;
  .listCard-image {
    max-height: 200px;
    overflow: hidden;
    border-radius: 6px;
  }
  .text {
    width: 100%;
    margin-top: 10px;
    font-size: 12px;

    .text-title {
      font-size: 16px;
    }

    .text-details {
      margin-top: 3px;
      font-size: 12px;
      color: #6d6d6d;
      line-height: 20px;
    }
  }
  .button-icon {
    display: flex;
    justify-content: space-between;
    height: 20px;
    width: 100%;
    // margin-top: 7px;
    // background: #6d6d6d;
    .left-icon {
      display: flex;
      flex-direction: column;
      flex-direction: row;
    }
    .right-icon {
      display: flex;
      .right-time {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
