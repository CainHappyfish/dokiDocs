# 分页器

用于对大量数据进行分页展示。

## 基础用法

```vue
<script setup lang="ts">
import {computed, ref} from "vue";

const page = ref(1)
const handlePageChange = (pageIndex: number) => {
  page.value = pageIndex
}

const data = ref(Array(600))
for (let i = 0; i < 600; i++) {
  data.value[i] = i + 1
}

const preview = computed(() => data.value.slice((page.value - 1) * 6 , (page.value - 1) * 6 + 6))
</script>

<template>
  <div class="pagination-container">
   
    <div class="preview-data-container">
      <div class="preview-data" v-for="item in preview">{{ item }}</div>
    </div>
    <doki-pagination visible="5" total="600" perPage="6" @currentPage="handlePageChange"/>
    <doki-pagination visible="5" total="30" perPage="6"/>

  </div>
</template>
```

## 可跳转

添加`jumpable`标签开启跳转功能。

```vue
<doki-pagination visible="5" total="600" perPage="6" @currentPage="handlePageChange" jumpable/>
<doki-pagination visible="5" total="30" perPage="6" jumpable/>
```

## API

|     API      |   类型   |         用途         |
| :----------: | :------: | :------------------: |
|   visible    |  number  | 指定可见的分页器标签 |
|    total     |  number  |       数据总量       |
|   perPage    |  number  |  每页展示的数据数量  |
|   jumpable   |    -     |      可进行跳转      |
| @currentPage | Function |       数据处理       |