# 标签

如题。

## 基础用法

```vue
<div class="tags">
  <doki-tag>default</doki-tag>
  <doki-tag type="primary">primary</doki-tag>
  <doki-tag type="success">success</doki-tag>
  <doki-tag type="warning">warning</doki-tag>
  <doki-tag type="danger">danger</doki-tag>
</div>

<div class="tags">
  <doki-tag closable>default</doki-tag>
  <doki-tag type="primary" closable>primary</doki-tag>
  <doki-tag type="success" closable>success</doki-tag>
  <doki-tag type="warning" closable>warning</doki-tag>
  <doki-tag type="danger" closable>danger</doki-tag>
</div>
```

## API

|   API    |  类型  |      用途      |
| :------: | :----: | :------------: |
|   type   | string |    指定种类    |
| closable |   -    | 开启可关闭标签 |



