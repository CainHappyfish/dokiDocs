# 分割线

用于分割内容。

## 基础用法

```vue
<span>“我很不习惯别人向我表达好感。我只想专注于音乐。”</span>
      <doki-divider />
      <span>Roselia乐队的主唱兼领队，同时也是乐队的作词作曲人。作曲卡壳的解决方法是在周围撒一圈小零食然后平躺下来祈祷。</span>
```

## 垂直分割线

添加`vertical`属性启用垂直分割线。

```vue
<div class="vertical">
        <span>“我很不习惯别人向我表达好感。我只想专注于音乐。”</span>
        <doki-divider type="vertical" />
        <span>Roselia乐队的主唱兼领队，同时也是乐队的作词作曲人。作曲卡壳的解决方法是在周围撒一圈小零食然后平躺下来祈祷。</span>

</div>

<style>
.vertical {
  display: flex;
  align-items: center;
  width: 400px;
  height: 200px;
  span {
    width: 40%;
  };

}</style>
```

## 标签位置

使用`position`指定标签位置，默认为`center`

```vue
<doki-divider>center</doki-divider>
<doki-divider contentPosition="left">left</doki-divider>
<doki-divider contentPosition="right">right</doki-divider>
```

## 分割线样式

使用`dividerStyle`指定样式。

```vue
<doki-divider />
<doki-divider dividerStyle="dashed"/>
<doki-divider dividerStyle="dotted"/>
```

## API

|     API      |          类型           |      用途      |
| :----------: | :---------------------: | :------------: |
|     type     |         string          | 指定分割线方向 |
|   position   | center \| left \| right |  指定标签位置  |
| dividerStyle |         string          | 指定分割线样式 |