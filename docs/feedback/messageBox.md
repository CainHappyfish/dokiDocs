# 消息弹出框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。本质是对原生`alert, confirm, prompt `的替代。

## 基本用法

```vue
<script setup lang="ts">
import dokiMessagebox from "doki-ui/dist/doki-ui.js"
import dokiMessage from "doki-ui/dist/doki-ui.js"

const clickAlert = () => {
  dokiMessagebox.alert("Info", "This is a info", {
    confirmButtonText: "OK",
  })
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })

}

const clickConfirm = () => {
  dokiMessagebox.confirm("confirm", "你确定要继续吗？")
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })
      .catch(() => {
        dokiMessage({
          type: "info",
          message: "cancel"
        })
      });
}

const clickPrompt = () => {
  dokiMessagebox.prompt("Input", "Input a number:")
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })
      .catch(() => {
        dokiMessage({
          type: "info",
          message: "cancel"
        })
      });
}
</script>

<template>
  <div class="messagebox-container">
    <h2 class="title-2">messagebox</h2>

    <div class="message">
      <h3 class="title-3">Alert Messagebox</h3>
      <doki-button @click="clickAlert">alert</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Confirm Messagebox</h3>
      <doki-button @click="clickConfirm">confirm</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Prompt Messagebox</h3>
      <doki-button @click="clickPrompt">prompt</doki-button>
    </div>
  </div>
</template>

```

## API

|           API            |                           类型                            |             用途              |
| :----------------------: | :-------------------------------------------------------: | :---------------------------: |
|          title           |                          string                           |             标题              |
|         message          |                          string                           |            可见性             |
|           type           | 'default' \| 'success' \| 'info' \| 'warning' \| 'danger' |             类型              |
|           icon           |                          string                           |             图标              |
| dangerouslyUseHTMLString |                          boolean                          |       关闭危险HTML渲染        |
|          center          |                          boolean                          |           是否居中            |
|     cancelButtonText     |                          string                           |         取消按钮文本          |
|    confirmButtonText     |                          string                           |         确认按钮文本          |
|      rejectCallback      |                         Function                          | reject回调，用于取消操作处理  |
|     resolveCallback      |                         Function                          | resolve回调，用于确认操作处理 |