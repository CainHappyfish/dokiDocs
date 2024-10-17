# 消息

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

```vue
<script setup lang="ts">
import dokiMessage from "doki-ui/dist/doki-ui.js"
import { h } from 'vue'
const clickDefault = () => {
  dokiMessage({
    message: "This is doki message",
  })
}

const clickInfo = () => {
  dokiMessage({
    message: "This is info message",
    type: "info",
  })
}

const clickSuccess = () => {
  dokiMessage({
    message: "This is success message",
    type: "success",
  })
}

const clickWarning = () => {
  dokiMessage({
    message: "This is warning message",
    type: "warning",
  })
}

const clickDanger = () => {
  dokiMessage({
    message: "This is danger message",
    type: "danger",
  })
}
</script>

<template>
  <div class="message-container">
    <div class="message">
      <doki-button @click="clickDefault">default</doki-button>
      <doki-button @click="clickInfo" type="info">info</doki-button>
      <doki-button @click="clickSuccess" type="success">success</doki-button>
      <doki-button @click="clickWarning" type="warning">warning</doki-button>
      <doki-button @click="clickDanger" type="danger">danger</doki-button>
    </div>
  </div>
</template>

```

## VNode和HTML

支持渲染VNode和HTML。

```vue
<script setup lang="ts">
import dokiMessage from "doki-ui/dist/doki-ui.js/methods.ts"
import { h } from 'vue'

const clickVNode = () => {
  dokiMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const clickHTML = () => {
  dokiMessage({
    dangerouslyUseHTMLString: false,
    message: '<strong>This is safe <i>HTML</i> string</strong>',
  })
}

const clickDangerHTML = () => {
  dokiMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is dangerous <i>HTML</i> string</strong>',
    type: "danger",
  })
}

</script>

<template>
  <div class="message-container">
    <div class="message">
      <h3 class="title-3">VNode</h3>
      <doki-button @click="clickVNode">Vnode</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">HTML</h3>
      <doki-button @click="clickHTML">safe</doki-button>
      <doki-button @click="clickDangerHTML">dangerous</doki-button>
    </div>
  </div>
</template>

```

## 可关闭和居中

添加`closable`和`center`属性即可。

```ts
const clickCenter = () => {
  dokiMessage({
    message: "This is doki message",
    center: true,
  })
}

const clickClosable = () => {
  dokiMessage({
    message: "This is doki message",
    showClose: true,
    duration: 100000,
  })
}
```

## API

|           API            |                           类型                            |       用途       |
| :----------------------: | :-------------------------------------------------------: | :--------------: |
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