# 手风琴选择器

像手风琴一样展示选择。

## 基础用法

```vue
<doki-accordion-selector :data="test">hello </doki-accordion-selector>

<script setup lang="ts">
const test = [
  {
    value: "凑友希那",
    label: "yukina",
    content: "目指すのは頂点、ただひとつよ。",
  },
  {
    value: "冰川纱夜",
    label: "sayo",
    content: "像正式演出那样练习，像练习那样正式演出。",
  },
  {
    value: "今井莉莎",
    label: "lisa",
    content: "陽だまりロードナイト",
  },
  {
    value: "宇田川亚子",
    label: "ako",
    content: "引起黑暗波动略黑的堕天使!",
  },
  {
    value: "白金燐子",
    label: "rinko",
    content: "我……真的可以吗？",
  },
]
</script>
```

## API

| API  | 类型  |     用途     |
| :--: | :---: | :----------: |
| data | Array | 指定展示数据 |