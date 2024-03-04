<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default() {
            return '主页';
        },
    },
    backUrl: {
        type: String,
        default() {
            return '';
        },
    },
});

const leftClick = () => {
    console.log(props.backUrl)
    if (props.backUrl == '') {
		uni.navigateBack({});
    } else {
        console.log(props.backUrl)
        uni.navigateTo({
            url: props.backUrl,
        });
    }
};

</script>
<template>
    <view class="page">
        <view class="page-navbar">
            <u-navbar :title="title"
                      height="50"
                      @leftClick="leftClick"
                      :fixed="false"
                      :placeholder="true"
                      :autoBack="false"> </u-navbar>
        </view>
        <view class="page-center">
            <slot></slot>
        </view>
    </view>
</template>
<style lang="less" scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-color: rgb(219, 219, 219);

    .page-navbar {
        // float: top;
        // height: 50px;
        width: 100vw;
    }

    .page-center {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        height: calc(100vh - 50px);
        // #ifdef MP-WEIXIN
        height: calc(100vh - 97px);
        // #endif
        // height: 100%;
        background-color: rgb(255, 255, 255);
    }
}
</style>
