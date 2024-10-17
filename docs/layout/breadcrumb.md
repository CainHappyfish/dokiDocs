# 面包屑

用于页面间导航。

## 基础用法

可以使用`separator`指定分割符。

```vue
<doki-breadcrumb :items="data" :separator="icon"/>

<script setup lang="ts">
import icon from "./public/separator.svg"

const data = [
  {
    label: "Poppin' Party",
    url: "https://mzh.moegirl.org.cn/Poppin%27Party"
  },
  {
    label: "户山香澄",
    url: "https://mzh.moegirl.org.cn/%E6%88%B7%E5%B1%B1%E9%A6%99%E6%BE%84"
  },
  {
    label: "简介",
  }
]
</script>
```

## API

|    API    |  类型  |              用途              |
| :-------: | :----: | :----------------------------: |
|   items   | Array  | 指定页面导航，以数组索引为顺序 |
| separator | string |           分隔符URL            |