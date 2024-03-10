<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { host } from "@/config/index";
import dayjs from "dayjs";

let form = ref({ contactsPhone: "", weChatId: "" });
const weChatIdShow = ref(false);
const contactsPhoneShow = ref(false);
const list = ref([]);

onLoad((data) => {
  if (data != null) {
    form.value = JSON.parse(data.data);
    JSON.parse(form.value.fileList).map((e) => {
      list.value.push(host + "/image" + e.img_path);
    });
  }
});

const previewImage = (e) => {
  uni.previewImage({
    urls: list.value, // 这里是图片的数组，可以传入多张图片地址进行预览
    current: e, // 当前显示图片的http链接或者临时文件路径
  });
};

const contactsPhone = computed(() => {
  return (e) => {
    return e.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  };
});

const weChatId = computed(() => {
  return (e) => {
    // return e.replace(/(\d{2})\d*(\d{4})/, '$1****$2');
    return "****";
  };
});

const content = ref();
const obtain = (e) => {
  console.log(e);
  if (e == "contactsPhoneShow") {
    content.value = "1111";
    contactsPhoneShow.value = true;
  }
  if (e == "weChatIdShow") {
    content.value = "2222";
    weChatIdShow.value = true;
  }
};
</script>

<template>
  <pageSearch>
    <view class="listDetails-center-heard">
      <!-- <u-swiper
        :list="list"
        indicator
        indicatorMode="dot"
        mode="number"
      ></u-swiper> -->

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
          labelWidth="70"
          ref="formRef"
        >
          <u-row gutter="16">
            <u-col span="6">
              <u-form-item
                label="车辆品牌"
                prop="usedCarBrand"
                borderBottom
                ref="item1"
              >
                {{ form.usedCarBrand }}
              </u-form-item>
            </u-col>

            <u-col span="6">
              <u-form-item label="所在城市" prop="usedCarCity" borderBottom>
                {{ form.usedCarCity }}
              </u-form-item>
            </u-col>
          </u-row>

          <u-row gutter="16">
            <u-col span="6">
              <u-form-item
                label="公里数"
                prop="kilometers"
                borderBottom
                ref="kilometersRef"
              >
                {{ form.kilometers }}
              </u-form-item>
            </u-col>

            <u-col span="6">
              <u-form-item
                label="上牌时间"
                prop="registrationTime"
                borderBottom
              >
                {{
                  form.registrationTime
                    ? dayjs(form.registrationTime).format("YYYY-MM-DD")
                    : ""
                }}
              </u-form-item>
            </u-col>
          </u-row>

          <u-gap
            height="13"
            style="margin-top: 2px"
            bgColor="rgba(177, 183, 191, 0.1)"
          ></u-gap>

          <u-row gutter="16">
            <u-col span="6">
              <u-form-item
                label="联系人"
                prop="contacts"
                borderBottom
                ref="item1"
              >
                {{ form.contacts }}
              </u-form-item>
            </u-col>

            <u-col span="6">
              <u-form-item
                label="联系电话"
                prop="contactsPhone"
                borderBottom
                ref="item1"
              >
                <u-modal
                  v-model="contactsPhoneShow"
                  :content="content"
                ></u-modal>
                <view
                  style="color: #19be6b"
                  @click="obtain('contactsPhoneShow')"
                >
                  {{ contactsPhone(form.contactsPhone) }}</view
                >
              </u-form-item>
            </u-col>
          </u-row>

          <u-form-item label="微信号" prop="weChatId" borderBottom ref="item1">
            <u-modal v-model="weChatIdShow" :content="content"></u-modal>
            <view style="color: #19be6b" @click="obtain('weChatIdShow')">
              {{ weChatId(form.weChatId) }}
            </view>
          </u-form-item>
        </u-form>
      </view>
      <view style="margin-top: 10px" :key="index" v-for="(item, index) of list">
        <u-image width="100%" :src="item" @click="previewImage(item)"></u-image>
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
    padding: 0px 10px;
    // width: 100%;
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

    background-color: #f1f1f1;
    border-radius: 6px;
    padding: 10px;
  }
}
</style>
