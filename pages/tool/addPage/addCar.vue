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
  usedCarBrand: "",
  contacts: "",
  describe: "",
  telephone: "",
  weChatId: "",
  fileList: [],
  registrationTime: "",
  inspectAnnually: "",
  kilometers: "",
  displacement: "",
  usedCarCity: "",
});
const rules = {
  describe: {
    type: "string",
    required: true,
    message: "请填写车辆描述",
    trigger: ["blur"],
  },
  waitFileList: [
    {
      type: "any",
      required: true,
      message: "请上传车辆照片",
      trigger: ["blur", "change"],
      // 自定义验证函数，见上说明
      validator: (rule, value, callback) => {
        if (waitFileList.length > 0) {
          callback();
        } else {
          callback(new Error("请上传车辆照片"));
        }
      },
    },
  ],
  usedCarBrand: {
    type: "string",
    required: true,
    message: "请填写车辆品牌",
    trigger: ["blur"],
  },
  usedCarCity: {
    type: "string",
    required: true,
    message: "请填写车辆所在城市",
    trigger: ["blur"],
  },
  contacts: {
    type: "string",
    required: true,
    message: "请填写联系人",
    trigger: ["blur"],
  },
  contactsPhone: [
    {
      validator: (rule, value, callback) => {
        return uni.$u.test.mobile(value);
      },
      message: "请输入正确的11位手机号码",
      // 触发器可以同时用blur和change
      trigger: ["change", "blur"],
    },
  ],
  weChatId: [
    {
      required: false,
      message: "微信号",
      // blur和change事件触发检验
      trigger: ["blur", "change"],
    },
    // 正则判断为字母或数字
    {
      pattern: /^[0-9a-zA-Z]*$/g,
      // 正则检验前先将值转为字符串
      transform(value) {
        return String(value);
      },
      message: "只能包含字母或数字",
    },
    {
      min: 6,
      max: 11,
      message: "长度在6-8个字符之间",
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
      status: "success",
      message: "",
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

// const inspectAnnuallyConfirm = (e) => {
//   model.inspectAnnually = dayjs(e.value).format("YYYY-MM-DD");
//   inspectAnnuallyShow.value = false;
// };

const kilometersRef = ref();

const KeypadRef = ref();
const KeypadRefShow = ref(false);

const KeypadRefChange = (value) => {
  console.log(value);
};
const KeypadBackspace = (value) => {
  console.log(value);
};

onShow(() => {
  console.log(formRef.value);
  formRef.value.setRules(rules);
});

const submit = async () => {
  let validate = await formRef.value.validate();
  if (validate) {
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
  } else {
    uni.$u.toast("请填写完整");
  }
};

const valChange = (val) => {
  // 将每次按键的值拼接到value变量中，注意+=写法

  model.kilometers += val;
  console.log(model.kilometers);
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

        <u-form-item label="" prop="describe" borderBottom ref="describe">
          <u-textarea
            border=""
            v-model="model.describe"
            placeholder="请如实填写车况描述,买家都关心有无事故,外观有无剐蹭,上牌时间,过户次数等(15字以上)"
          ></u-textarea>
        </u-form-item>

        <u-form-item
          label=""
          prop="waitFileList"
          borderBottom
          ref="waitFileList"
        >
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
          prop="usedCarBrand"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.usedCarBrand" border="none"></u-input>
        </u-form-item>

        <!--<u-form-item
          label="排量/变速"
          prop="model.displacement"
          borderBottom
        >
          <u-input v-model="model.displacement" border="none"></u-input>
        </u-form-item> -->

        <u-form-item label="所在城市" prop="usedCarCity" borderBottom>
          <u-input v-model="model.usedCarCity" border="none"></u-input>
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

        <!--  <u-form-item label="牌照归属" prop="registrationTime" borderBottom>
        </u-form-item> -->

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

        <!-- <u-form-item label="年检到期时间" prop="inspectAnnually" borderBottom>
          <view @click="inspectAnnuallyShow = true">
            <u-datetime-picker
              :show="inspectAnnuallyShow"
              mode="date"
              @confirm="inspectAnnuallyConfirm"
            ></u-datetime-picker>
            <u-input v-model="model.inspectAnnually" border="none"></u-input>
          </view>
        </u-form-item> -->

        <u-gap
          height="13"
          style="margin-top: 2px"
          bgColor="rgba(177, 183, 191, 0.1)"
        ></u-gap>

        <u-form-item label="联系人" prop="contacts" borderBottom ref="item1">
          <u-input
            oninput="if(value.length > 5)value = value.slice(0, 5)"
            v-model="model.contacts"
            border="none"
          ></u-input>
        </u-form-item>

        <u-form-item
          label="联系电话"
          prop="contactsPhone"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.contactsPhone" border="none"></u-input>
        </u-form-item>
        <u-form-item label="微信号" prop="weChatId" borderBottom ref="item1">
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
