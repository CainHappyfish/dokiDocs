# 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

用法与`doki-message`类似。

```vue
<script setup lang="ts">
import dokiNotification from "../components/notification/methods.ts"

const clickDefault = () => {
  dokiNotification({
    message: "This is a doki notification",
  })
}

const clickInfo = () => {
  dokiNotification({
    type: "info",
    title: "Info",
    message: "This is a info notification",
  })
}

const clickSuccess = () => {
  dokiNotification({
    type: "success",
    title: "Success",
    message: "This is a success notification",
  })
}

const clickWarning = () => {
  dokiNotification({
    type: "warning",
    title: "Warning",
    message: "This is a warning notification",
  })
}

const clickDanger = () => {
  dokiNotification({
    type: "danger",
    title: "Danger",
    message: "This is a danger notification",
  })
}

</script>

<template>
  <div class="notification-container">
    <h2 class="title-2">notification</h2>
    <div class="notification">
      <h3 class="title-3">Default notification</h3>
      <doki-button @click="clickDefault">notification</doki-button>
    </div>

    <div class="notification">
      <h3 class="title-3">Types</h3>
      <doki-button @click="clickDefault">default</doki-button>
      <doki-button @click="clickInfo" type="info">info</doki-button>
      <doki-button @click="clickSuccess" type="success">success</doki-button>
      <doki-button @click="clickWarning" type="warning">warning</doki-button>
      <doki-button @click="clickDanger" type="danger">danger</doki-button>
    </div>

  </div>
</template>
```

## API

|           API            |                           类型                            |       用途       |
| :----------------------: | :-------------------------------------------------------: | :--------------: |
|          title           |                          string                           |       标题       |
|         message          |                          string                           |      可见性      |
|           type           | 'default' \| 'success' \| 'info' \| 'warning' \| 'danger' |       类型       |
|           icon           |                          string                           |       图标       |
| dangerouslyUseHTMLString |                          boolean                          | 关闭危险HTML渲染 |
|         duration         |                          number                           |     持续时间     |
|          center          |                          boolean                          |     是否居中     |
|        showClose         |                          boolean                          |    是否可关闭    |
|          offset          |                          number                           | 距离页面顶部偏移 |
|            id            |                          string                           |       如题       |
|         onClose          |                         Function                          |    关闭时回调    |
|        onDestroy         |                         Function                          |    销毁时回调    |
