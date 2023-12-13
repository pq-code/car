<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import page from '../../components/pages/page.vue';

const formData = ref({
  userAvatar: '',
  userName: '',
  province: '',
  sex: '',
});
const showSex = ref(false);
const actions = ref([
  {
    name: '男',
    value: 1,
  },
  {
    name: '女',
    value: 2,
  },
  {
    name: '未知',
    value: 0,
  },
]);
const sexSelect = (e) => {
  formData.value.sex = e.name;
};

const rules = ref();

const editUserInfo = () => {
  debugger;
};

onLoad(() => {
  // 判断是否已经登录
  const { user_info } = uni.getStorageSync('userInfo');
  if (user_info) {
    formData.value.userAvatar = user_info.avatarUrl;
    formData.value.userName = user_info.nickName;
    formData.value.province = user_info.province;
    formData.value.sex = user_info.gender == 0 ? '未知' : user_info.gender == 1 ? '男' : '女';
  }
});
const onChooseAvatar = (event) => {
  const file = event.detail.file;
  // TODO: 处理选择的图片文件
  console.log(file);
  debugger;
};
</script>
<template>
  <page title="修改用户信息">
    <view class="editUserInfo-center">
      <view class="content-main">
        <u-button type="" disabled hairline="false" size="large" open-type="chooseAvatar" @bindchooseavatar="onChooseAvatar">
          <u-avatar size="60" :src="formData.userAvatar"> </u-avatar>
        </u-button>

        <view class="content-main-li" style="margin-top: 20px">
          <u-form labelPosition="left" labelAlign="right" :model="formData" :rules="rules" ref="form1">
            <u-form-item label="昵称" prop="formData.name" borderBottom ref="name">
              <u-input type="nickname" v-model="formData.userName" border="none"></u-input>
            </u-form-item>
            <u-form-item label="性别" prop="formData.sex" borderBottom @click="showSex = true" ref="sex">
              <u-input v-model="formData.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"></u-input>
              <template #right>
                <u-icon name="arrow-right"></u-icon>
              </template>
            </u-form-item>
          </u-form>
          <u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错" @close="showSex = false" @select="sexSelect"> </u-action-sheet>
        </view>
      </view>
      <view class="editUserInfo-center-bottom"> <u-button style="width: 100%" shape="circle" type="primary" text="确定" @click="editUserInfo()"></u-button> </view>
    </view>
  </page>
</template>
<style lang="less" scoped>
.editUserInfo-center {
  padding: 20px;
  height: 100%;
  .content-heard {
    height: 50px;
    width: calc(100vw - 20px);
    margin: 0 10px;
  }

  .text {
    margin-left: 10px;
    font-size: 18px;
  }

  .content-main {
    margin: 10px auto;
    width: 96%;
    height: 500px;
    // background-color: rgb(244, 244, 244);

    .content-main-li {
      margin: 10px 0;
    }
  }
  .editUserInfo-center-bottom {
    width: calc(100vw - 40px);
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 20px 0 40px;
    background-color: #fff;
  }
}
.title {
  font-size: 18px;
  color: rgb(31, 31, 31);
  font-weight: 600;
  margin: 10px 0;
}
</style>
