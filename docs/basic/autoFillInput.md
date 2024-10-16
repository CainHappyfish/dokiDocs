# 自动填充输入框

点击输入框，提示可以输入什么。

## 基础用法

```vue
<h3 class="title-3">All Tags</h3>
<doki-auto-fill-input type="all" :autocomplete="data"/>
<h3 class="title-3">Matched Tags</h3>
<doki-auto-fill-input type="match" :autocomplete="data"/>
```

## API

|     API      |  类型  |      用途      |
| :----------: | :----: | :------------: |
|     type     | string | 指定输入框种类 |
| autocomplete |   -    |    提示数据    |

