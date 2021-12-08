# Layx v3.x 版本开发中，[v3.x 预览地址](https://monksoul.gitee.io/layx/dist/)

# [v3.x 进度](https://gitee.com/monksoul/LayX/issues/IRK3V)

# [v3.x 项目地址](https://gitee.com/monksoul/LayX/tree/dev/)

![输入图片说明](https://images.gitee.com/uploads/images/2019/0226/200029_9516065b_974299.png "Layx v3.x Final 2 (1).png")

# 序言

Layx 新一代Web弹窗组件。

gzip压缩版仅 `13.5kb`，非常小巧。

## 信息

- `原创作者`：百小僧
- `开源协议`：MIT
- `当前版本`：v2.5.4
- `发布日期`：2018.11.03

# 特性

- 纯原生Javascript实现，不依赖任何第三方框架
- 支持IE10+（含IE10）、Chrome、Firefox、Opera、Edge、Safari等主流浏览器
- 支持多种窗口类型：文本窗口，页面窗口，窗口组，提示窗口，消息窗口，询问窗口，输入窗口，加载窗口、浮动窗口、置顶窗口、倒计时窗口、只读窗口
- 支持窗口最大化、最小化、恢复、置顶、关闭、调试、双击控制及事件监听
- 支持窗口阻隔、窗口闪烁功能
- 支持窗口点击标题获取焦点、点击内容/页面获取焦点
- 支持窗口图标定制、操作按钮定制
- 支持窗口四个方向拖动及方向控制
- 支持窗口八个方向拖曳大小及拖曳方向控制
- 支持窗口自动获取页面标题
- 支持窗口位置记录及恢复
- 支持窗口相互通讯
- 支持窗口设定自动关闭
- 支持窗口外观控制、状态栏、透明度控制
- 支持窗口操作拦截器、可以拦截任何不正常操作
- 支持窗口初始化位置、宽高度、最小化宽高度控制
- 支持窗口加载文字控制
- 支持窗口滚动条智能判断
- 支持窗口最小化统一管理
- 支持窗口位置记录保存
- 支持 `ESC` 快捷键退出窗口
- 支持自定义皮肤，设置任何您想要的外观
- **支持触摸屏手势拖曳、拖动**


# 使用

第一步：引入 layx.css / layx.min.css

```
<link href="layx.min.css" rel="stylesheet" type="text/css" />
```

第二步：引入 layx.js / layx.min.js

```
<script src="layx.min.js" type="text/javascript"></script>
```

第三步：打开一个窗口试试

```
layx.html('str','字符串文本','Hello Layx!');
```

![输入图片说明](https://images.gitee.com/uploads/images/2018/0929/130813_69a61025_974299.png "layx2.png")

[查看更多示例](http://layx.baiqian.ltd)
