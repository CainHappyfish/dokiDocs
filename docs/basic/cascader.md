# 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基础用法

```vue
<script setup lang="ts">
import {cascaderOption} from "../types";

const previewData: cascaderOption[] =
 [{
    label: "Poppin' Party",
    value: "Poppin' Party",
    hasChildren: true,
    children: [
      {
        label: "ksm",
        value: "ksm",
        children: [
          {
            label: "kirakira",
            value: "kirakira"
          }
        ]
      },
      {
        label: 'ars',
        value: 'ars'
      },
      {
        label: 'otae',
        value: 'otae'
      },
      {
        label: 'rimi',
        value: 'rimi'
      },
      {
        label: 'saya',
        value: 'saya'
      }
    ]
  },
  {
    label: 'Roselia',
    value: 'Roselia',
    hasChildren: true,
    children: [
      {
        label: "ykn",
        value: "ykn"
      },
      {
        label: "lisa",
        value: "lisa"
      },
      {
        label: "ako",
        value: "ako"
      },
      {
        label: "sayo",
        value: "sayo"
      },
      {
        label: "rinrin",
        value: "rinrin"
      }
    ]
}]



</script>

<template>
	<doki-cascader :options="previewData"></doki-cascader>
</template>
```

注意这里数据结构与示例代码相似即可

## API

|   API   | 类型  |   用途   |
| :-----: | :---: | :------: |
| options | Array | 指定数据 |
