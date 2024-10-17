# 提示

如题。

## 基础用法

```vue
<doki-alert>default</doki-alert>
<doki-alert type="info">info</doki-alert>
<doki-alert type="success">success</doki-alert>
<doki-alert type="warning">warning</doki-alert>
<doki-alert type="danger">danger</doki-alert>
```

## 图标和描述

使用`icon`和`description`添加图标和描述。

```vue
<doki-alert icon>
    default
    <template #description>description</template>
</doki-alert>

<doki-alert type="info" icon>
    info
    <template #description>description</template>
</doki-alert>

<doki-alert type="success" icon>
    success
    <template #description>description</template>
</doki-alert>

<doki-alert type="warning" icon>
    warning
    <template #description>description</template>
</doki-alert>

<doki-alert type="danger" icon>
    danger
    <template #description>description</template>
</doki-alert>
```

## API

| API  |  类型  |     用途     |
| :--: | :----: | :----------: |
| type | string | 指定提示类型 |
| icon |   -    |   开启图标   |
