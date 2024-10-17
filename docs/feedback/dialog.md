# 对话框

用于与用户进行交互。

## 基础用法

```vue
<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)

const click = () => {
  visible.value = true
}
</script>

<template>
  <div class="dialog-container">
    <h2 class="title-2">dialog</h2>
    <div class="dialog">
      <h3 class="title-3">Default Dialog</h3>
      <doki-button @click="click">dialog</doki-button>
      <doki-dialog v-model="visible">
        <template #header>info</template>
        <template #content>This is a message.</template>
      </doki-dialog>
    </div>

  </div>
</template>
```

## API

|        API        |  类型   |  用途  |
| :---------------: | :-----: | :----: |
| v-model="visible" | boolean | 可见性 |

## slots

|  slots  |    类型    |
| :-----: | :--------: |
| header  | 对话框头部 |
| content | 对话框内容 |
