# 文件上传

用于文件上传。

## 基础用法

```vue
<doki-upload multiple>
    <template #trigger>
      <doki-button type="primary"><span>Upload</span></doki-button>
    </template>
</doki-upload>
```

## 示例

```vue
<script setup lang="ts">

import DokiUpload from "../components/upload/dokiUpload.vue";

import addIcon from "./public/add.svg"
import dokiMessage from "../components/message/methods.ts";

const beforeAvatarUpload = (rawFile: File) => {
  if (!rawFile) {
    dokiMessage({
      type: "warning",
      message: "Invalid file.",
    })
  }

  if (rawFile.type !== 'image/jpeg') {
    dokiMessage({
      type: "warning",
      message: "Avatar picture must be JPG format!"
    })
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    dokiMessage({
      type: "warning",
      message: "Avatar picture size can not exceed 2MB!"
    })
    return false
  }
  return true
}

const handleAvatarSuccess = (
    response: any,
    uploadFile: File
) => {
  // console.log(uploadFile)
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  dokiMessage({
    type: "success",
    message: "Image processing required."
  })
}

</script>

<template>
    <div class="upload">
      <doki-upload
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess"
      >
        <template #trigger>
          <div class="avatar-container">
            <img :src="addIcon" alt="add">
          </div>
        </template>

      </doki-upload>
      
    </div>
  </div>
</template>

<style scoped>
.upload {
  margin: 10px 0;
}

.avatar-container {
  width: 150px;
  height: 150px;

  border: 2px dashed #BBBBBB;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s linear;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: 2px dashed #44DDFF;
  }
}

</style>
```

## API

|     API      |                 类型                  |               用途               |
| :----------: | :-----------------------------------: | :------------------------------: |
| beforeUpload |      (rawFile: File) => boolean       | 文件上传前钩子，可用于文件限制等 |
|  onProgress  |        (rawFile: File) => any         |          文件上传时钩子          |
|  onSuccess   | (response: any, rawFile: File) => any |           上传成功钩子           |
|    onFail    |   (e: Error, rawFile: File) => any    |           上传失败钩子           |
|   onDelete   |        (rawFile: File) => any         |           删除文件钩子           |