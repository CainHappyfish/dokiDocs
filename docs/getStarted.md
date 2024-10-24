# 快速上手

目前组件库第一版还不是很完善，使用时相关bug请提交issues。

## 安装

```bash
# 本体
npm install -S doki-ui
```

在Vue项目文件`main.ts`中：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import DokiUI from "doki-ui"
import "doki-ui/style.css"

createApp(App).use(DokiUI).mount('#app')
```

然后就可以正常使用了：

```vue
<script setup lang="ts">
  import {dokiMessage, dokiMessagebox} from "doki-ui";


  const onClick = () => {
    dokiMessagebox.confirm("Info", "This is a info", {
      confirmButtonText: "OK",
    })
        .then(() => {
          dokiMessage({
            type: "info",
            message: "confirm"
          })
        })
  }
</script>

<template>
  <doki-button @click="onClick">button</doki-button>
  <doki-button type="info" @click="onClick">button</doki-button>
  <doki-button type="success" @click="onClick">button</doki-button>
  <doki-button type="warning" @click="onClick">button</doki-button>
  <doki-button type="danger" @click="onClick">button</doki-button>
  <doki-input />
  <doki-link type="danger"/>
  <doki-tag>tag</doki-tag>
  <doki-alert>ALERT</doki-alert>
</template>

<style scoped>

</style>

```

部分预览：

![](https://pic.imgdb.cn/item/670fe8f2d29ded1a8c71cf76.png)