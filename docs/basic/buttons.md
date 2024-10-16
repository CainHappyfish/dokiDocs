# 按钮

各种各样的按钮。

## 基础用法

```vue
<doki-button type="primary">primary</doki-button>
<doki-button type="success">success</doki-button>
<doki-button type="info">info</doki-button>
<doki-button type="warning">warning</doki-button>
<doki-button type="danger">danger</doki-button>
```

## 各种样式

```vue
<div class="buttons plain-buttons">
      <doki-button shape="plain">default</doki-button>
      <doki-button type="primary" shape="plain">primary</doki-button>
      <doki-button type="success" shape="plain">success</doki-button>
      <doki-button type="info" shape="plain">info</doki-button>
      <doki-button type="warning" shape="plain">warning</doki-button>
      <doki-button type="danger" shape="plain">danger</doki-button>
    </div>

    <div class="buttons round-buttons">
      <doki-button shape="round">default</doki-button>
      <doki-button type="primary" shape="round">primary</doki-button>
      <doki-button type="success" shape="round">success</doki-button>
      <doki-button type="info" shape="round">info</doki-button>
      <doki-button type="warning" shape="round">warning</doki-button>
      <doki-button type="danger" shape="round">danger</doki-button>
    </div>

    <div class="buttons circle-buttons">
      <doki-button shape="circle"><img :src="search" class="logo" alt="search"></doki-button>
      <doki-button type="primary" shape="circle"><img :src="primary" class="logo" alt="primary"></doki-button>
      <doki-button type="success" shape="circle"><img :src="success" class="logo" alt="success"></doki-button>
      <doki-button type="info" shape="circle"><img :src="info" class="logo" alt="info"></doki-button>
      <doki-button type="warning" shape="circle"><img :src="warning" class="logo" alt="warning"></doki-button>
      <doki-button type="danger" shape="circle"><img :src="danger" class="logo" alt="danger"></doki-button>
    </div>
```

## API

|   API    |  类型  |     用途     |
| :------: | :----: | :----------: |
|   type   | string | 指定按钮种类 |
|  shape   | string | 指定按钮样式 |
| disabled |   -    |   禁用按钮   |

