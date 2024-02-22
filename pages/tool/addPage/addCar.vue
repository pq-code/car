<script setup lang="ts">
import { ref } from "vue";
import pageSearch from "@/components/pageSearch/pageSearch.vue";

const registrationTimeShow = ref(false)

const model = {
	vehicleBrand:'',
	userInfoName: '',
	describe: '',
	telephone:'',
	weChatId:'',
	fileList:[],
	registrationTime:[],
	kilometers:''
}

// 删除图片
const deletePic = (event)=> {
	this[`fileList${event.name}`].splice(event.index, 1)
}
// 新增图片
const afterRead = async(event) => {
	// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
	let lists = [].concat(event.file)
	console.log(event.name,lists)
	debugger
	let fileListLen = this[`fileList${event.name}`].length
	lists.map((item) => {
		this[`fileList${event.name}`].push({
			...item,
			status: 'uploading',
			message: '上传中'
		})
	})
	for (let i = 0; i < lists.length; i++) {
		const result = await uploadFilePromise(lists[i].url)
		let item = this[`fileList${event.name}`][fileListLen]
		this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
			status: 'success',
			message: '',
			url: result
		}))
		fileListLen++
	}
}
const uploadFilePromise = (url)=> {
	return new Promise((resolve, reject) => {
		let a = uni.uploadFile({
			url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
			filePath: url,
			name: 'file',
			formData: {
				user: 'test'
			},
			success: (res) => {
				setTimeout(() => {
					resolve(res.data.data)
				}, 1000)
			}
		});
	})
}

const confirm = (e) => {
	console.log(e);
	model.registrationTime = e
	registrationTimeShow.value = false
}

</script>
<template>
  <pageSearch title="发布二手车">
	<view class="content-main">
		<u-form
			labelPosition="left"
			:model="model"
			labelWidth="70"
			ref="form1"
		>
			<u-form-item
				label="车辆品牌"
				prop="vehicleBrand"
				borderBottom
				ref="item1"
			>
				<u-input
					v-model="model.vehicleBrand"
					border="none"
				></u-input>
			</u-form-item>
			
			<u-form-item
				label="排量/变速"
				prop="registrationTime"
				borderBottom
			>
			</u-form-item>
			
			<u-form-item
				label="所在城市"
				prop="registrationTime"
				borderBottom
			>
			</u-form-item>
			
			<u-form-item
				label="公里数"
				prop="kilometers"
				borderBottom
				ref="item1"
			>
				<u-input
					v-model="model.kilometers"
					border="none"
				></u-input>
			</u-form-item>
			
			<u-form-item
				label="牌照归属"
				prop="registrationTime"
				borderBottom
			>
			</u-form-item>
			
			<u-form-item
				label="车辆上牌时间"
				prop="registrationTime"
				borderBottom
			>
				<view @click="registrationTimeShow = true">
					<u-calendar :show="registrationTimeShow" mode="single" @confirm="confirm"></u-calendar>
					<u-input
						v-model="model.registrationTime"
						border="none"
						disabled
					></u-input>
				</view>
			</u-form-item>
			
			<u-form-item
				label="年检到期时间"
				prop="registrationTime"
				borderBottom
			>
				<view @click="registrationTimeShow = true">
					<u-calendar :show="registrationTimeShow" mode="single" @confirm="confirm"></u-calendar>
					<u-input
						v-model="model.registrationTime"
						border="none"
						disabled
					></u-input>
				</view>
			</u-form-item>
		
			<u-form-item
				label="车辆照片"
				prop="model.fileList"
				borderBottom
				ref="item1"
			>
				<u-upload
					:fileList="model.fileList"
					@afterRead="afterRead"
					@delete="deletePic"
					multiple
					:maxCount="6"
				></u-upload>
			</u-form-item>
		
			<u-form-item
				label="描述"
				prop="model.describe"
				borderBottom
				ref="item1"
			>
				<u-textarea v-model="model.describe" placeholder="请输入内容" ></u-textarea>
			</u-form-item>
			
			<u-form-item
				label="联系人"
				prop="userInfoName"
				borderBottom
				ref="item1"
			>
				<u-input
					v-model="model.userInfoName"
					border="none"
				></u-input>
			</u-form-item>
			
			<u-form-item
				label="联系电话"
				prop="telephone"
				borderBottom
				ref="item1"
			>
				<u-input
					v-model="model.telephone"
					border="none"
				></u-input>
			</u-form-item>
			<u-form-item
				label="微信号"
				prop="weChatId"
				borderBottom
				ref="item1"
			>
				<u-input
					v-model="model.weChatId"
					border="none"
				></u-input>
			</u-form-item>
		</u-form>
	</view>
	<view style="padding: 20px;">
		<u-button type="primary" text="发布"></u-button>
	</view>
  </pageSearch>
</template>
<style lang="less" scoped>
.content-main{
	padding: 0 10px;
}
</style>
