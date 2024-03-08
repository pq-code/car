<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { host } from "@/config/index";
import dayjs from "dayjs";

let form = ref({});
const list = ref([]);
onLoad((data) => {
  if (data != null) {
    form.value = JSON.parse(data.data);
    JSON.parse(form.value.fileList).map((e) => {
      list.value.push(host + "/image" + e.img_path);
    });
    console.log("form.value", form.value);
  }
});
</script>
<template>
  <pageSearch>
    <view class="listDetails-center-heard">
      <u-swiper
        style="height: 200px"
        :list="list"
        indicator
        indicatorMode="dot"
        mode="number"
      ></u-swiper>

      <view class="listDetails-center-main-title">
        {{ form.articleTitle }}
      </view>
      <view class="listDetails-center-main-text">
        {{ form.describe }}
      </view>
    </view>
    <view class="listDetails-center-main">
      <view class="listDetails-center-main-bottom">
        发布时间：{{ dayjs(form.createdAt).format("YYYY-MM-DD") }}
      </view>
      <view class="listDetails-center-main-unifiedTemplate">
        <u-form
          labelPosition="left"
          :model="form"
          labelWidth="100"
          ref="formRef"
          :rules="rules"
        >
          <u-form-item
            label="车辆品牌"
            prop="usedCarBrand"
            borderBottom
            ref="item1"
          >
            {{ form.usedCarBrand }}
          </u-form-item>

          <u-form-item label="所在城市" prop="usedCarCity" borderBottom>
            {{ form.usedCarCity }}
          </u-form-item>

          <u-form-item
            label="公里数"
            prop="kilometers"
            borderBottom
            ref="kilometersRef"
          >
            {{ form.kilometers }}
          </u-form-item>

          <u-form-item
            label="车辆上牌时间"
            prop="registrationTime"
            borderBottom
          >
            {{ dayjs(form.registrationTime).format("YYYY-MM-DD") }}
          </u-form-item>

          <u-gap
            height="13"
            style="margin-top: 2px"
            bgColor="rgba(177, 183, 191, 0.1)"
          ></u-gap>

          <u-form-item label="联系人" prop="contacts" borderBottom ref="item1">
            {{ form.contacts }}
          </u-form-item>

          <u-form-item
            label="联系电话"
            prop="contactsPhone"
            borderBottom
            ref="item1"
          >
            {{ form.contactsPhone }}
          </u-form-item>
          <u-form-item label="微信号" prop="weChatId" borderBottom ref="item1">
            <u-input v-model="form.weChatId" border="none"></u-input>
          </u-form-item>
        </u-form>
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

    background-color: #ebebeb;
    border-radius: 6px;
    padding: 10px;
  }
}
</style>
