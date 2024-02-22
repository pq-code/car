<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import dayjs from 'dayjs';

let list = [
	{name:'顺风车'},
	{name:'二手车'},
	{name:'同城服务'},
	{name:'同城商家'},
	{name:'房屋租售'},
	{name:'求职招聘'},
	{name:'农林畜牧'}
]
onLoad(() => { });

const addPage = ()=>{
	uni.navigateTo({
	  url: "addPage/addCar",
	});
}
	 
</script>

<template>
    <view class="content">
        <view class="content-heard"> </view>
		<u-divider text="选择你要添加的类型"></u-divider>
        <view class="content-main">
            <view class="li"
				v-for="(item,index) of list" key="`${item.name}_${index}`"  @click="addPage(item.name)"> 
				<u-image
				         :showLoading="true"
				         :src="userAvatar"
				         width="40px"
				         height="40px"
				         shape="circle"></u-image>
				<view> {{item.name}} </view>
				</view>
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
        margin-top: 20px;
        // #endif
        margin-bottom: 10px;
        flex-direction: column;
        align-items: flex-start;
    }

    .content-main {
        // height: calc(100vh - 130px);
        // width: 100%;
        // overflow-y: auto;
        border-radius: 6px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		align-content: flex-start;
        .li {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
            height: 80px;
            width: 80px;
            // background-color: rgb(198, 198, 198);
			font-size: 13px;
        }
    }
}
</style>
