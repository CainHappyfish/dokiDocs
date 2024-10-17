# 下拉菜单

如题

## 基础用法

```vue
<doki-dropdown>
    <template #trigger>
      <div class="dropdown-trigger">
        Dropdown List
        <img :src="downIcon" alt="dropdown">
      </div>

    </template>

    <template #menu>
      <doki-dropdown-item> item 1</doki-dropdown-item>
      <doki-dropdown-item> item 2</doki-dropdown-item>
      <doki-dropdown-item> item 3</doki-dropdown-item>
      <doki-dropdown-item> item 4</doki-dropdown-item>
      <doki-dropdown-item disabled> item 5</doki-dropdown-item>
    </template>

</doki-dropdown>
```

## API

`doki-dropdown-item`

|   API    | 类型 | 用途 |
| :------: | :--: | :--: |
| disabled |  -   | 禁用 |

## slots

|  slots  |           类型           |
| :-----: | :----------------------: |
| trigger | 用于指定打开菜单元素样式 |
|  menu   |       菜单具体内容       |