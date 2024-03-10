<script setup>
import { ref, defineProps, computed } from "vue";
import { host } from "@/config/index";
import { imageUrl } from "@/utils/index";
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

const previewImage = () => {
  let list = JSON.parse(props.item.fileList);
  uni.previewImage({
    urls: list, // 这里是图片的数组，可以传入多张图片地址进行预览
    current: "", // 当前显示图片的http链接或者临时文件路径
  });
};
</script>

<template>
  <view class="listCard">
    <view class="listCard-image" @click="previewImage">
      <u-image
        :showLoading="true"
        :lazyLoad="true"
        :src="imageUrl(item.articleCover)"
        width="100%"
      ></u-image>
    </view>
    <view class="text" @click="onpen(item)">
      <view class="text-title">{{ item.articleTitle }}</view>
      <view class="text-center">{{ item.describe }}</view>
      <!-- <view class="text-details">{{ item.details }}</view> -->
    </view>
    <view class="button-icon" @click="onpen(item)">
      <view class="left-icon">
        <u-icon name="star" color="#6d6d6d" size="20"></u-icon>
        <!-- <u-icon name="heart" color="#6d6d6d" size="20"></u-icon> -->
        <!-- <u-icon name="man-add" color="#6d6d6d" size="20"></u-icon> -->
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
  // padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  // background-color: rgb(219, 219, 219);
  margin-bottom: 5px;
  border-radius: 10px;
  background: #ffffff;
  .listCard-image {
    max-height: 200px;
    overflow: hidden;
    border-radius: 6px 6px 0px 0px;
  }
  .text {
    padding: 10px;
    // width: 100%;
    // margin-top: 10px;
    font-size: 12px;

    .text-title {
      font-size: 16px;
    }
    .text-center {
      font-size: 10px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 设置最大显示行数 */
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    .text-details {
      margin-top: 3px;
      font-size: 12px;
      color: #6d6d6d;
      line-height: 20px;
    }
  }
  .button-icon {
    padding: 0 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    height: 20px;
    // width: 100%;
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
