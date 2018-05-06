> Layx 网页弹窗最佳选择.

# 演示地址

[Layx](http://baisoft.gotoip11.com/layx/doc/)

![输入图片说明](https://gitee.com/uploads/images/2018/0505/205352_5713b8f6_974299.png "cr1.png")

# 前言

大家好，我叫百小僧，是一名C#开发工程师，同时也擅长多种程序语言。平时的工作都是开发企业管理系统（ERP、CRM）。目前企业管理系统更多都是C/S架构的，而且C/S架构多窗口处理数据更加灵活。刚好公司为了顺应潮流将现有的企业管理系统采用全新B/S架构全新开发，我们最初的想法是在B/S结构界面中采用类似`浏览器多标签页`模式进行设计，但是交给客户试用时大部分都否决了，这些客户一致认为客户端多窗口操作模式比较好。所以还得按照传统C/S模式进行开发。

然而，目前网页弹窗使用最多的 [layer](http://layer.layui.com/)插件没能满足我们的期望或者说没有达到C/S架构多窗口应有的水平。所以，本人利用五一放假期间亲自操刀。

两天后，Layx诞生了...

为什么起名叫 **Layx** 呢？其实很简单，`层`的英文是`layer`，但是目前已经有一个非常成熟的[layer](http://layer.layui.com/)插件了，那我得起个牛逼的名字：LayerX——也就是比 [layer](http://layer.layui.com/) 更加牛X的意思* ^ *。最后琢磨琢磨着发现名字还是有点长，也有点趁[layer](http://layer.layui.com/)热度的赶脚，所以干脆去掉了`er`，直接叫 **LayX**.

# 介绍

Layx 是一款纯原生Javascript编写的网页弹窗插件，完全模仿Windows 10操作系统窗口进行设计开发。

目前Layx具备以下功能

- 支持文本窗口、页面窗口（iframe）
- 支持最大化、最小化、恢复、关闭、置顶功能
- 支持窗口拖动及四个方向拖动控制
- 支持8个方向的窗口拖曳改变大小（上，右，下，左，左上，左下，右上，右下）
- 窗口最小宽度、最大宽度控制
- 窗口焦点激活控制
- 支持窗口阴影控制
- 窗口自动记录上次位置
- 支持双击标题切换窗口
- 支持拖曳窗口到顶部自动最大化、最大化拖曳自动恢复正常窗口
- 支持MDI多级嵌套窗口
- 支持窗口外观控制（背景颜色、透明度、边框颜色、状态栏等）
- 支持窗口图标自定义、操作按钮自定义
- 支持窗口之间相互通讯
- 支持窗口操作监听（最小化监听、最大化监听、恢复监听、置顶监听、拖动监听、改变大小监听、加载监听等）
- 支持窗口打开初始化位置控制（中间，左上、右上、左下、右下、自定义上边和左边）
- 支持窗口阻隔、遮罩
- 支持自动获取iframe页面标题填充窗口标题
- 支持窗口状态拦截器，可以拦截窗口所有操作功能
- 支持窗口加载提示控制
- 支持窗口自动关闭控制
- 支持消息提示窗口（alert,confirm,prompt,loadding,error) **只完成了alert**
- 兼容IE9+、Chrome、Edge、FF、Opera等现代主流浏览器

未来拥有的功能远不止这些...

# 使用

正在整理...

# 参数

```
// layx 默认配置参数

    var defaults = {
        id: 'layx', // 唯一id
        icon: '', // 图标，设置false不启用，这里支持html代码
        title: '', // 窗口标题
        bgColor: '#fff', // 背景颜色，iframe页面背景为透明有效
        borderColor: '#3baced', // 边框颜色
        opacity: 1, // 透明度
        type: 'html', // 窗口类型：支持iframe,alert,confirm,error,load,prompt
        url: '', // iframe类型地址，type=iframe 时有效
        content: '', // 非iframe类型内容，支持text,html
        width: 800, // 初始化宽度
        height: 600, // 初始化高度
        loaddingText: '内容加载中...', // 内容加载文本内容，支持html
        position: 'center', // 初始化位置，支持'center', 'lt', 'rt', 'lb', 'rb'以及 [top,left]数组
        useFrameTitle: false, // 是否自动获取iframe页面标题填充窗口标题
        minWidth: 150, // 拖曳大小最小宽度
        minHeight: 150, // 拖曳大小最大宽度
        shadable: false, // 是否启用窗口阻隔
        alwaysOnTop: false, // 是否总是置顶
        pinable: false, // 是否显示图钉按钮，当 alwaysOnTop为true的时候，pinable自动显示
        minimizable: true, // 是否允许最小化
        maximizable: true, // 是否允许最大化
        closable: true, // 是否允许关闭
        resizable: true, // 是否允许拖曳大小
        autoDestroy: false, // 窗口自动关闭，如果false不启用，参数可以是毫秒时间，比如3000=>3秒
        // 拖曳方向控制
        resizeLimit: {
            t: true, // 是否允许上边拖曳大小，true允许
            r: true, // 是否允许右边拖曳大小，true允许
            b: true, // 是否允许下边拖曳大小，true允许
            l: true, // 是否允许左边拖曳大小，true允许
            lt: true, // 是否允许左上边拖曳大小，true允许
            rt: true, // 是否允许右上边拖曳大小，true允许
            lb: true, // 是否允许左下边拖曳大小，true允许
            rb: true // 是否允许右下边拖曳大小，true允许
        },
        movable: true, // 是否允许拖动窗口
        // 拖动窗口显示，vertical为true表示禁止水平拖动，horizontal为true表示禁止垂直拖动
        moveLimit: {
            vertical: false, // 是否禁止垂直拖动，false不禁止
            horizontal: false, // 是否禁止水平拖动，false不禁止
            leftOut: true, // 是否允许左边拖出，true允许
            rightOut: true, // 是否允许右边拖出，true允许
            topOut: true, // 是否允许上边拖出，true允许，此设置不管是false还是true，窗口都不能拖出窗体
            bottomOut: true, // 是否允许下边拖出，true允许
        },
        statusBar: false, // 是否显示状态栏
        focusable: true, // 是否启用iframe页面点击置顶
        // scaleAnimatable: false, // 是否启用窗口缩放动画，开发中....
        allowTitleDblclickToRestore: true, // 是否允许标题双击恢复窗体
        // parent: null, // 父窗体id，设置此选项时，窗体将在窗体内部页面打开（MDI模式）并和父窗口共用同一个生命周期；注意：只支持非跨域页面。开发中...
        // menuItems: [], // 自定义顶部下拉菜单，支持无限极，开发中....
        // 拦截器，可以监听窗口各个状态
        intercept: {
            // iframe页面加载监听
            load: {
                // 加载之前，return false；禁止加载
                before: function(windowDom, winform) {},
                // 加载之后
                after: function(windowDom, winform, iframe) {}
            },
            // 最小化监听
            min: {
                // 最小化之前，return false；禁止最小化
                before: function(windowDom, winform) {},
                // 最小化之后
                after: function(windowDom, winform) {}
            },
            // 最大化监听
            max: {
                // 最大化之前，return false；禁止最大化
                before: function(windowDom, winform) {},
                // 最大化之后
                after: function(windowDom, winform) {}
            },
            // 恢复监听
            restore: {
                // 恢复之前，return false；禁止恢复
                before: function(windowDom, winform) {},
                // 恢复之后
                after: function(windowDom, winform) {}
            },
            // 关闭监听
            destroy: {
                // 关闭之前，return false；禁止关闭
                before: function(windowDom, winform) {},
                // 关闭之后
                after: function(windowDom, winform) {}
            },
            // 置顶监听
            pin: {
                // 置顶之前，return false；禁止操作
                before: function(windowDom, winform) {},
                // 置顶之后
                after: function(windowDom, winform) {}
            },
            // 移动窗口监听
            move: {
                // 移动之前
                before: function(windowDom, winform) {},
                // 移动中
                moveing: function(windowDom, winform) {},
                // 移动结束
                after: function(windowDom, winform) {}
            },
            // 拖曳窗口大小监听
            resize: {
                // 拖曳之前
                before: function(windowDom, winform) {},
                // 拖曳中
                resizing: function(windowDom, winform) {},
                // 拖曳结束
                after: function(windowDom, winform) {}
            }
        }
    };
```

# 拓展

正在整理...

# 高级

正在整理...

# 捐赠