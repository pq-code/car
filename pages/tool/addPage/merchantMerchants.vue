<script setup lang="ts">
import { ref } from "vue";
import { onReady } from "@dcloudio/uni-app";
import pageSearch from "@/components/pageSearch/pageSearch.vue";
import dayjs from "dayjs";

const registrationTimeShow = ref(false);
const inspectAnnuallyShow = ref(false);

const model = {
  vehicleBrand: "",
  userInfoName: "",
  describe: "",
  telephone: "",
  weChatId: "",
  fileList: [],
  registrationTime: "",
  inspectAnnually: "",
  kilometers: "",
};

// 删除图片
const deletePic = (event) => {
  this[`fileList${event.name}`].splice(event.index, 1);
};
// 新增图片
const afterRead = async (event) => {
  // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  console.log(event.name, lists);
  debugger;
  let fileListLen = this[`fileList${event.name}`].length;
  lists.map((item) => {
    this[`fileList${event.name}`].push({
      ...item,
      status: "uploading",
      message: "上传中",
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = this[`fileList${event.name}`][fileListLen];
    this[`fileList${event.name}`].splice(
      fileListLen,
      1,
      Object.assign(item, {
        status: "success",
        message: "",
        url: result,
      })
    );
    fileListLen++;
  }
};
const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    let a = uni.uploadFile({
      url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
      filePath: url,
      name: "file",
      formData: {
        user: "test",
      },
      success: (res) => {
        setTimeout(() => {
          resolve(res.data.data);
        }, 1000);
      },
    });
  });
};

const registrationTimeConfirm = (e) => {
  model.registrationTime = dayjs(e.value).format("YYYY-MM-DD");
  registrationTimeShow.value = false;
};
const inspectAnnuallyConfirm = (e) => {
  model.inspectAnnually = dayjs(e.value).format("YYYY-MM-DD");
  inspectAnnuallyShow.value = false;
};

const kilometersRef = ref();

const KeypadRef = ref();
const KeypadRefShow = ref(false);

const KeypadRefChange = (value) => {
  console.log(value);
  debugger;
};
const KeypadBackspace = (value) => {
  console.log(value);
  debugger;
};
</script>
<template>
  <pageSearch title="发布同城商家">
    <view class="content-main">
      <u-form labelPosition="left" :model="model" labelWidth="100" ref="form1">
        <u-form-item label="" prop="model.describe" borderBottom ref="describe">
          <u-textarea
            border=""
            v-model="model.describe"
            placeholder="请如实填写车况描述,买家都关心有无事故,外观有无剐蹭,上牌时间,过户次数等(15字以上)"
          ></u-textarea>
        </u-form-item>

        <u-form-item label="" prop="model.fileList" borderBottom ref="fileList">
          <u-upload
            :fileList="model.fileList"
            @afterRead="afterRead"
            @delete="deletePic"
            multiple
            :maxCount="6"
          ></u-upload>
        </u-form-item>

        <u-gap
          height="13"
          style="margin-top: 2px"
          bgColor="rgba(177, 183, 191, 0.1)"
        ></u-gap>

        <u-form-item
          label="联系人"
          prop="userInfoName"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.userInfoName" border="none"></u-input>
        </u-form-item>

        <u-form-item label="联系电话" prop="telephone" borderBottom ref="item1">
          <u-input v-model="model.telephone" border="none"></u-input>
        </u-form-item>
        <u-form-item label="微信号" prop="weChatId" borderBottom ref="item1">
          <u-input v-model="model.weChatId" border="none"></u-input>
        </u-form-item>
      </u-form>
    </view>
    <view style="padding: 20px">
      <u-button type="primary" text="发布"></u-button>
    </view>
  </pageSearch>
</template>
<style lang="less" scoped>
.content-main {
  padding: 0 10px;
}
</style>
