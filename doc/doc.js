if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function () {
            var self = this;
            function update(fn) {
                return function (value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }

            return {
                add: update(function (classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function (classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function (classes, index, value) {
                    if (~index)
                        classes.splice(index, 1);
                    else
                        classes.push(value);
                }),

                contains: function (value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function (i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}
function updateFloat(triggerEle) {
    if (layx.checkVisual(triggerEle, document.getElementById("floatThat-bottom"), false)) {
        layx.visual("float-bottom");
        layx.updateFloatWinPosition("float-bottom");
    }
    else {
        layx.destroy("float-bottom");
    }
    if (layx.checkVisual(triggerEle, document.getElementById("floatThat-left"), false)) {
        layx.visual("float-left");
        layx.updateFloatWinPosition("float-left");
    }
    else {
        layx.destroy("float-left");
    }
    if (layx.checkVisual(triggerEle, document.getElementById("floatThat-right"), false)) {
        layx.visual("float-right");
        layx.updateFloatWinPosition("float-right");
    }
    else {
        layx.destroy("float-right");
    }
    if (layx.checkVisual(triggerEle, document.getElementById("floatThat-top"), false)) {
        layx.visual("float-top");
        layx.updateFloatWinPosition("float-top");
    }
    else {
        layx.destroy("float-top");
    }
}
window.onload = function () {
    if (window.layx) {
        layx.group('layx', [{
            id: 'info',
            title: '关于',
            cloneElementContent: false,
            content: layx.multiLine(function () {/*
             
             <style type="text/css">
             #about-layx{
                    padding:0 10px 10px 10px;
                    line-height:1.5;
                    font-size: 14px;
            }

            #about-layx h2{
                border-bottom:1px solid #ccc;
            }

            #about-layx label {
                margin: 0 2px;
                padding: 0 5px;
                white-space: nowrap;
                border: 0;
                background-color: #f8f8f8;
                border-radius: 3px;
                display:inline-block;
            }
             </style>

             <div id="about-layx">
                <h2>序言</h2>
                <p>Layx 企业级弹窗组件。</p>
                <p>gzip压缩版仅 <label>13.5kb</label>，非常小巧。</p>
                <h2>项目</h2>
                <ul>
                    <li>Gitee：
                    <p style="margin:5px 0"><a href='https://gitee.com/monksoul/LayX/stargazers' target='_blank'><img src='https://gitee.com/monksoul/LayX/badge/star.svg?theme=dark' alt='star'></img></a> <a href='https://gitee.com/monksoul/LayX/members'  target='_blank'><img src='https://gitee.com/monksoul/LayX/badge/fork.svg?theme=dark' alt='fork'></img></a></p>
                    </li>
                    <li>Github：
                    <p style="margin:5px 0"><iframe src="https://ghbtns.com/github-btn.html?user=MonkSoul&repo=Layx&type=star&count=true" frameborder="0" scrolling="0" width="85px" height="20px"></iframe> <iframe src="https://ghbtns.com/github-btn.html?user=MonkSoul&repo=Layx&type=fork&count=true" frameborder="0" scrolling="0" width="85px" height="20px"></iframe></p>
                    </li>
                </ul>
                <h2>信息</h2>
                <ul>
                    <li><label>原创作者</label>：百小僧</li>
                    <li><label>开源协议</label>：MIT</li>
                    <li><label>当前版本</label>：<strong>v2.4.8</strong></li>
                    <li><label>发布日期</label>：2018.06.21</li>
                    <li><label>交流Q群</label>：<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=60a832c9b6d9e7e56a0057fa341270fe52472e8390f9a8ec5985e47c319a166e">18863883</a></li>
                    <li><label>版权所有</label>：百签软件（中山）有限公司</li>
                </ul>
                <h2>特性</h2>
                <ul>
                    <li>纯原生Javascript实现，不依赖任何第三方框架</li> 
                    <li>支持IE10+（含IE10）、Chrome、Firefox、Opera、Edge等主流浏览器</li>
                    <li>支持多种窗口类型：文本窗口，页面窗口，窗口组，提示窗口，消息窗口，询问窗口，输入窗口，加载窗口、浮动窗口、置顶窗口、倒计时窗口</li>
                    <li>支持窗口最大化、最小化、恢复、置顶、关闭控制及事件监听</li>
                    <li>支持窗口阻隔、窗口闪烁功能</li>
                    <li>支持窗口点击标题获取焦点、点击内容/页面获取焦点</li>
                    <li>支持窗口图标定制、操作按钮定制</li>
                    <li>支持窗口四个方向拖动及方向控制</li>
                    <li>支持窗口八个方向拖曳大小及拖曳方向控制</li>
                    <li>支持窗口自动获取页面标题</li>
                    <li>支持窗口位置记录及恢复</li>
                    <li>支持窗口相互通讯</li>
                    <li>支持窗口设定自动关闭</li>
                    <li>支持窗口外观控制、状态栏、透明度控制</li>
                    <li>支持窗口操作拦截器、可以拦截任何不正常操作</li>
                    <li>支持窗口初始化位置、宽高度、最小化宽高度控制</li>
                    <li>支持窗口加载文字控制</li>
                    <li>支持窗口滚动条自能判断</li>
                    <li>支持窗口最小化统一管理</li>
                    <li>支持滚动条智能判断</li>
                    <li>支持窗口位置记录保存</li>
                    <li>支持 ESC 快捷键退出窗口</li>
                    <li><strong>支持触摸屏手势拖曳、拖动</strong>
                </ul>
             </div>

            */ })
        }, {
            id: 'demo',
            title: '示例',
            cloneElementContent: false,
            content: document.getElementById('code')
        }, {
            id: 'doc',
            title: '文档',
            type: 'url',
            url: './doc.html'
        }], 0, {
                mergeTitle: false,
                title: 'Layx v' + layx.v,
                width: 320,
                height: 568,
                minWidth: 320,
                minHeight: 568,
                position: [20, 20],
                closable: false,
                closeMenu: false,
                debugMenu: true,
                minable: false,
                minMenu: false,
                stickMenu: true,
                event: {
                    onmax: {
                        after: function (layxWindow, winform) {
                            updateFloat(layxWindow.querySelector("#layx-layx-demo-html"));
                            if (layx.checkVisual(layxWindow, layx.getButton(winform.id, 'log'), false)) {
                                layx.visual("float-log");
                                layx.updateFloatWinPosition("float-log");
                            }
                            else {
                                layx.destroy("float-log");
                            }
                        }
                    },
                    onrestore: {
                        after: function (layxWindow, winform) {
                            updateFloat(layxWindow.querySelector("#layx-layx-demo-html"));
                            if (layx.checkVisual(layxWindow, layx.getButton(winform.id, 'log'), false)) {
                                layx.visual("float-log");
                                layx.updateFloatWinPosition("float-log");
                            }
                            else {
                                layx.destroy("float-log");
                            }
                        }
                    },
                    onmove: {
                        progress: function (layxWindow, winform) {
                            updateFloat(layxWindow.querySelector("#layx-layx-demo-html"));
                            if (layx.checkVisual(layxWindow, layx.getButton(winform.id, 'log'), false)) {
                                layx.visual("float-log");
                                layx.updateFloatWinPosition("float-log");
                            }
                            else {
                                layx.destroy("float-log");
                            }
                        }
                    },
                    onresize: {
                        progress: function (layxWindow, winform) {
                            updateFloat(layxWindow.querySelector("#layx-layx-demo-html"));
                            if (layx.checkVisual(layxWindow, layx.getButton(winform.id, 'log'), false)) {
                                layx.visual("float-log");
                                layx.updateFloatWinPosition("float-log");
                            }
                            else {
                                layx.destroy("float-log");
                            }
                        }
                    }
                },
                statusBar: true,
                buttons: [
                    {
                        id: 'donate',
                        label: '捐赠',
                        callback: function (id, button, event) {
                            layx.html('donate', '请作者喝杯咖啡', '<div style="padding:10px"><img src="./code.jpg" style="width:100%;display:block;" /></div>', { width: 300, height: 385 });
                        },
                    },
                    {
                        id: 'source',
                        label: '鉴赏',
                        callback: function (id, button, event) {
                            event.stopPropagation();
                            layx.group('source', [
                                {
                                    id: 'layxss',
                                    title: 'layx.css',
                                    type: "url",
                                    url: "./layxcss.html"
                                },
                                {
                                    id: 'layxjs',
                                    title: 'layx.js',
                                    type: "url",
                                    url: "./layxjs.html"
                                }
                            ], 0, { mergeTitle: false, title: 'Layx v' + layx.v + " 源代码鉴赏" });
                        },
                    },
                    {
                        id: 'log',
                        label: '日志',
                        callback: function (id, button, event) {
                            event.stopPropagation();
                            layx.destroyInlay("float-log");
                            layx.html('log', 'Layx 更新日志 v' + layx.v, layx.multiLine(function () {/* 
<div style="padding:0 10px 10px 10px">
<h3># 2018.06.21 v2.4.8 发布</h3>
<pre style="margin-top:0">
- [新增] options.buttonKey 配置按钮快捷键，支持enter和ctrl+enter
- [更新] 输入框prompt快捷键为：Ctrl+Enter，避免和多行文本textarea换行冲突
- [修复] confirm，prompt 冒泡bug
- [修复] 输入框prompt 回车值为null bug
</pre>
<h3># 2018.06.18 v2.4.6 发布</h3>
<pre style="margin-top:0">
- [新增] 有操作按钮的窗口都能触发回车操作
- [更新] 禁止操作按钮文本选中
- [修复] 修复监听回车操作bug
</pre>
<h3># 2018.06.12 v2.4.5 发布</h3>
<pre style="margin-top:0">
- [新增] options.focusToReveal 参数，设置是否获取焦点后前置
- [新增] options.dialogType 内置参数，配置alert，prompt，confirm支持Enter回车键触发按钮
- [更新] layx.max最大化机制，支持最大化后再次最大化，适应浏览器大小调整后自动自适应
- [更新] 记录窗口位置采用localStorge存储，之前采用sessionStorge
- [修复] layx窗口点击冒泡 bug
- [修复] layx.setPosition不能记住当前位置 bug
- [修复] 最大化还显示圆角bug
</pre>
<h3># 2018.06.07 v2.4.4 发布</h3>
<pre style="margin-top:0">
- [更新] layx.css 去除无关代码，加强layx.css 样式内聚性
- [更新] 窗口最大化时应该禁止圆角，确保最大化覆盖页面
- [更新] 窗口组点击切换时有延迟
- [更新] alert、msg、tip、confirm、prompt代码
- [修复] css vh/vw 单位 转换bug
- [修复] layx.setPosition之后刷新页面不能保存当前位置
</pre>
<h3># 2018.06.04 v2.4.1 发布</h3>
<pre style="margin-top:0">
- [新增] <span style="color: #3498db;">新增 tip 提示窗口</span>
- [新增] <span style="color: #3498db;">options.skin 内置皮肤设置，支持default、cloud、turquoise、river、asphalt</span>
- [新增] <span style="color: #3498db;">自定义皮肤功能</span>
- [新增] <span style="color: #3498db;">options.borderRadius 圆角设置</span>
- [新增] 阻隔层禁止右键，避免恶意修改
- [更新] 网页窗口加载代码
- [更新] <span style="color: ##3498db;">浮动窗口气泡自适应主题功能</span>
- [修复] top.layx打开新窗口被遮盖 bug
- [修复] 窗口焦点事件触发多次 bug
- [修复] 同域网页窗口ESC快捷键无作用 bug
- [修复] 窗口禁止冒泡触发焦点事件 bug
- [修复] 只读窗口、阻隔层右键不兼容 bug
- [修复] 只读窗口不能获取焦点 bug
- [修复] 窗口禁止获取焦点后还能触发置顶和事件 bug
- [修复] 窗口图标不对齐 bug
- [修复] 加载动画 火狐、Safari旧浏览器样式 bug
- [修复] bootstrap、Element UI等第三方UI样式冲突 bug
- [修复] 文本窗口、页面窗口、窗口组窗口 onload事件 bug
</pre>
<h3># 2018.06.01 v2.3.5 发布</h3>
<pre style="margin-top:0">
- [新增] options.readonly 参数，设置窗口为只读类型
- [新增] options.shadeDestroy参数，用来设置点击阻隔空白区域关闭窗口
- [新增] options.shadable 支持背景透明度设置，取值范围：0-1
- [新增] css3 vh、vw单位支持，特用于width，height，minWidth，minHeight使用
- [更新] layx.css 兼容处理
- [修复] 网页窗口加载失败后加载提示不能隐藏 bug
- [修复] 自定义loadingText bug
- [修复] file:协议 bug
</pre>
<h3># 2018.05.31 v2.3.2 发布</h3>
<pre style="margin-top:0">
- [新增] 窗口组 options.preload参数，可以设置窗口组预加载个数
- [新增] 双击窗口图标关闭窗口
- [新增] 浮动窗自适应功能
- [新增] 窗口拖动方向为左、右、下边时最大拖动都必须留15px位置
- [新增] options.dragInTopToMax 用来设置是否拖动到顶部自动最大化
- [更新] 加载窗口代码、新增加载动画
- [更新] layx.css 样式表
- [更新] 加载内容特效
- [修复] 窗口拖出可视窗口顶部 bug
- [修复] IOS系统safari浏览器点击屏幕闪动 bug
- [修复] 设置文本窗口内容、窗口组文本窗口内容 取用模式 bug
</pre>
<h3># 2018.05.29 v2.2.9 发布</h3>
<pre style="margin-top:0">
- [新增] layx.getElementPos(el) 方法，获取元素绝对坐标 
- [新增] layx.destroyInlay(id); 内部关闭窗口方法，相当于点击了 关闭按钮 关闭
- [新增] layx.checkVisual(pEle, ele, isAllCheck); 方法，判断元素是否在某个元素内部并且可见！（也就是屏幕能够看到它）
- [新增] layx.getButton(id,buttonId); 方法，用来获取状态栏按钮Element对象
- [更新] layx.css 样式，支持Electron无边框窗口拖曳
- [更新] 浮动窗窗口示例、支持浮动窗口屏幕不可见时隐藏，可见时显示
- [修复] cloneElementContent:false bug</pre>
<h3># 2018.05.28 v2.2.7 发布</h3>
<pre style="margin-top:0">
- [新增] ESC关闭获取焦点的窗口
- [新增] options.escKey 开关，设置是否启用esc关闭窗口功能
- [新增] event.ondestroy.before参数 escKey，表示是否按下esc键
- [新增] 自动判断拷贝DOM元素如果display:none自动设置为显示
- [新增] 提示框图标设置
- [新增] options.dialogIcon，设置提示框图标，支持alert,confirm,msg
- [新增] 按钮title提示
- [更新] 触摸代码、新增触摸电脑的支持（同时支持鼠标、触摸）
- [修复] 文本窗口不触发焦点事件 bug
- [修复] 点击状态栏按钮层不能置顶bug
- [修复] IOS系统Safari不支持iFrame bug
- [修复] 最小化样式超出 bug</pre>
<h3># 2018.05.27 v2.2.4 发布</h3>
<pre style="margin-top:0">
- [新增] 移动端拖动窗口、拖曳大小支持，划时代的更新！！！！
- [更新] 样式表支持移动端处理
- [更新] 取消拖曳窗口、拖动窗口屏蔽滚动条事件
- [更新] 控制栏点击事件代码、新增移动端事件判断处理</pre>
<h3># 2018.05.26 v2.2.3 发布</h3>
<pre style="margin-top:0">
- [新增] 浮动窗口方向控制（上、下、左、右）
- [新增] 窗口组切换前后事件 event.onswitch
- [更新] 拖曳容器代码
- [更新] layx.updateFloatTargetPosition(id) 为 layx.updateFloatWinPosition(id,direction);
- [更新] 窗口组切换代码
- [更新] 拖曳容器样式
- [修复] layx.prompt 默认值 bug
- [修复] layx.load 加载 bug</pre>
<h3># 2018.05.25 v2.2.0 发布</h3>
<pre style="margin-top:0">
- [新增] 浮动窗口类型
- [新增] 浮动窗口options.floatTarget参数，floatTarget 用来设置吸附到那个元素上
- [新增] options.mergeTitle 参数，表示窗口组标题是合并还是不合并
- [新增] 窗口调试信息按钮，开发阶段非常方便调试工作
- [新增] 窗口最小化状态下不显示置顶按钮、调试按钮
- [新增] 更新浮动窗口位置方法 layx.updateFloatTargetPosition(id);
- [新增] 设置窗口位置 layx.setPosition(id,position,isFloatTarget); isFloatTarget 参数，用来判断是否是浮动窗口
- [新增] event.onvisual 事件，控制窗口显示隐藏，有区别于销毁
- [新增] layx.visual(id, status, params) 方法，控制窗口显示隐藏
- [更新] winform.windowId为winform.layxWindowId，winform.window为layxWindow
- [更新] 恢复提示为：还原
- [更新] 窗口组样式
- [修复] 定时器 bug
- [修复] 拖动、最大化滚动条 bug
- [修复] IE10 bug</pre>
<h3># 2018.05.24 v2.1.6 发布</h3>
<pre style="margin-top:0">
- [新增] 窗口冒泡默认处理方法
- [新增] 输入框prompt 默认值设置
- [新增] 窗口存在事件event.onexist,常用于窗口已经打开刷新URL操作
- [新增] 提示框、消息框、询问框、输入框、加载框 宽度高度自适应功能
- [新增] buttons配置参数id、classes、style属性、提供按钮更多定制功能
- [新增] buttons配置参数callback中提供按钮自身DOM对象
- [新增] buttons配置参数callback中提供按钮event对象，用来处理冒泡事件和默认事件
- [新增] ondestroy.before回调参数inside参数，用来判断是点击内置按钮关闭还是用户调用关闭
- [新增] ondestroy.before回调参数params参数，记录用户关闭传递的参数
- [新增] 操作按钮启用、禁用操作 setButtonStatus(id, buttonId, isEnable);
- [更新] layx.destroy方法，新增params参数，可关闭之前传递参数，常用于event.ondestroy.before中判断
- [更新] 提示框、消息框、询问框、输入框、加载框生成代码
- [更新] 窗口最小宽度、最小高度为200
- [修复] 手机IOS自带浏览器滚动条bug
- [修复] 按钮冒泡事件 bug</pre>
<h3># 2018.05.23 v2.1.3 发布</h3>
<pre style="margin-top:0">
- [新增] storeStatus 配置参数，记录窗口位置信息，即使刷新页面还能保存（基于sessionStorage存储）
- [新增] isOverToMax 配置参数、控制初始化窗口时 超出可视区域自动最大化
- [新增] 支持跨域网站获取焦点事件
- [新增] onfocus焦点事件监听
- [更新] 拖动窗口、拖曳窗口流畅度
- [更新] layx.css样式，添加各个浏览器兼容性处理
- [更新] layx.js 代码
- [修复] Firefox Developer Edition 版本关闭 bug</pre>
<h3># 2018.05.20 v2.1.0 发布</h3>
<pre style="margin-top:0">
- [新增] cloneElementContent 参数，可配置 HTMLElement 是拷贝模式还是取用模式
- [新增] 多行字符串处理方法
- [新增] 内容正在加载中动态提示
- [新增] 重载页面窗口方法
- [更新] 提示框、询问框 内容内容对齐方式
- [修复] 禁用窗口最大化后拖曳到顶部再拖下来位置错误 bug
- [修复] 禁用恢复操作后窗口最大化状态往下拖动窗口位置错误 bug
- [修复] 内容窗口滚动条 bug
- [修复] 内容窗口内容高度不自动高度 bug
- [修复] 窗口组不传默认索引出错bug， 默认为0，也就是第一个
- [修复] 禁用窗口调整大小后拖曳到顶部还能最大化 bug
- [修复] 加载完成触发两次 bug
- [修复] 提示框、消息框、询问框、加载框、输入框 事件不应用 bug
- [修复] 页面窗口加载监听机制中遮罩对象获取错误 bug
- [修复] 窗口处于最小化或最大化时还能最小化，最大化 bug
- [修复] 设置窗口位置 bug
- [修复] 设置页面窗口地址时不显示 加载遮罩层 bug
- [修复] frames、buttons 不能深度复制对象 bug
- [修复] 设置窗口组文本内容、URL内容 bug</pre>
<h3># 2018.05.18 v2.0.5 发布</h3>
<pre style="margin-top:0">
- [新增] 窗口组类型
- [新增] frames,frameIndex 配置参数
- [新增] setGroupContent，setGroupTitle，setGroupUrl，setGroupIndex，group方法
- [更新] layx.css 样式表
- [修复] 最小化样式
- [修复] 窗口组加载完成bug</pre>
<h3># 2018.05.17 v2.0.4 发布</h3>
<pre style="margin-top:0">
- [新增] buttons 配置属性
- [更新] 提示框、询问框、输入框代码</pre>
<h3># 2018.05.16 v2.0.3 发布</h3>
<pre style="margin-top:0">
- [新增] style 参数，可以嵌入css样式表
- [新增] 打开新窗口时如果可视区域小于窗口初始化宽高度，默认最大化
- [修复] 拖动层、拖曳层调整大小多窗口冲突bug
- [修复] 部分浏览器页面窗口不能自适应 bug
- [修复] 文本窗口样式被全局应用 bug</pre>
<h3># 2018.05.15 v2.0.2 发布</h3>
<pre style="margin-top:0">
- [新增] var winform = layx.html(id,title,content,options) 快捷打开文本窗口方法
- [新增] var winform = layx.iframe(id,title,url,options) 快捷打开网页窗口方法
- [新增] 窗口自动关闭文本可自定义功能：autodestroyText
- [新增] 打开一个存在的窗口时窗口闪烁获取焦点
- [更新] 调整最小化后显示宽度为：240px
- [修复] 点击文本窗口内容无法置顶 bug
- [修复] 置顶按钮点击切换 title 提示 bug
- [修复] 置顶层带有阻隔层时没有阻隔的bug
- [修复] 低版本Chrome 浏览器bug</pre>
<h3># 2018.05.12 v2.0.0 发布</h3>
<pre style="margin-top:0">
- [新增] v2.0.0 正式发布</pre>
<h3># 2018.05.06 v1.0.0 发布</h3>
<pre style="margin-top:0">
- [新增] v1.0.0 正式发布</pre>
</div>
*/ }), { width: 500, height: 500 });
                        },
                    },
                    {
                        id: 'open-run',
                        label: '调试',
                        callback: function (id, button, event) {
                            event.stopPropagation();
                            layx.html('eval', 'Layx 在线调试 <span style="color:#f00">支持Ctrl+Enter运行</span>', layx.multiLine(function () { /*
 
 <style type="text/css">
     #evel-panel,#evel-panel *{box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;}
     #evel-panel{padding:10px;height: 100%;}
     #eval-textarea{height:100%;background:#f9f9f9;margin:0; font-family: Arial;}
 </style>

<div id="evel-panel">
    <textarea id="eval-textarea" class="layx-textarea" placeholder="请输入代码调试">layx.confirm('Layx 调查问卷','你会在下一个系统使用 Layx 吗？',function(id){
    alert('您的支持是Layx发展的动力！');
});</textarea>
</div>
*/}), {
                                    width: 450, height: 450,
                                    moveLimit: {
                                        leftOut: false,
                                        rightOut: false,
                                        topOut: false,
                                        bottomOut: false,
                                    },
                                    stickMenu: true,
                                    statusBar: true,
                                    buttonKey: 'ctrl+enter',
                                    buttons: [
                                        {
                                            id: 'run',
                                            label: '运行',
                                            callback: function (id, button, event) {
                                                try {
                                                    var codeStr = document.querySelector("#eval-textarea");
                                                    if (!codeStr.value) {
                                                        codeStr.focus();
                                                    }
                                                    else {
                                                        eval(codeStr.value);
                                                    }
                                                } catch (e) {
                                                    alert("请输入正确的代码再执行。");
                                                }
                                            }
                                        }
                                    ]
                                });
                        }
                    }
                ]
            });

        layx.tip('Layx 企业级弹窗组件.', document.getElementById('tip-top'), 'top');
        layx.tip('Layx 企业级弹窗组件.', document.getElementById('tip-bottom'), 'bottom');
        layx.tip('Layx 企业级弹窗组件.', document.getElementById('tip-left'), 'left');
        layx.tip('Layx 企业级弹窗组件.', document.getElementById('tip-right'), 'right');

        var logBtn = layx.getButton("layx", "log");
        var winform = layx.html('float-log', 'Layx v' + layx.v + " 更新日志", layx.multiLine(function () {/* 
<div style="padding:10px">
<pre style="margin-top:0;margin-bottom: 0;">
- [新增] options.buttonKey 配置按钮快捷键，支持enter和ctrl+enter
- [更新] 输入框prompt快捷键为：Ctrl+Enter，避免和多行文本textarea换行冲突
- [修复] confirm，prompt 冒泡bug
- [修复] 输入框prompt 回车值为null bug
</pre>
*/ }), {
                floatTarget: logBtn,
                width: 320,
                height: 170,
                minHeight: 110,
                alwaysOnTop: true,
                floatDirection: 'top',
                autodestroy: 10000,
                event: {
                    ondestroy: {
                        before: function (layxWindow, winform, params, inside, escKey) {
                            if (inside === false) {
                                layx.visual(winform.id, false);
                                layx.updateFloatWinPosition(winform.id);
                                return false;
                            }
                        }
                    },
                    onexist: function (layxWindow, winform) {
                        layx.visual(winform.id, true);
                    }
                }
            });

        var demoHtml = document.getElementById("layx-layx-demo-html");
        if (demoHtml) {
            demoHtml.onscroll = function () {
                updateFloat(this);
            }
        }

        window.onscroll = function () {
            layx.updateFloatWinPosition("float-log");
        }
    }
    var runs = document.querySelectorAll(".run");
    for (var i = 0; i < runs.length; i++) {
        runs[i].onclick = function (e) {
            e = e || window.event;
            var pre = this.parentNode.querySelector("pre");
            eval(pre.innerText);
            e.stopPropagation();
        };
    }
    var toc = document.querySelector("#toc");
    var code = document.querySelector("#layx-layx-demo-html");
    code = code ? code : document.body;
    var hTitles = this.document.querySelectorAll("#code h1,#code h2,#code h3,#code h4,#code h5,#code h6");
    for (var i = 0; i < hTitles.length; i++) {
        var a = document.createElement("a");
        a.classList.add("toc-title");
        a.setAttribute("data-type", hTitles[i].tagName.toLowerCase());
        a.innerHTML = hTitles[i].innerHTML;
        a.onclick = function (e) {
            e = e || window.event;
            var scrollDiv = code.querySelector("*[name='" + this.innerHTML + "']");
            if (self != top && self.frameElement && self.frameElement.tagName == "IFRAME") {
                if (navigator.userAgent.indexOf("Firefox") > 0 || window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    (document.documentElement || document.body).scrollTop = scrollDiv.offsetTop - window.innerHeight - 50;
                    if (window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                        code.style["-webkit-overflow-scrolling"] = "auto";
                        code.scrollTop = scrollDiv.offsetTop - window.innerHeight - 50;
                        code.style["-webkit-overflow-scrolling"] = "none";
                    }
                }
                else {
                    (document.documentElement || document.body).scrollTop = scrollDiv.offsetTop;
                    code.scrollTop = scrollDiv.offsetTop;
                }
            }
            else {
                if (navigator.userAgent.indexOf("Firefox") > 0 || window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    code.scrollTop = scrollDiv.offsetTop - code.offsetHeight - 50;
                }
                else {
                    code.scrollTop = scrollDiv.offsetTop;
                }
            }
            document.querySelector('#mulu').click();
            e.stopPropagation();
        };
        toc.appendChild(a);
    }
    document.querySelector('#mulu').onclick = function (e) {
        if (window.getComputedStyle(toc).display === "none") {
            this.innerText = "关闭导航";
            toc.style.display = "block";
        } else {
            this.innerText = "目录导航";
            toc.style.display = "none";
        }
    };
};