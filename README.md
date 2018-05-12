> Layx 网页弹窗最佳选择.

![输入图片说明](https://gitee.com/uploads/images/2018/0512/233240_d215028a_974299.png "layx.png")

# 序言

Layx 诞生于一次C/S架构系统往B/S架构系统迁移项目中。起初，我们想在B/S架构上实现类C/S架构窗口功能，但百度、谷歌过后依然没能找到合适的Javascript插件。于是乎在2018年05月01日五一劳动节期间连夜赶工创造出了 Layx 。

目前 Layx 拥有和C/S架构一样灵活的操作方式，支持网页多窗口、多任务协同操作，支持窗口各种事件。

## 信息

- `原创作者`：百小僧
- `开源协议`：MIT
- `当前版本`：v2.0.0
- `发布日期`：2018.05.12
- `交流Q群`：18863883

# 特性

- 纯原生Javascript实现，不依赖任何第三方框架
- 支持IE10+（含IE10）、Chrome、Firefox、Opera、Edge等主流浏览器
- 支持多种窗口类型：`html：文本窗口`，`url：页面窗口`，`alert：提示窗口`，`msg：消息窗口`，`confirm：询问窗口`，`prompt：输入窗口`，`load：加载窗口`
- 支持窗口最大化、最小化、恢复、置顶、关闭控制及事件监听
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
- 支持窗口滚动条自能判断
- 支持窗口最小化统一管理

# 使用

第一步：引入 layx.css / layx.min.css

```
<link href="layx.css" rel="stylesheet" type="text/css" />
```

第二步：引入 layx.js / layx.min.js

```
<script src="layx.js" type="text/javascript"></script>
```

第三步：打开一个窗口试试

```
layx.open({
    id: 'new-window',
    title: 'Layx 网页弹窗最佳选择.',
    content: 'Hello World!'
});
```

![输入图片说明](https://gitee.com/uploads/images/2018/0512/233004_05e32570_974299.png "helloworld.png")

# 示例

[查看更多示例](http://baisoft.gotoip11.com/layx/doc/)

# 参数

- `id`：窗口唯一Id，String 类型。
- `icon`：窗口图标，Boolean 或 String 类型。false：不启用窗口图标，支持 TEXT/HTML 字符串，默认值：空字符串
- `title`：窗口标题，String 类型。支持 TEXT/HTML 字符串，默认值：空字符串
- `width`：窗口初始化宽度，Number 或 百分比字符串 类型。支持 正整数或 百分比（如：`50%`），默认值：800
- `height`：窗口初始化高度，Number 或 百分比字符串 类型。支持 正整数或 百分比（如：`50%`），默认值：600
- `minWidth`：窗口最小宽度，Number 或 百分比字符串 类型。支持 正整数或 百分比（如：`50%`），默认值：100
- `minHeight`：窗口最小高度，Number 或 百分比字符串 类型。支持 正整数或 百分比（如：`50%`），默认值：100
- `position`：窗口初始化位置，Array[Number/Enum，Number/Enum] 或 Enum 类型。Enum 枚举类型有： `ct：浏览器正中间`、`lt：浏览器左上角`、`rt：浏览器右上角`、`lb：浏览器左下角`、`rb：浏览器右下角`、`lc：浏览器左中间`、`tc：浏览器上中间`、`rc：浏览器右中间`、`bc：浏览器下中间`，也支持自定义上边、左边距离，如：`[100,200]`，表示上边距离100px、左边距离200px，还可以更组合配置，如：`[100,'tc']`，表示顶部中间并距离顶部 100px，默认值：ct
- `control`：是否显示控制栏（标题栏），Boolean 类型。默认值：true
- `controlStyle`：控制栏（标题栏）样式，String 类型。支持 `color:#f00;font-size:14px;`，默认值：空字符串 
- `bgColor`：窗口背景颜色，String 类型。支持 css 颜色值，透明颜色为：`transparent`，默认值：#fff
- `shadow`：是否显示窗口阴影，Boolean 类型。默认值：true
- `border`：窗口边框，Boolean 或 String 类型。false：不启用边框，默认值：1px solid #3baced
- `type`：窗口类型，Enum 类型。Enum枚举类型有：`html：html窗口`、`url：页面窗口`，默认值：html
- `content`：窗口内容，String 或 HTMLElement 类型。`type:'html'`时有效，支持 TEXT/HTML 字符串，同时也支持 HTMLElement 元素对象，默认值：空字符串
- `url`：窗口页面地址，URL 类型， `type:'url'`时有效，默认值：空字符串
- `useFrameTitle`：是否自动获取 iframe 页面标题设置为当前窗口标题，Boolean 类型，**只支持同域页面标题获取**，默认值：false
- `opacity`：窗口透明度，Float 类型，取值：`0~1`，`0：完全不可见`，`0.5：半透明`，`1：可见`，默认值：1
- `shadable`：是否显示窗口阻隔/遮罩，Boolean 类型。true：阻隔非当前窗口的所有操作直至关闭才释放，默认值：false
- `loaddingText`：窗口内容加载中提示符，String 或 HTMLElement 类型。支持 TEXT/HTML 字符串，同时也支持 HTMLElement 元素对象，默认值：内容正在加载中，请稍后...
- `stickMenu`：是否显示置顶按钮，Boolean 类型。默认值：false
- `stickable`：是否允许置顶操作，Boolean 类型。默认值：true
- `minMenu`：是否显示最小化按钮，Boolean 类型。默认值：true
- `minable`：是否允许最小化操作，Boolean 类型。默认值：true
- `maxMenu`：是否显示最大化按钮，Boolean 类型。默认值：true
- `maxable`：是否允许最大化操作，Boolean 类型。默认值：true
- `closeMenu`：是否显示关闭按钮，Boolean 类型。默认值：true
- `closable`：是否允许关闭操作，Boolean 类型。默认值：true
- `restorable`：是否允许恢复操作，Boolean 类型。默认值：true
- `resizable`：是否允许窗口拖曳调整大小，Boolean 类型。默认值：true
- `resizeLimit`：窗口拖曳调整大小方向限制，Object/Class 类型。可选值：
  - `t`：是否限制上边拖曳调整大小，Boolean类型。默认值：false
  - `r`：是否限制右边拖曳调整大小，Boolean类型。默认值：false
  - `b`：是否限制下边拖曳调整大小，Boolean类型。默认值：false
  - `l:`：是否限制左边拖曳调整大小，Boolean类型。默认值：false
  - `lt:`：是否限制左上边拖曳调整大小，Boolean类型。默认值：false
  - `rt:`：是否限制右上边拖曳调整大小，Boolean类型。默认值：false
  - `lb:`：是否限制左下边拖曳调整大小，Boolean类型。默认值：false
  - `rb:`：是否限制右下边拖曳调整大小，Boolean类型。默认值：false
- `movable`：是否允许窗口拖动位置，Boolean 类型。默认值：false
- `moveLimit`：窗口拖动方向、范围限制，Object/Class 类型。可选值：
  - `vertical`：是否禁止垂直拖动，Boolean类型。默认值：false
  - `horizontal`：是否禁止水平拖动，Boolean类型。默认值：false
  - `leftOut`：是否允许窗口拖出浏览器左边可视区域，Boolean类型。默认值：true
  - `rightOut`：是否允许窗口拖出浏览器右边可视区域，Boolean类型。默认值：true
  - `topOut`：是否允许窗口拖出浏览器上边可视区域，Boolean类型。默认值：true，**不管这个值设置为true或false，窗口总时不能拖出浏览器可视区域顶部**
  - `bottomOut`：是否允许窗口拖出浏览器下边可视区域，Boolean类型。默认值：true，**下边拖出时至少露出 15px 的窗口可视区域**
- `autodestroy`：窗口自动关闭时间，Boolean 或 Number 类型。false：不自动关闭，Number 类型时表示 **多少毫秒后关闭**，如：5000，表示5秒后自动关闭窗口，默认值：false
- `autodestroyText`：窗口自动关闭提示文字，Boolean类型。**设置 true 将会在窗口右下脚有倒计时提示**，默认值：true
- `focusable`：窗口是否允许获取焦点，Boolean 类型。窗口获取焦点后会自动显示在顶层，默认值：true，**只支持同域页面获取焦点**
- `alwaysOnTop`：是否总是置顶，Boolean 类型。默认值 true，置顶之后将位于所有窗口之上（同级别除外）
- `allowControlDbclick`：是否允许控制栏双击切换窗口大小，Boolean 类型。默认值：true
- `statusBar`：是否显示窗口状态栏，Boolean 或 String 或 HTMLElement 类型。支持 TEXT/HTML 字符串，同时也支持 HTMLElement 元素对象，默认值：false
- `statusBarStyle`：窗口状态栏样式 ，String 类型。支持 `color:#f00;font-size:14px;`，默认值：空字符串 
- `event`：窗口事件，Object/Class 类型。可选值：
  - `onload`：内容加载事件，Object/Class 类型。可选值：
    - `before`：内容加载之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `after`：内容加载之后，Function（layxWindow,winform) 类型
  - `onmin`：窗口最小化事件，Object/Class 类型。可选值：
    - `before`：最小化之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `after`：最小化之后，Function（layxWindow,winform) 类型
  - `onmax`：窗口最大化事件，Object/Class 类型。可选值：
    - `before`：最大化之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `after`：最大化之后，Function（layxWindow,winform) 类型
  - `onrestore`：窗口恢复事件，Object/Class 类型。可选值：
    - `before`：恢复之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `after`：恢复之后，Function（layxWindow,winform) 类型
  - `ondestroy`：窗口关闭事件，Object/Class 类型。可选值：
    - `before`：关闭之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `after`：关闭之后，Function（) 类型
  - `onmove`：窗口拖动事件，Object/Class 类型。可选值：
    - `before`：拖动之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `progress`：拖动中，Function（layxWindow,winform) 类型
    - `after`：拖动之后，Function（layxWindow,winform) 类型
  - `onresize`：窗口拖曳调整大小事件，Object/Class 类型。可选值：
    - `before`：拖曳调整大小之前，Function（layxWindow,winform) 类型，**设置 return false 禁止后续所有操作**
    - `progress`：拖曳调整大小中，Function（layxWindow,winform) 类型
    - `after`：拖曳调整大小之后，Function（layxWindow,winform) 类型
  
# 对象

## layxWindow

layxWindow 是窗口的 HTMLElment对象

## winform

winform 是窗口信息对象，包含属性：

- `id`：窗口Id
- `windowId`：layxWindow 对象Id
- `window`：layxWindow 对象
- `createDate`：创建时间
- `status`：窗口当前状态：可选值：`normal：正常`、`min：最小化`、`max：最大化`
- `type`：窗口类型，可选值：`html：文本窗口`、`url:页面窗口`
- `area`：窗口位置信息，包含属性：
  - `width`：窗口宽度
  - `height`：窗口高度
  - `minWidth`：窗口最小宽度
  - `minHeight`：窗口最小高度
  - `top`：窗口上边距离
  - `left`：窗口左边距离
- `isStick`：是否置顶状态
- `zIndex`：窗口层级别
- `movable`：窗口是否可拖动位置
- `moveLimit`：窗口拖动位置限制，包含属性：
  - `vertical`：是否禁止垂直拖动
  - `horizontal`：是否禁止水平拖动
  - `leftOut`：是否允许窗口拖出浏览器左边可视区域
  - `rightOut`：是否允许窗口拖出浏览器右边可视区域
  - `topOut`：是否允许窗口拖出浏览器上边可视区域
  - `bottomOut`：是否允许窗口拖出浏览器下边可视区域
- `resizable`：窗口是否可拖曳调整大小
- `resizeLimit`：窗口拖曳调整大小限制，包含属性：
  - `t`：是否限制上边拖曳调整大小
  - `r`：是否限制右边拖曳调整大小
  - `b`：是否限制下边拖曳调整大小
  - `l:`：是否限制左边拖曳调整大小
  - `lt:`：是否限制左上边拖曳调整大小
  - `rt:`：是否限制右上边拖曳调整大小
  - `lb:`：是否限制左下边拖曳调整大小
  - `rb:`：是否限制右下边拖曳调整大小
- `stickable`：是否允许窗口置顶操作
- `minable`：是否允许窗口最小化操作
- `maxable`：是否允许窗口最大化操作
- `restorable`：是否允许窗口恢复操作
- `closable`：是否允许窗口关闭操作
- `currentWindow`：当前窗口的 Window 对象
- `event`：窗口事件，包含属性
  - `onload`：内容加载事件
    - `before`：内容加载之前
    - `after`：内容加载之后
  - `onmin`：窗口最小化事件
    - `before`：最小化之前
    - `after`：最小化之后
  - `onmax`：窗口最大化事件
    - `before`：最大化之前
    - `after`：最大化之后
  - `onrestore`：窗口恢复事件
    - `before`：恢复之前
    - `after`：恢复之后
  - `ondestroy`：窗口关闭事件
    - `before`：关闭之前
    - `after`：关闭之后
  - `onmove`：窗口拖动事件
    - `before`：拖动之前
    - `progress`：拖动中
    - `after`：拖动之后
  - `onresize`：窗口拖曳调整大小事件
    - `before`：拖曳调整大小之前
    - `progress`：拖曳调整大小中
    - `after`：拖曳调整大小之后

# 方法

- `var version = layx.v`：获取 layx 版本号，返回值：字符串
- `var winform = layx.open(options)`：打开一个窗口，options：配置参数，返回值：winform 对象
- `var windows = layx.windows()`：获取所有打开的窗口，返回值：{ 窗口Id：winform对象，窗口Id2：winform对象，...}
- `var winform = layx.getWindow(id)`：获取当前窗口 winform 对象，id：窗口Id
- `layx.destroy(id)`：关闭窗口，id：窗口Id
- `layx.max(id)`：最大化窗口，id：窗口Id
- `layx.setTitle(id,title,useFrameTitle)`：设置窗口标题，id：窗口Id；title：标题，支持html；useFrameTitle：是否自动获取 iframe页面标题填充，默认值：false
- `layx.flicker(id)`：**闪烁窗口**，id：窗口Id
- `layx.restore(id)`：恢复窗口，id：窗口Id
- `layx.updateZIndex(id)`：更新窗口层级别，id：窗口Id
- `layx.updateMinLayout()`：更新窗口最小化排版
- `layx.stickToggle(id)`：窗口置顶切换，id：窗口Id
- `layx.setPosition(id,position)`：设置窗口位置，id：窗口Id；position：见**参数**中position
- `var iframe = layx.getChildContext(id)`：获取 iframe 页面 Window 对象，id：窗口Id，**窗口通讯**
- `var iframeParent = layx.getParentContext(id)`：获取iframe 页面上级 Window 对象 ，id：窗口Id，**窗口通讯**
- `layx.setContent(id, content)`：设置文本窗口内容，id：窗口Id；content：String 或 HTMLElement
- `layx.setUrl(id,url)`：设置页面窗口url地址，id：窗口Id；url：网址 或 文件路径
- `layx.destroyAll()`：关闭所有窗口
- `var winform = layx.msg(msg,options)`：打开一个消息框，msg，消息，String类型；options：配置参数
- `var winform = layx.alert(title,msg,yes,buttons,options)`：打开一个提示框，title：提示框标题，String类型；msg，消息，String类型；yes：点击确定回调函数，`function(id){}`；buttons，Object类型，可选值：`[{ label:'', callback:function(id){}}]`；options：配置参数
- `var winform = layx.confirm(title,msg,yes,buttons,options)`：打开一个询问框，title：提示框标题，String类型；msg，消息，String类型；yes：点击确定回调函数，`function(id){}`；buttons，Object类型，可选值：`[{ label:'', callback:function(id){}}]`；options：配置参数
- `var winform = layx.prompt(title,msg,yes,buttons,options)`：打开一个输入框，title：提示框标题，String类型；msg，消息，String类型；yes：点击确定回调函数，`function(id,value,textarea){}`；buttons，Object类型，可选值：`[{ label:'', callback:function(id){}}]`；options：配置参数
- `var promptTextare = layx.getPromptTextArea(id)`：获取输入框 `textarea` 对象 ，id：窗口Id，通常在 prompt 输入框点击按钮回调函数中使用
- `var winform = layx.load(id,msg,options)`： 打开一个加载框，id：窗口Id；msg，消息，String类型；options：配置参数

# 开源

- `Gitee`：[https://gitee.com/monksoul/LayX](https://gitee.com/monksoul/LayX)
- `Github` [https://github.com/MonkSoul/Layx](https://github.com/MonkSoul/Layx)

# 捐赠