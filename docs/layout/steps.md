# 步骤条

用于提示用户某一过程的具体步骤。

## 基础用法

```vue
<script setup lang="ts">
import {ref} from "vue";

const active = ref(0)

const onClick = () => {
  active.value = active.value + 1
}
</script>

<template>
  <div class="steps-container">
    <h2 class="title-2">steps</h2>
    <div class="steps">
      <h3 class="title-3">Horizontal</h3>
      <doki-steps :active="active">
        <doki-step title="Step 1" description="description 1"/>
        <doki-step title="Step 2" description="description 2"/>
        <doki-step title="Step 3" description="description 3"/>
      </doki-steps>
    </div>

    <div class="steps">
      <h3 class="title-3">Vertical</h3>
      <doki-steps :active="active" type="vertical">
        <doki-step title="Step 1" description="description 1"/>
        <doki-step title="Step 2" description="description 2"/>
        <doki-step title="Step 3" description="description 3"/>
      </doki-steps>

      <doki-button type="primary" @click="onClick"> next </doki-button>
    </div>
  </div>
</template>
```

## API

`doki-steps`

|  API   |          类型          |        用途        |
| :----: | :--------------------: | :----------------: |
| active |         number         | 当前完成的步骤索引 |
|  type  | horizontal \| vertical |   指定步骤条方向   |

`doki-step`

|     API     |  类型  |     用途     |
| :---------: | :----: | :----------: |
|    title    | string | 当前步骤标题 |
| description | string | 当前步骤描述 |