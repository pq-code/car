<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import dayjs from 'dayjs';

const tabbarClick = (e) => {
    uni.switchTab({
        url: e.pagePath,
    });
};
const formData = ref({
    userAvatar: '',
    userName: '',
    province: '',
    sex: '',
});

const tabList = [
    {
        pagePath: '/pages/home/home',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home_sec.png',
        text: '首页',
        name: 'home',
    },
    {
        pagePath: '/pages/tool/home',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home_sec.png',
        text: '工具',
        name: 'tool',
    },
    {
        pagePath: '/pages/user/home',
        iconPath: '/static/user.png',
        selectedIconPath: '/static/user_sec.png',
        text: '我的',
        name: 'user',
    },
];

const editUser = () => {
    uni.navigateTo({
        url: 'editUserInfo',
    });
};

const editUserInfo = () => { };
onLoad(() => {
    const { user_info } = uni.getStorageSync('userInfo');
    if (user_info) {
        formData.value.userAvatar = user_info.avatarUrl;
        formData.value.userName = user_info.nickName;
        formData.value.province = user_info.province;
        formData.value.sex = user_info.gender;
    }
});
</script>

<template>
    <view class="content">
        <view class="content-heard">
            <u-image @click="editUser()"
                     :showLoading="true"
                     :src="userAvatar"
                     width="80px"
                     height="80px"
                     shape="circle"></u-image>
            <view class="user-name">{{ formData.userName ? formData.userName : '用户名' }}</view>
        </view>

        <view class="content-main"
              style="margin-top: 20px">
            <view class="title">

            </view>
            <view class="content-button"
                  v-for="item in ['已发布的内容', '发布新的内容', '', '']">
                {{ item }}
            </view>

            <!-- <view class="content-published">
                                                                                                <view v-for="item in ['', '', '', '']"></view>
                                                                                            </view> -->
        </view>

        <u-tabbar activeColor="aqua"
                  :value="value1"
                  @change="(name) => (value1 = name)"
                  :fixed="true"
                  :placeholder="true"
                  :safeAreaInsetBottom="true">
            <u-tabbar-item v-for="(item, i) in tabList"
                           :key="item.name"
                           :text="item.text"
                           :name="item.name"
                           @click="tabbarClick(item)"
                           icon="home">
                <!-- <image class="bar_img" slot="active-icon" :src="item.selectedIconPath"></image>
                                                                                                                                                                                                                                                                                                                                        <image class="bar_img" slot="inactive-icon" :src="item.iconPath"></image> -->
            </u-tabbar-item>
        </u-tabbar>
    </view>
</template>

<style lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 40px);
    padding: 20px;
    flex-wrap: nowrap;

    //   background: linear-gradient(rgb(0, 229, 255) 0%, rgb(59, 242, 255) 0%, rgb(255, 255, 255) 30%);
    .content-heard {
        display: flex;
        width: 100%;
        height: 100px;
        position: sticky;
        // #ifdef MP-WEIXIN
        margin-top: 50px;
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

        .content-published {}


    }
}
</style>
