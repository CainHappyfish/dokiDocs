# 手风琴

像手风琴那样展示数据。

> 注意与手风琴选择器不同

## 基础用法

```vue
<doki-accordion>
  <doki-accordion-item v-for="pic in pics" :key="pic">
    <img :src="pic" alt="pic" class="accordion-preview" />
  </doki-accordion-item>
</doki-accordion>
```

## slots

|  slots  |          类型          |
| :-----: | :--------------------: |
| default | 指定手风琴数据展示样式 |