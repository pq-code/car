<script setup>
import { ref } from "vue";
import page from "../../components/pages/page.vue";

const loading = ref(false);
const textContent = ref();
const fileList = ref([]);

const addDiaryFn = () => {
  loading.value = true;
  loading.value = false;
};

const uploadFilePromise = (url) => {
  return new Promise((resolve, reject) => {
    let a = uni.uploadFile({
      url: "http://localhost:3005/weixin/xcx/upload", // 仅为示例，非真实的接口地址
      filePath: url,
      name: "file",
      header: {
        Authorization: uni.getStorageSync("kxzc-token"),
      },
      formData: {
        user: "test",
      },
      success: (res) => {
        resolve(JSON.parse(res.data).result.imagePath);
      },
    });
  });
};

// 删除图片
const deletePic = (event) => {
  fileList.value.splice(event.index, 1);
};

// 新增图片
const afterRead = async (event) => {
  let lists = [].concat(event.file);
  let fileListLen = fileList.value.length;
  lists.map((item) => {
    fileList.value.push({
      ...item,
      status: "uploading",
      message: "上传中",
    });
  });
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url);
    let item = fileList.value[fileListLen];
    fileList.value.splice(
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
</script>
<template>
  <page title="添加日记">
    <view class="addDiary-center">
      <view class="content-main">
        <u-upload
          :fileList="fileList"
          @afterRead="afterRead"
          @delete="deletePic"
          name="1"
          multiple
          :maxCount="3"
        ></u-upload>
        <view class="content-main-li">
          <view class="title">添加内容</view>
          <u--textarea
            v-model="textContent"
            placeholder="请输入内容"
          ></u--textarea>
        </view>
      </view>
      <view class="addDiary-center-bottom">
        <u-button
          style="width: 100%"
          shape="circle"
          type="primary"
          text="确定"
          @click="addDiaryFn()"
        ></u-button>
      </view>
    </view>
  </page>
  <u-loading-page :loading="loading"></u-loading-page>
</template>
<style lang="less" scoped>
.addDiary-center {
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
    ::v-deep .u-upload__wrap {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
      &image {
        width: 100%;
        height: 100px;
      }
      #view {
        width: 100%;
        height: 100px;
      }
      .u-upload__wrap__preview {
        margin: none;
        height: 100px;
        &image {
          width: 100%;
          height: 100px;
        }
      }
    }

    .content-main-li {
      margin: 10px 0;
    }
  }
  .addDiary-center-bottom {
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
