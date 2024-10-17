# 头像

用于展示头像。

## 基础用法

```vue
<div class="circle-avatars">
    <doki-avatar />
    <doki-avatar size="80" :src="imgURL"/>
    <doki-avatar size="120" :src="imgURL"/>
</div>
<div class="square-avatars">
    <doki-avatar shape="square" :src="imgURL"/>
    <doki-avatar size="80" shape="square" :src="imgURL"/>
    <doki-avatar size="120" shape="square" :src="imgURL"/>
</div>
```

## API

|  API  |  类型  |    用途     |
| :---: | :----: | :---------: |
|  src  | string | 头像图片URL |
| shape | string |  指定形状   |
| size  | number |  指定大小   |

