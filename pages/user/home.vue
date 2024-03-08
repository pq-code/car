<script setup>
import { ref, computed } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import dayjs from "dayjs";
import { getSetting, getLoginFn } from "@/utils/index.js";

const formData = ref({
  userAvatar: "",
  userName: "",
  province: "",
  sex: "",
});

const editUser = () => {
  uni.navigateTo({
    url: "editUserInfo",
  });
};

const login = () => {
  console.log("当前登录已经失效重新登录");
  // #ifdef MP-WEIXIN
  getSetting("scope.record").then((res) => {
    getLoginFn().then((data) => {
      const { user_profile_photo, user_nickname } =
        uni.getStorageSync("userInfo");
      formData.value.userAvatar = user_profile_photo;
      formData.value.userName = user_nickname;
    });
  });
  // #endif
};

const editUserInfo = () => {};
const isAdmin = ref(false);

const showAdmin = computed(() => {
  return (item) => {
    console.log(item);
    if (["管理已发布内容"].indexOf(item) !== -1) {
      if (isAdmin.value) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  };
});
onLoad(() => {
  const { user_nickname, user_profile_photo, is_admins } =
    uni.getStorageSync("userInfo");
  formData.value.userAvatar = user_profile_photo;
  formData.value.userName = user_nickname;
  isAdmin.value = is_admins;
  // formData.value.province = user_info.province;
  // formData.value.sex = user_info.gender;
  console.log(uni.getStorageSync("userInfo"));
});
</script>

<template>
  <view class="content">
    <view class="content-heard">
      <u-image
        @click="login()"
        :showLoading="true"
        :src="formData.userAvatar"
        width="80px"
        height="80px"
        shape="circle"
      ></u-image>
      <view class="user-name">{{ formData.userName || "用户名" }}</view>
    </view>

    <view class="content-main" style="margin-top: 20px">
      <!-- <view class="title">
				
            </view> -->
      <view
        class="content-button"
        v-if="showAdmin(item)"
        :key="`${item}`"
        v-for="item in ['管理已发布内容', '已发布的内容', '发布新的内容']"
        @click="open(item)"
      >
        {{ item }}
      </view>

      <!-- <view class="content-published">
                                                                                                <view v-for="item in ['', '', '', '']"></view>
                                                                                            </view> -->
    </view>

    <tabbar></tabbar>
  </view>
</template>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 40px);
  padding: 10px;
  flex-wrap: nowrap;

  //   background: linear-gradient(rgb(0, 229, 255) 0%, rgb(59, 242, 255) 0%, rgb(255, 255, 255) 30%);
  .content-heard {
    display: flex;
    width: 100%;
    height: 100px;
    position: sticky;
    // #ifdef MP-WEIXIN
    margin-top: 90px;
    // #endif
    margin-bottom: 10px;
    flex-direction: row;
    align-items: flex-end;

    .user-name {
      font-size: 20px;
      font-weight: 600;
      color: rgb(28, 28, 28);
      white-space: nowrap;
      margin-left: 20px;
    }
  }

  .content-main {
    height: calc(100vh - 130px);
    width: 100%;
    // overflow-y: auto;
    border-radius: 6px;

    .title {
      width: 100%;
      height: 100px;
      border-radius: 6px;
      background-color: rgb(231, 231, 231);
    }

    .content-button {
      height: 60px;
      text-align: left;
      line-height: 60px;
      border-radius: 6px;
      padding: 0 10px;
      background-color: rgb(231, 231, 231);
      margin-top: 10px;
    }

    .content-published {
    }
  }
}
</style>
