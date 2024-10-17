## 输入框

用于表单数据输入。

## 基础用法

```vue
<doki-input placeholder="" :input-id="previewID"/>
```

## 密码框

```vue
<doki-input type="password" placeholder="Please enter your password" :input-id="previewID" />
```

## 文本区域

```vue
<doki-input :input-id="previewID" textarea />
```

## API

|     API     |       类型       |       用途       |
| :---------: | :--------------: | :--------------: |
|    type     |      string      |  指定输入框种类  |
| placeholder | string \| number |   指定占位内容   |
|  input-id   |      string      | 指定输入框标识符 |
|  textarea   |        -         |     文本区域     |