<script setup lang="ts">
import { reactive, ref } from "vue";
import { onShow } from "@dcloudio/uni-app";
import pageSearch from "@/components/pageSearch/pageSearch.vue";
import dayjs from "dayjs";
import { addusedCar } from "@/api/apis/usedCar.js";
import { host } from "@/config/index";
const registrationTimeShow = ref(false);
const inspectAnnuallyShow = ref(false);
const formRef = ref();
const waitFileList = reactive([]);

const model = reactive({
  articleTitle: "",
  vehicleBrand: "",
  userInfoName: "",
  describe: "",
  telephone: "",
  weChatId: "",
  fileList: [],
  registrationTime: "",
  inspectAnnually: "",
  kilometers: "",
});
const rules = {
  // 字段名称
  "model.describe": {
    type: "string",
    required: true,
    message: "请填写车辆描述",
    trigger: ["blur"],
  },
  "model.vehicleBrand": {
    type: "string",
    required: true,
    message: "请填写车辆品牌",
    trigger: ["blur"],
  },
  "model.userInfoName": {
    type: "string",
    required: true,
    message: "请填写联系人",
    trigger: ["blur"],
  },
  "model.telephone": [
    // {
    //   required: true,
    //   message: "请输入手机号",
    //   trigger: ["change", "blur"],
    // },
    {
      validator: (rule, value, callback) => {
        // 上面有说，返回true表示校验通过，返回false表示不通过
        // this.$u.test.mobile()就是返回true或者false的
        return uni.$u.test.telephone(true);
      },
      message: "手机号码不正确",
      // 触发器可以同时用blur和change
      trigger: ["change", "blur"],
    },
  ],
};

// 删除图片
const deletePic = (event: any) => {
  waitFileList.splice(event.index, 1);
};

// 新增图片
const afterRead = async (event: any) => {
  // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event.file);
  // let fileListLen = model.fileList.length;
  lists.map((item) => {
    waitFileList.push({
      ...item,
      status: "uploading",
      message: "待上传",
    });
  });
};

const uploadFilePromise = (url: any) => {
  return new Promise((resolve, reject) => {
    let a = uni.uploadFile({
      url: host + "/wx/project/upload",
      filePath: url,
      name: "file",
      formData: {
        user: "test",
      },
      success: (res) => {
        resolve(JSON.parse(res.data).result);
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

onShow(() => {
  console.log(formRef.value);
  formRef.value.setRules(rules);
});

const submit = async () => {
  // formRef.value
  //   .validate()
  //   .then((res) => {

  // 文件上传
  try {
    for (let i = 0; i < waitFileList.length; i++) {
      const result = await uploadFilePromise(waitFileList[i].url);
      let item = waitFileList[i];
      waitFileList.splice(
        i,
        1,
        Object.assign(item, {
          status: "success",
          message: "",
          url: result?.img_name,
        })
      );
      model.fileList.push(result);
    }
  } catch (err) {
    console.log(err);
  }

  const { user_nickname, user_id } = uni.getStorageSync("userInfo");
  let parse = {
    ...model,
    publisherId: user_id,
    publisherName: user_nickname,
  };

  console.log(parse, model.fileList);

  addusedCar(parse)
    .then((res) => {
      console.log(res);
      if (res.code == 0) {
        uni.navigateBack({});
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
  // })
  // .catch((errors) => {
  //   uni.$u.toast("请填写完整");
  // });
};

const valChange = (val) => {
  // 将每次按键的值拼接到value变量中，注意+=写法

  model.kilometers += val;
  console.log(model.kilometers);
  debugger;
};

const backspace = () => {
  // 删除value的最后一个字符
  if (model.kilometers.length) {
    model.kilometers = model.kilometers.substr(0, model.kilometers.length - 1);
  }
  console.log(model.kilometers);
};
</script>
<template>
  <pageSearch title="发布二手车">
    <view class="content-main">
      <u-form
        labelPosition="left"
        :model="model"
        labelWidth="100"
        ref="formRef"
        :rules="rules"
      >
        <u-form-item
          label="标题"
          prop="model.articleTitle"
          borderBottom
          ref="articleTitle"
        >
          <u-input v-model="model.articleTitle" border="none"></u-input>
        </u-form-item>
        <u-form-item label="" prop="model.describe" borderBottom ref="describe">
          <u-textarea
            border=""
            v-model="model.describe"
            placeholder="请如实填写车况描述,买家都关心有无事故,外观有无剐蹭,上牌时间,过户次数等(15字以上)"
          ></u-textarea>
        </u-form-item>

        <u-form-item label="" prop="waitFileList" borderBottom ref="fileList">
          <u-upload
            :fileList="waitFileList"
            @afterRead="afterRead"
            @delete="deletePic"
            multiple
            :maxCount="6"
          ></u-upload>
        </u-form-item>

        <u-form-item
          label="车辆品牌"
          prop="model.vehicleBrand"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.vehicleBrand" border="none"></u-input>
        </u-form-item>

        <u-form-item
          label="排量/变速"
          prop="model.registrationTime"
          borderBottom
        >
          <u-input v-model="model.registrationTime" border="none"></u-input>
        </u-form-item>

        <u-form-item label="所在城市" prop="registrationTime" borderBottom>
          <u-input v-model="model.registrationTime" border="none"></u-input>
        </u-form-item>

        <u-form-item
          label="公里数"
          prop="kilometers"
          borderBottom
          ref="kilometersRef"
        >
          <view style="display: flex">
            <u-input
              v-model="model.kilometers"
              border="none"
              @focus="KeypadRefShow = true"
              @change="KeypadRefChange"
              @backspace="KeypadBackspace"
            >
            </u-input>
            <view>公里</view>
          </view>
          <u-keyboard
            ref="KeypadRef"
            mode="number"
            :show="KeypadRefShow"
            :closeOnClickOverlay="true"
            :dotDisabled="true"
            :safe-area-inset-bottom="true"
            @change="valChange"
            @backspace="backspace"
            @confirm="KeypadRefShow = false"
            @cancel="KeypadRefShow = false"
          ></u-keyboard>
        </u-form-item>
        <u-form-item label="牌照归属" prop="registrationTime" borderBottom>
        </u-form-item>

        <u-form-item label="车辆上牌时间" prop="registrationTime" borderBottom>
          <view @click="registrationTimeShow = true">
            <u-datetime-picker
              :show="registrationTimeShow"
              mode="date"
              @confirm="registrationTimeConfirm"
            ></u-datetime-picker>
            <u-input v-model="model.registrationTime" border="none"></u-input>
          </view>
        </u-form-item>

        <u-form-item label="年检到期时间" prop="inspectAnnually" borderBottom>
          <view @click="inspectAnnuallyShow = true">
            <u-datetime-picker
              :show="inspectAnnuallyShow"
              mode="date"
              @confirm="inspectAnnuallyConfirm"
            ></u-datetime-picker>
            <u-input v-model="model.inspectAnnually" border="none"></u-input>
          </view>
        </u-form-item>

        <u-gap
          height="13"
          style="margin-top: 2px"
          bgColor="rgba(177, 183, 191, 0.1)"
        ></u-gap>

        <u-form-item
          label="联系人"
          prop="model.userInfoName"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.userInfoName" border="none"></u-input>
        </u-form-item>

        <u-form-item
          label="联系电话"
          prop="model.telephone"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.telephone" border="none"></u-input>
        </u-form-item>
        <u-form-item
          label="微信号"
          prop="model.weChatId"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.weChatId" border="none"></u-input>
        </u-form-item>
      </u-form>
    </view>
    <view style="padding: 20px">
      <u-button type="primary" text="发布" @click="submit"></u-button>
    </view>
  </pageSearch>
</template>
<style lang="less" scoped>
.content-main {
  padding: 0 10px;
}
</style>
