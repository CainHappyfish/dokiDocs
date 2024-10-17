# 卡片

用于以卡片形式展示数据。

## 基础用法

``` vue
<doki-card>
  <template #header>
    Card Header
  </template>
  <template #body>
    <p v-for="num in 5"> Card Item {{ num }}</p>
  </template>
  <template #footer>
    <p>Card Footer</p>
  </template>
</doki-card>
```

## 简易卡片

可以只使用`body`插槽。

```vue
<doki-card>
  <template #body>
    <p v-for="num in 5"> Card Item {{ num }}</p>
  </template>
</doki-card>
```

## 阴影

用`shadow`属性指定阴影触发类型。

```vue
<div class="card-shadow">
    <doki-card shadow="always">
        <template #header>
          always
        </template>
      </doki-card>
    </div>

    <div class="card-shadow">
      <doki-card shadow="hover">
        <template #header>
          hover
        </template>
      </doki-card>
    </div>

    <div class="card-shadow">
      <doki-card shadow="never">
        <template #header>
          never
        </template>
      </doki-card>
    </div>
</div>
```

## API

|  API   |  类型  |       用途       |
| :----: | :----: | :--------------: |
| shadow | string | 指定阴影展示种类 |

## slots

| slots  |     类型     |
| :----: | :----------: |
| header | 卡片头部内容 |
|  body  | 卡片主要内容 |
| footer | 卡片底部内容 |
