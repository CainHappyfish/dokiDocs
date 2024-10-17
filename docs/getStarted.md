# 快速上手

目前组件库第一版还不是很完善，使用时相关bug请提交issues。

## 安装

```bash
# 本体
npm install -D doki-ui
# 依赖
npm install -D @vitejs/plugin-vue axios sass typescript vite vite-plugin-dts vue-tsc
```

在Vue项目文件`main.ts`中：

```typescript
  import { createApp } from 'vue'
  // import './style.css'
  import App from './App.vue'
  import DokiUI from "doki-ui/dist/doki-ui.js"
  import "doki-ui/dist/style.css"
  import "doki-ui/src/styles/index.scss"
  
  createApp(App).use(DokiUI).mount('#app')
```

使用样例可以在`app.vue`中添加`preview`组件：

```vue
<script setup lang="ts">
  import preview from "doki-ui/src/preview.vue"
</script>

<template>
  <preview />

</template>

<style scoped>

</style>
```

然后运行你的项目， 就可以看到预览界面了：

![](https://pic.imgdb.cn/item/670fe8f2d29ded1a8c71cf76.png)