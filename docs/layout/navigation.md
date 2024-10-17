# 导航

用于页面内导航。

## 基础用法

```vue
<script setup lang="ts">
const data = [
  {
    label: "Poppin' Party",
    url: ""
  },
  {
    label: "Roselia",
    url: ""
  },
  {
    label: "Mygo!!!!!",
    url: ""
  },

]
</script>

<template>
  <div class="navbar-container">
    <h2 class="title-2">navbar</h2>
    <div class="navbar">
      <h3 class="title-3">Horizontal</h3>
      <doki-navbar :navs="data"/>

    </div>

    <div class="navbar">
      <h3 class="title-3">Vertical</h3>
      <doki-navbar :navs="data" type="vertical"/>
    </div>
  </div>
</template>
```

## API

| API  |          类型          |   用途   |
| :--: | :--------------------: | :------: |
| navs |         Array          | 导航内容 |
| type | horizontal \| veritcal | 导航样式 |