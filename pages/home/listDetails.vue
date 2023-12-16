<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const imageSrc = ref();
onLoad((src) => {
  imageSrc.value = src.src;
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
      <view class="listDetails-center-main-title"> 阿斯顿阿斯顿你的呢 </view>
      <view class="listDetails-center-main-text">
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒 /n
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，你打算，反思，能否撒，每年的撒，买的那双，你懂撒
      </view>
      <view class="listDetails-center-main-bottom">
        发布时间：{{ "10个小时前" }}
      </view>
      <view class="listDetails-center-main-unifiedTemplate" v-if="false">
        阿斯顿阿斯顿你的呢,asfmas,mdfas,fndas,nd啊
        ，打死，的弥撒，到那时，到那时，电脑啊，是你的吗什么，到那时，你打
        算，到那时，
      </view>
    </view>
  </pageSearch>
</template>
<style lang="less" scoped>
.listDetails-center-heard {
  // height: 260px;
}

.listDetails-center-main {
  flex: 1;
  padding: 10px;

  .listDetails-center-main-title {
    font-size: 15px;
    font-weight: 600;
    color: rgb(28, 28, 28);
    white-space: normal;
    word-wrap: break-word;
    line-height: 1.5;
  }

  .listDetails-center-main-text {
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 500;
    color: rgb(58, 58, 58);
    white-space: normal;
    word-wrap: break-word;
    margin-top: 10px;
  }

  .listDetails-center-main-bottom {
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    color: rgb(134, 134, 134);
    white-space: normal;
    word-wrap: break-word;
    margin-top: 20px;
  }

  .listDetails-center-main-unifiedTemplate {
    width: calc(100% - 20px);
    height: 100px;
    background-color: antiquewhite;
    border-radius: 6px;
    padding: 10px;
  }
}
</style>
