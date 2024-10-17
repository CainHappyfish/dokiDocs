# 复选框

用于同时选择多个选项。

## 基础用法

```vue
<div class="selector">
  <doki-checkbox value="ksm" label="ksm"></doki-checkbox>
  <doki-checkbox value="ykn" label="ykn"></doki-checkbox>
</div>
<div class="selector">
  <doki-checkbox value="enabled" label="enabled"></doki-checkbox>
  <doki-checkbox value="disabled" label="checkbox disabled"></doki-checkbox>
</div>
```

## API

|   API    |       类型       |     用途     |
| :------: | :--------------: | :----------: |
|  value   | string \| number | 选中状态的值 |
|  label   |      string      |  复选框标签  |
| disabled |        -         |     禁用     |

