<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import dayjs from 'dayjs';

const tabbarClick = (e) => {
    uni.switchTab({
        url: e.pagePath,
    });
};
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

onLoad(() => { });
</script>

<template>
    <view class="content">
        <view class="content-heard"> </view>

        <view class="content-main">
            <view class="li"
                  v-for="item of 9"> 12212</view>
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
        margin-top: 20px;
        // #endif
        margin-bottom: 10px;
        flex-direction: column;
        align-items: flex-start;
    }

    .content-main {
        height: calc(100vh - 130px);
        width: 100%;
        overflow-y: auto;
        border-radius: 6px;

        .li {
            height: 60px;
            width: 100%;
            background-color: rgb(198, 198, 198);
            margin-top: 10px;
        }
    }
}
</style>
