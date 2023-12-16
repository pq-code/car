<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const onpen = () => {
  uni.navigateTo({
    url: "listDetails",
  });
};
</script>

<template>
  <view class="listCard" @click="onpen(item)">
    <view class="listCard-image">
      <u-image
        :showLoading="true"
        :lazyLoad="true"
        radius="6px 6px 0 0"
        :src="props.item?.src"
        width="100%"
      ></u-image>
    </view>
    <view class="text">
      <view class="text-title">{{ props.item.title }}</view>
      <view class="text-details">{{ props.item.details }}</view>
    </view>
    <view class="button-icon">
      <view class="left-icon">
        <u-icon name="star" color="#6d6d6d" size="19"></u-icon>
        <u-icon name="heart" color="#6d6d6d" size="19"></u-icon>
      </view>
      <view class="right-icon">
        <u-icon name="man-add" color="#6d6d6d" size="19"></u-icon>
      </view>
    </view>
  </view>
</template>

<style scoped lang="less">
.listCard {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  // background-color: rgb(219, 219, 219);
  margin-bottom: 10px;
  border-radius: 10px;
  .listCard-image {
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
    height: 20px;
    width: 100%;
    margin-top: 7px;
    // background: #6d6d6d;
    .left-icon {
      display: flex;
    }
  }
}
</style>
