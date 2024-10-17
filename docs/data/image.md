# 图像

用于展示图像。

## 基础用法

```vue

  <doki-image size="small" :src="testImg1"/>
  <doki-image size="natural" :src="testImg1"/>
  <doki-image size="medium" :src="testImg1"/>
  <doki-image size="large" :src="testImg1"/>



  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
  <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
```

## API

|      API       |  类型  |     用途     |
| :------------: | :----: | :----------: |
|      src       | string | 指定图片URL  |
|      size      | number |   指定大小   |
| weight, height | number | 指定具体尺寸 |
|      lazy      |   -    |  开启懒加载  |
