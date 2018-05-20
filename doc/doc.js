window.onload = function () {
    if (window.layx) {
        layx.group('layx', [
            {
                id: 'info',
                title: '关于',
                cloneElementContent: false,
                content: layx.multiLine(function () {/*
             
             <style type="text/css">
             #about-layx{
                    padding:10px;
                    line-height:1.5;
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
                <p>Layx 是一款网页弹窗JavaScript插件，她将助力于互联网Web开发，提供优质的弹窗体验。</p>
                <p>gzip压缩版仅 <label>13.5kb</label>，非常小巧。</p>
                <h2>信息</h2>
                <ul>
                    <li><label>原创作者</label>：百小僧</li>
                    <li><label>开源协议</label>：MIT</li>
                    <li><label>当前版本</label>：v2.1.0</li>
                    <li><label>发布日期</label>：2018.05.20</li>
                    <li><label>交流Q群</label>：18863883</li>
                </ul>
                <h2>特性</h2>
                <ul>
                    <li>纯原生Javascript实现，不依赖任何第三方框架</li>
                    <li>支持IE10+（含IE10）、Chrome、Firefox、Opera、Edge等主流浏览器</li>
                    <li>支持多种窗口类型：文本窗口，页面窗口，窗口组，提示窗口，消息窗口，询问窗口，输入窗口，加载窗口</li>
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
                </ul>
                <h2>项目</h2>
                <ul>
                    <li>Gitee：<a href="https://gitee.com/monksoul/LayX" target="_blank">https://gitee.com/monksoul/LayX</a></li>
                    <li>Github：<a href="https://github.com/MonkSoul/Layx"  target="_blank">https://github.com/MonkSoul/Layx</a></li>
                </ul>
                <h2>日志</h2>
                <pre>
# 2018.05.20 v2.1.0 发布

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
- [修复] 设置窗口组文本内容、URL内容 bug

# 2018.05.18 v2.0.5 发布

- [新增] 窗口组类型
- [新增] frames,frameIndex 配置参数
- [新增] setGroupContent，setGroupTitle，setGroupUrl，setGroupIndex，group方法
- [更新] layx.css 样式表
- [修复] 最小化样式
- [修复] 窗口组加载完成bug

# 2018.05.17 v2.0.4 发布

- [新增] buttons 配置属性
- [更新] 提示框、询问框、输入框代码

# 2018.05.16 v2.0.3 发布

- [新增] style 参数，可以嵌入css样式表
- [新增] 打开新窗口时如果可视区域小于窗口初始化宽高度，默认最大化
- [修复] 拖动层、拖曳层调整大小多窗口冲突bug
- [修复] 部分浏览器页面窗口不能自适应 bug
- [修复] 文本窗口样式被全局应用 bug

# 2018.05.15 v2.0.2 发布

- [修复] 低版本Chrome 浏览器bug

# 2018.05.15 v2.0.1 发布

- [新增] var winform = layx.html(id,title,content,options) 快捷打开文本窗口方法
- [新增] var winform = layx.iframe(id,title,url,options) 快捷打开网页窗口方法
- [新增] 窗口自动关闭文本可自定义功能：autodestroyText
- [新增] 打开一个存在的窗口时窗口闪烁获取焦点
- [更新] 调整最小化后显示宽度为：240px
- [修复] 点击文本窗口内容无法置顶 bug
- [修复] 置顶按钮点击切换 title 提示 bug
- [修复] 置顶层带有阻隔层时没有阻隔的bug

# 2018.05.12 v2.0.0 发布

- [新增] v2.0.0 正式发布

# 2018.05.06 v1.0.0 发布

- [新增] v1.0.0 正式发布
</pre>
                <h2>捐赠</h2>
                <p>如果 Layx 对您有帮助，可以请 作者 喝杯咖啡</p>
                <img src="./code.jpg" style="width:100%;display:block;" />
             </div>

            */})
            },
            {
                id: 'demo',
                title: '示例',
                cloneElementContent: false,
                content: document.getElementById('code')
            },
            {
                id: 'doc',
                title: '文档',
                type: 'url',
                url: './doc.html'
            }
        ], 0, {
                width: 320, height: 568, minWidth: 320, minHeight: 568, position: [20, 20], closable: false, closeMenu: false, minable: false, minMenu: false, maxMenu: false, stickMenu: true, moveLimit: {
                    leftOut: false,
                    rightOut: false,
                    topOut: false,
                    bottomOut: false,
                }
            });
    }

    var runs = document.querySelectorAll(".run");
    for (var i = 0; i < runs.length; i++) {
        runs[i].onclick = function (e) {
            e = e || window.event;
            var pre = this.parentNode.querySelector("pre");
            eval(pre.innerText);
            e.stopPropagation();
        }
    }

    // 自动生成演示文档目录
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
            code.scrollTop = code.querySelector("*[name='" + this.innerHTML + "']").offsetTop;
            document.querySelector('#mulu').click();
            e.stopPropagation();
        }
        toc.appendChild(a);
    }

    // 切换目录
    document.querySelector('#mulu').onclick = function (e) {
        if (window.getComputedStyle(toc).display === "none") {
            this.innerText = "关闭导航";
            toc.style.display = "block";
        }
        else {
            this.innerText = "目录导航";
            toc.style.display = "none";
        }
    };
}