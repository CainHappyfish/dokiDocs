# 进度条

用于展示某一进程的进度。

## 基础用法

```vue
<doki-progress :percentage="50"/>
<doki-progress :percentage="100"/>
<doki-progress :percentage="100" status="success"/>
<doki-progress :percentage="80" status="warning"/>
<doki-progress :percentage="20" status="fail"/>
```

## 内置文字

添加`inner`标签，文字则在进度条内部展示。

```vue
<doki-progress :percentage="50" inner/>
<doki-progress :percentage="100" inner/>
<doki-progress :percentage="100" status="success" inner/>
<doki-progress :percentage="80" status="warning" inner/>
<doki-progress :percentage="20" status="fail" inner/>
```

## API

|    API     |            类型            |         用途         |
| :--------: | :------------------------: | :------------------: |
| percentage |           number           |    指定进度百分比    |
|   status   | success \| warning \| fail |     指定当前状态     |
|   inner    |             -              | 开启进度文字内部展示 |
