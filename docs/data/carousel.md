# 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法

```vue
<doki-carousel>
  <doki-carousel-item v-for="item in 6" :key="item">
    <h2 class="carousel-preview">{{ item }}</h2>
  </doki-carousel-item>
</doki-carousel>
```

## slots

|  slots  |         类型         |
| :-----: | :------------------: |
| default | 指定轮播数据展示样式 |

~~自动循环播放忘记写了，下次一定s~~

