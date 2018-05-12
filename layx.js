/*
 * file : layx.js
 * gitee : https://gitee.com/monksoul/LayX
 * author : 百小僧/MonkSoul
 * version : v2.0.0
 * create time : 2018.05.11
 * update time : 2018.05.12
 */

;
!(function (over, win, slf) {
    var Layx = {
        // 版本号
        version: '2.0.0',
        // 默认配置
        defaults: {
            id: '',// 窗口唯一id
            icon: true, // 窗口图标，false为不启用，支持html
            title: '',  // 标题，支持html
            width: 800, // 初始化宽度，支持百分比 '100%'
            height: 600,    // 初始化高度，支持百分比 '100%'
            minWidth: 100,  // 最小宽度，支持百分比 '100%'
            minHeight: 100, // 最小高度，支持百分比 '100%'
            position: 'ct', // 初始化位置，支持'ct', 'lt', 'rt', 'lb', 'rb', 'lc', 'tc', 'rc', 'bc'，以及 [top,left]数组，同时也数字也支持混合写法，如：[100,'tc']
            control: true, // 是否显示控制栏
            controlStyle: '', // 控制栏样式
            bgColor: "#fff",  // 窗口颜色：默认透明
            shadow: true,   // 是否显示阴影
            border: "1px solid #3baced", // 边框，false不启用边框
            type: 'html',   // 窗口类型，支持：html,url
            content: '', // type为html有效，支持字符串和element对象
            url: '', // type为url有效
            useFrameTitle: false, // 是否自动获取iframe页面标题填充窗口标题
            opacity: 1, // 透明度
            shadable: false, // 是否启用窗口阻隔
            loaddingText: '内容正在加载中，请稍后...', // 内容加载文本内容，支持html
            stickMenu: false,   // 是否显示置顶按钮
            stickable: true, // 是否允许置顶操作
            minMenu: true,  // 是否显示最小化按钮
            minable: true, // 是否允许最小化操作
            maxMenu: true,  // 是否显示最大化按钮
            maxable: true, // 是否允许最大化操作
            closeMenu: true,    // 是否显示关闭按钮
            closable: true, // 是否允许关闭操作
            restorable: true,   // 是否允许恢复操作
            resizable: true, // 是否显示拖曳操作
            autodestroy: false,  // 自动关闭，支持数值类型毫秒
            autodestroyText: true, // 是否显示关闭倒计时文本
            // 拖曳方向控制
            resizeLimit: {
                t: false, // 是否限制上边拖曳大小，false不限制
                r: false, // 是否限制右边拖曳大小，false不限制
                b: false, // 是否限制下边拖曳大小，false不限制
                l: false, // 是否限制左边拖曳大小，false不限制
                lt: false, // 是否限制左上边拖曳大小，false不限制
                rt: false, // 是否限制右上边拖曳大小，false不限制
                lb: false, // 是否限制左下边拖曳大小，false不限制
                rb: false // 是否限制右下边拖曳大小，false不限制
            },
            movable: true,  // 是否允许拖动窗口
            moveLimit: {
                vertical: false, // 是否禁止垂直拖动，false不禁止
                horizontal: false, // 是否禁止水平拖动，false不禁止
                leftOut: true, // 是否允许左边拖出，true允许
                rightOut: true, // 是否允许右边拖出，true允许
                topOut: true, // 是否允许上边拖出，true允许，此设置不管是false还是true，窗口都不能拖出窗体
                bottomOut: true, // 是否允许下边拖出，true允许
            },
            focusable: true, // 是否启用iframe页面点击置顶，只支持非跨域iframe
            alwaysOnTop: false, // 是否置顶
            allowControlDbclick: true,    // 允许控制栏双击切换窗口大小
            statusBar: false, // 是否显示状态栏，支持html，支持字符串和element对象
            statusBarStyle: '',// 状态栏样式
            // 事件
            event: {
                // 加载事件
                onload: {
                    // 加载之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 加载之后
                    after: function (layxWindow, winform) {
                    }
                },
                // 最小化事件
                onmin: {
                    // 最小化之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 最小化之后
                    after: function (layxWindow, winform) {
                    }
                },
                // 最大化事件
                onmax: {
                    // 最大化之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 最大化之后
                    after: function (layxWindow, winform) {
                    }
                },
                // 恢复事件
                onrestore: {
                    // 恢复之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 恢复之后
                    after: function (layxWindow, winform) {
                    }
                },
                // 关闭事件
                ondestroy: {
                    // 关闭之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 关闭之后
                    after: function () {
                    }
                },
                // 移动事件
                onmove: {
                    // 移动之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 移动中
                    progress: function (layxWindow, winform) {
                    },
                    // 移动之后
                    after: function (layxWindow, winform) {
                    }
                },
                // 拖曳事件
                onresize: {
                    // 拖曳之前，return false 不执行
                    before: function (layxWindow, winform) {
                    },
                    // 拖曳中
                    progress: function (layxWindow, winform) {
                    },
                    // 拖曳之后
                    after: function (layxWindow, winform) {
                    }
                }
            }
        },
        // 普通层级别
        zIndex: 10000000,
        // 窗口集合
        windows: {},
        // 置顶层级别
        stickZIndex: 20000000,
        // 创建窗口骨架
        create: function (options) {
            var that = this,
                config = layxDeepClone({}, that.defaults, options || {}),
                winform = {};

            var _winform = that.windows[config.id];
            if (_winform) {
                if (_winform.status === "min") {
                    that.restore(_winform.id);
                }
                return _winform;
            }

            if (!config.id) {
                console.error("窗口id不能为空且唯一");
                return;
            };

            // 创建窗口阻隔
            if (config.shadable === true) {
                var layxShade = document.createElement("div");
                layxShade.setAttribute("id", "layx-" + config.id + "-shade");
                layxShade.classList.add("layx-shade");
                layxShade.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
                document.body.appendChild(layxShade);
                layxShade.onclick = function (e) {
                    e = e || window.event;
                    that.flicker(config.id);
                    e.stopPropagation();
                }
            }

            // 创建layx-window
            var layxWindow = document.createElement("div");
            layxWindow.setAttribute("id", "layx-" + config.id);
            layxWindow.classList.add("layx-window");
            layxWindow.classList.add("layx-flexbox");
            if (config.shadow === true) {
                layxWindow.style.setProperty("box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
                layxWindow.style.setProperty("-moz-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
                layxWindow.style.setProperty("-webkit-box-shadow", "1px 1px 24px rgba(0, 0, 0, .3)");
            }

            var _minWidth = Utils.compileLayxWidthOrHeight("width", config.minWidth, that.defaults.minWidth);
            var _minHeight = Utils.compileLayxWidthOrHeight("height", config.minHeight, that.defaults.minHeight);

            var _width = Utils.compileLayxWidthOrHeight("width", config.width, that.defaults.width);
            _width = Math.max(_width, _minWidth);

            var _height = Utils.compileLayxWidthOrHeight("height", config.height, that.defaults.height);
            _height = Math.max(_height, _minHeight);

            var _position = Utils.compileLayxPosition(_width, _height, config.position);

            layxWindow.style.zIndex = config.alwaysOnTop === true ? (++that.stickZIndex) : (++that.zIndex);
            layxWindow.style.width = _width + "px";
            layxWindow.style.height = _height + "px";
            layxWindow.style.minWidth = _minWidth + "px";
            layxWindow.style.minHeight = _minHeight + "px";
            layxWindow.style.top = _position.top + "px";
            layxWindow.style.left = _position.left + "px";
            if (config.border !== false) {
                layxWindow.style.setProperty("border", config.border === true ? '1px solid #3baced' : config.border);
            }
            layxWindow.style.backgroundColor = config.bgColor;
            layxWindow.style.opacity = Utils.isNumber(config.opacity) ? config.opacity : 1;
            document.body.appendChild(layxWindow);

            // ================ 存储对象信息
            // 存储窗口Id
            winform.id = config.id;
            // 存储窗口domId
            winform.windowId = layxWindow.getAttribute("id");
            // 存储窗口dom对象
            winform.window = layxWindow;
            // 存储窗口创建时间
            winform.createDate = new Date();
            // 存储窗口状态
            winform.status = "normal";
            // 存储窗口类型
            winform.type = config.type;
            // 存储窗口初始化区域信息
            winform.area = {
                width: _width,
                height: _height,
                minWidth: _minWidth,
                minHeight: _minHeight,
                top: _position.top,
                left: _position.left
            };
            // 存储置顶状态
            winform.isStick = config.alwaysOnTop === true;
            // 存储窗口层级别
            winform.zIndex = config.alwaysOnTop === true ? that.stickZIndex : that.zIndex;
            // 存储拖动状态
            winform.movable = config.movable;
            // 存储拖动限制配置信息
            winform.moveLimit = config.moveLimit;
            // 存储拖曳状态
            winform.resizable = config.resizable;
            // 存储拖曳限制配置信息
            winform.resizeLimit = config.resizeLimit;
            // 存储内置按钮操作信息
            winform.stickable = config.stickable;
            winform.minable = config.minable;
            winform.maxable = config.maxable;
            winform.restorable = config.restorable;
            winform.closable = config.closable;
            // 存储当前window
            winform.currentWindow = win;
            // 存储事件
            winform.event = config.event;

            // ================ 正式开始创建内容

            if (config.control === true) {
                // 创建控制栏
                var controlBar = document.createElement("div");
                controlBar.classList.add("layx-control-bar");
                controlBar.classList.add("layx-flexbox");
                config.controlStyle && controlBar.setAttribute("style", config.controlStyle);
                layxWindow.appendChild(controlBar);

                // 创建窗口默认图标
                if (config.icon !== false) {
                    // 创建控制栏左边容器
                    var leftBar = document.createElement("div");
                    leftBar.classList.add("layx-left-bar");
                    leftBar.classList.add("layx-flexbox");
                    leftBar.classList.add("layx-flex-vertical");
                    controlBar.appendChild(leftBar);

                    var windowIcon = document.createElement("div");
                    windowIcon.classList.add("layx-icon");
                    windowIcon.classList.add("layx-window-icon");
                    windowIcon.innerHTML = config.icon === true ? '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-default-icon"></use></svg>' : config.icon;
                    leftBar.appendChild(windowIcon);
                }

                // 窗口标题
                var title = document.createElement("div");
                title.classList.add("layx-title");
                title.classList.add("layx-flexauto");
                title.classList.add("layx-flexbox");
                title.classList.add("layx-flex-vertical");
                // 绑定双击事件
                if (config.allowControlDbclick === true) {
                    title.ondblclick = function (e) {
                        e = e || window.event;
                        if (config.restorable === true) {
                            that.restore(config.id);
                        }
                        e.stopPropagation();
                    }
                }
                // 绑定拖动事件
                if (config.movable === true) {
                    new LayxDrag(title);
                }
                controlBar.appendChild(title);
                // 标题标签
                var label = document.createElement("label");
                label.innerHTML = config.title;
                title.setAttribute("title", label.innerText);
                title.appendChild(label);

                // 创建控制栏右边容器
                var rightBar = document.createElement("div");
                rightBar.classList.add("layx-right-bar");
                rightBar.classList.add("layx-flexbox");
                controlBar.appendChild(rightBar);

                // 创建用户自定义按钮
                var customMenu = document.createElement("div");
                customMenu.classList.add("layx-custom-menus");
                customMenu.classList.add("layx-flexbox");
                rightBar.appendChild(customMenu);

                if (config.stickMenu === true || config.minMenu === true || config.maxMenu === true || config.closeMenu === true) {
                    // 创建内置按钮
                    var inlayMenu = document.createElement("div");
                    inlayMenu.classList.add("layx-inlay-menus");
                    inlayMenu.classList.add("layx-flexbox");
                    rightBar.appendChild(inlayMenu);

                    if (config.stickMenu === true || (config.alwaysOnTop === true && config.stickMenu)) {
                        // 创建置顶按钮
                        var stickMenu = document.createElement("div");
                        stickMenu.classList.add("layx-icon");
                        stickMenu.classList.add("layx-flexbox");
                        stickMenu.classList.add("layx-flex-center");
                        stickMenu.classList.add("layx-stick-menu");
                        config.alwaysOnTop === true ? stickMenu.setAttribute("title", "取消置顶") : stickMenu.setAttribute("title", "置顶");
                        config.alwaysOnTop === true && stickMenu.setAttribute("data-enable", "1");
                        stickMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-stick"></use></svg>';
                        if (config.stickable === true) {
                            stickMenu.onclick = function (e) {
                                e = e || window.event;
                                that.stickToggle(config.id);
                                e.stopPropagation();
                            }
                        }
                        inlayMenu.appendChild(stickMenu);
                    }

                    if (config.minMenu === true) {
                        // 创建最小化按钮
                        var minMenu = document.createElement("div");
                        minMenu.classList.add("layx-icon");
                        minMenu.classList.add("layx-flexbox");
                        minMenu.classList.add("layx-flex-center");
                        minMenu.classList.add("layx-min-menu");
                        minMenu.setAttribute("title", "最小化");
                        minMenu.setAttribute("data-menu", "min");
                        minMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
                        minMenu.onclick = function (e) {
                            e = e || window.event;
                            if (!this.classList.contains("layx-restore-menu")) {
                                if (config.minable === true) {
                                    that.min(config.id);
                                }
                            }
                            else {
                                if (config.restorable === true) {
                                    that.restore(config.id);
                                }
                            }
                            e.stopPropagation();
                        }
                        inlayMenu.appendChild(minMenu);
                    }

                    if (config.maxMenu === true) {
                        // 创建最大化按钮
                        var maxMenu = document.createElement("div");
                        maxMenu.classList.add("layx-icon");
                        maxMenu.classList.add("layx-flexbox");
                        maxMenu.classList.add("layx-flex-center");
                        maxMenu.classList.add("layx-max-menu");
                        maxMenu.setAttribute("title", "最大化");
                        maxMenu.setAttribute("data-menu", "max");
                        maxMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
                        maxMenu.onclick = function (e) {
                            e = e || window.event;
                            if (!this.classList.contains("layx-restore-menu")) {
                                if (config.maxable === true) {
                                    that.max(config.id);
                                }
                            }
                            else {
                                if (config.restorable === true) {
                                    that.restore(config.id);
                                }
                            }
                            e.stopPropagation();
                        }
                        inlayMenu.appendChild(maxMenu);
                    }

                    if (config.closeMenu === true) {
                        // 创建关闭按钮
                        var destroyMenu = document.createElement("div");
                        destroyMenu.classList.add("layx-icon");
                        destroyMenu.classList.add("layx-flexbox");
                        destroyMenu.classList.add("layx-flex-center");
                        destroyMenu.classList.add("layx-destroy-menu");
                        destroyMenu.setAttribute("title", "关闭");
                        destroyMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-destroy"></use></svg>';
                        destroyMenu.onclick = function (e) {
                            e = e || window.event;
                            if (config.closable === true) {
                                that.destroy(config.id);
                            }
                            e.stopPropagation();
                        }
                        inlayMenu.appendChild(destroyMenu);
                    }
                }
            }

            //创建内容容器
            var main = document.createElement("div");
            main.classList.add("layx-main");
            main.classList.add("layx-flexauto");
            layxWindow.appendChild(main);

            // 创建内容遮罩效果
            var contentShade = document.createElement("div");
            contentShade.classList.add("layx-content-shade");
            contentShade.classList.add("layx-flexbox");
            contentShade.classList.add("layx-flex-center");

            // dom元素直接添加
            if (Utils.isDom(config.loaddingText)) {
                contentShade.appendChild(config.loaddingText);
            }
            else {
                contentShade.innerHTML = config.loaddingText;
            }
            main.appendChild(contentShade);

            switch (config.type) {
                case "html":
                default:
                    // 绑定加载之前事件
                    if (Utils.isFunction(config.event.onload.before)) {
                        var revel = config.event.onload.before(layxWindow, winform);
                        if (revel === false) {
                            return;
                        }
                    }
                    // 创建html内容
                    var html = document.createElement("div");
                    html.classList.add("layx-html");
                    html.classList.add("layx-flexbox");
                    // dom元素直接添加
                    if (Utils.isDom(config.content)) {
                        html.appendChild(config.content);
                    }
                    else {
                        html.innerHTML = config.content;
                    }
                    main.appendChild(html);
                    main.removeChild(contentShade);

                    // 绑定加载之后事件
                    if (Utils.isFunction(config.event.onload.after)) {
                        config.event.onload.after(layxWindow, winform);
                    }
                    break;
                case "url":
                    // 绑定加载之前事件
                    if (Utils.isFunction(config.event.onload.before)) {
                        var revel = config.event.onload.before(layxWindow, winform);
                        if (revel === false) {
                            return;
                        }
                    }

                    var iframe = document.createElement("iframe");
                    iframe.setAttribute("id", "layx-" + config.id + "-iframe");
                    iframe.classList.add("layx-iframe");
                    iframe.classList.add("layx-flexbox");
                    iframe.setAttribute("allowtransparency", "true");
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("scrolling", "auto");
                    iframe.setAttribute("allowfullscreen", "");
                    iframe.setAttribute("mozallowfullscreen", "");
                    iframe.setAttribute("webkitallowfullscreen", "");
                    iframe.src = config.url || 'about:blank';

                    var iframeTitle = "";
                    // ie9+
                    if (iframe.attachEvent) {
                        iframe.attachEvent("onreadystatechange", function () {
                            if (iframe.readyState === "complete" || iframe.readyState == "loaded") {
                                iframe.detachEvent("onreadystatechange", arguments.callee);
                                try {
                                    if (config.useFrameTitle === true) {
                                        // 获取iframe标题
                                        iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                                        that.setTitle(config.id, iframeTitle);
                                    }
                                    if (config.focusable === true) {
                                        // 添加iframe点击事件
                                        iframe.contentWindow.onclick = function (e) {
                                            var _slf = this.self;
                                            e = e || iframe.contentWindow.event;
                                            if (_slf !== over && _slf.frameElement && _slf.frameElement.tagName === "IFRAME") {
                                                // 获取窗口dom对象
                                                var layxWindow = Utils.getNodeByClassName(_slf.frameElement, 'layx-window', _slf);
                                                // 更新层级别
                                                var windowId = layxWindow.getAttribute("id").substr(5);
                                                that.updateZIndex(windowId);
                                            }
                                            e.stopPropagation();
                                        }
                                    }
                                } catch (e) {
                                    console.warn(e);
                                }
                                main.removeChild(contentShade);

                                // 绑定加载之后事件
                                if (Utils.isFunction(config.event.onload.after)) {
                                    config.event.onload.after(layxWindow, winform);
                                }
                            }
                        });
                    }
                    // chrome,foxfire,opera...
                    else {
                        iframe.addEventListener("load", function () {
                            this.removeEventListener("load", arguments.call, false);
                            try {
                                if (config.useFrameTitle === true) {
                                    // 获取iframe标题
                                    iframeTitle = iframe.contentWindow.document.querySelector("title").innerText;
                                    that.setTitle(config.id, iframeTitle);
                                }
                                if (config.focusable === true) {
                                    // 添加iframe点击事件
                                    iframe.contentWindow.onclick = function (e) {
                                        var _slf = this.self;
                                        e = e || iframe.contentWindow.event;
                                        if (_slf !== over && _slf.frameElement && _slf.frameElement.tagName === "IFRAME") {
                                            // 获取窗口dom对象
                                            var layxWindow = Utils.getNodeByClassName(_slf.frameElement, 'layx-window', _slf);
                                            // 更新层级别
                                            var windowId = layxWindow.getAttribute("id").substr(5);
                                            that.updateZIndex(windowId);
                                        }
                                        e.stopPropagation();
                                    }
                                }
                            } catch (e) {
                                console.warn(e);
                            }
                            main.removeChild(contentShade);
                        }, false);
                    }
                    main.appendChild(iframe);
                    // 绑定加载之后事件
                    if (Utils.isFunction(config.event.onload.after)) {
                        config.event.onload.after(layxWindow, winform);
                    }

                    break;
            }

            if (config.resizable === true) {
                // 创建拖曳容器
                var resize = document.createElement("div");
                resize.classList.add("layx-resizes");
                layxWindow.appendChild(resize);

                // 创建8个方向拖曳
                if (config.resizeLimit.t === false) {
                    // 上
                    var resizeTop = document.createElement("div");
                    resizeTop.classList.add("layx-resize-top");
                    new LayxResize(resizeTop, true, false, true, false);
                    resize.appendChild(resizeTop);
                }
                if (config.resizeLimit.r === false) {
                    // 右
                    var resizeRight = document.createElement("div");
                    resizeRight.classList.add("layx-resize-right");
                    new LayxResize(resizeRight, false, false, false, true);
                    resize.appendChild(resizeRight);
                }

                if (config.resizeLimit.b === false) {
                    //下
                    var resizeBottom = document.createElement("div");
                    resizeBottom.classList.add("layx-resize-bottom");
                    new LayxResize(resizeBottom, false, false, true, false);
                    resize.appendChild(resizeBottom);
                }

                if (config.resizeLimit.l === false) {
                    // 左
                    var resizeLeft = document.createElement("div");
                    resizeLeft.classList.add("layx-resize-left");
                    new LayxResize(resizeLeft, false, true, false, true);
                    resize.appendChild(resizeLeft);
                }

                if (config.resizeLimit.lt === false) {
                    // 左上
                    var resizeLeftTop = document.createElement("div");
                    resizeLeftTop.classList.add("layx-resize-left-top");
                    new LayxResize(resizeLeftTop, true, true, false, false);
                    resize.appendChild(resizeLeftTop);
                }

                if (config.resizeLimit.rt === false) {
                    //右上
                    var resizeRightTop = document.createElement("div");
                    resizeRightTop.classList.add("layx-resize-right-top");
                    new LayxResize(resizeRightTop, true, false, false, false);
                    resize.appendChild(resizeRightTop);
                }

                if (config.resizeLimit.lb === false) {
                    //左下
                    var resizeLeftBottom = document.createElement("div");
                    resizeLeftBottom.classList.add("layx-resize-left-bottom");
                    new LayxResize(resizeLeftBottom, false, true, false, false);
                    resize.appendChild(resizeLeftBottom);
                }

                if (config.resizeLimit.rb === false) {
                    // 右下
                    var resizeRightBottom = document.createElement("div");
                    resizeRightBottom.classList.add("layx-resize-right-bottom");
                    new LayxResize(resizeRightBottom, false, false, false, false);
                    resize.appendChild(resizeRightBottom);
                }
            }

            // 创建状态栏
            if (config.statusBar) {
                var statusBar = document.createElement("div");
                statusBar.classList.add("layx-statu-bar");
                config.statusBarStyle && statusBar.setAttribute("style", config.statusBarStyle);
                // dom元素直接添加
                if (Utils.isDom(config.statusBar)) {
                    statusBar.appendChild(config.statusBar);
                }
                else {
                    statusBar.innerHTML = config.statusBar;
                }

                layxWindow.appendChild(statusBar);
            }

            // 自动关闭提示
            if (/(^[1-9]\d*$)/.test(config.autodestroy)) {
                var second = config.autodestroy / 1000;
                var autodestroyTip = document.createElement("div");
                autodestroyTip.classList.add("layx-auto-destroy-tip");
                config.autodestroyText && (autodestroyTip.innerHTML = "<div style='padding:0 8px;'>此窗口 <strong>" + second + " </strong>秒后自动关闭...</div>");
                layxWindow.appendChild(autodestroyTip);
                var destroyTimer = setInterval(function () {
                    --second;
                    if (config.autodestroyText === true) {
                        config.autodestroyText && (autodestroyTip.innerHTML = "<div style='padding:0 8px;'>此窗口 <strong>" + second + " </strong>秒后自动关闭...</div>");
                    }
                    if (second <= 0) {
                        clearInterval(destroyTimer);
                        that.destroy(config.id);
                    }
                }, 1000);
            }

            // 存储窗口对象
            that.windows[config.id] = winform;
            return winform;
        },
        // 设置窗口内容，文本窗口有效
        setContent: function (id, content) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                if (winform.type === "html") {
                    var html = layxWindow.querySelector(".layx-html");
                    if (html) {
                        if (Utils.isDom(content)) {
                            html.appendChild(content);
                        }
                        else {
                            html.innerHTML = content;
                        }
                    }
                }
            }
        },
        // 设置iframe地址，iframe窗口有效
        setUrl: function (id, url) {
            url = url || 'about:blank';
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                if (winform.type === "url") {
                    var iframe = layxWindow.querySelector(".layx-iframe");
                    if (iframe) {
                        iframe.setAttribute("src", url);
                    }
                }
            }
        },
        // 设置标题
        setTitle: function (id, content, useFrameTitle) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                var title = layxWindow.querySelector(".layx-title");
                if (title) {
                    // 获取iframe标题
                    if (useFrameTitle === true) {
                        var iframe = layxWindow.querySelector("#" + id + "-iframe");
                        try {
                            content = iframe.contentDocument.querySelector("title").innerText;
                        } catch (e) { }
                    }
                    var label = layxWindow.querySelector(".layx-title label");
                    if (label) {
                        label.innerHTML = content;
                        title.setAttribute("title", label.innerHTML);
                    }
                }
            }
        },
        // 置顶切换
        stickToggle: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                // 更新层级别
                that.updateZIndex(id);

                winform.isStick = !winform.isStick;
                var stickMenu = layxWindow.querySelector(".layx-stick-menu");
                if (stickMenu) {
                    stickMenu.setAttribute("data-enable", winform.isStick ? "1" : "0");
                }
                that.updateZIndex(id);
            }
        },
        // 恢复窗口
        restore: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                if (winform.restorable !== true) return;
                // 更新层级别
                that.updateZIndex(id);

                // 绑定恢复之前事件
                if (Utils.isFunction(winform.event.onrestore.before)) {
                    var revel = winform.event.onrestore.before(layxWindow, winform);
                    if (revel === false) {
                        return;
                    }
                }

                var area = winform.area;
                if (winform.status === "normal") {
                    that.max(id);
                }
                else if (winform.status === "max") {
                    // 恢复滚动条
                    if (document.body.classList.contains("layx-body")) {
                        document.body.classList.remove('layx-body');
                    }
                    // 设置窗口信息
                    layxWindow.style.top = area.top + "px";
                    layxWindow.style.left = area.left + "px";
                    layxWindow.style.width = area.width + "px";
                    layxWindow.style.height = area.height + "px";
                    // 存储状态
                    winform.status = "normal";
                    // 更新图标
                    var restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='max']");
                    if (restoreMenu) {
                        restoreMenu.classList.remove("layx-restore-menu");
                        restoreMenu.classList.add("layx-max-menu");
                        restoreMenu.setAttribute("title", "最大化");
                        restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
                    }
                    // 显示拖曳
                    var resizePanel = layxWindow.querySelector(".layx-resizes");
                    if (resizePanel) {
                        resizePanel.removeAttribute("data-enable");
                    }
                }
                if (winform.status === "min") {
                    if (winform.minBefore === "normal") {
                        // 设置窗口信息
                        layxWindow.style.top = area.top + "px";
                        layxWindow.style.left = area.left + "px";
                        layxWindow.style.width = area.width + "px";
                        layxWindow.style.height = area.height + "px";
                        // 存储状态
                        winform.status = "normal";
                        // 更新图标
                        var restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='min']");
                        if (restoreMenu) {
                            restoreMenu.classList.remove("layx-restore-menu");
                            restoreMenu.classList.add("layx-min-menu");
                            restoreMenu.setAttribute("title", "最小化");
                            restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
                        }
                        // 显示拖曳
                        var resizePanel = layxWindow.querySelector(".layx-resizes");
                        if (resizePanel) {
                            resizePanel.removeAttribute("data-enable");
                        }
                    }
                    else if (winform.minBefore === "max") {
                        that.max(id);
                    }
                    // 更新最小化布局
                    that.updateMinLayout();
                }

                // 克隆一份
                var _winform = layxDeepClone({}, winform);
                delete that.windows[id];
                that.windows[id] = _winform;
                // 更新最小化布局
                that.updateMinLayout();

                // 绑定恢复之后事件
                if (Utils.isFunction(winform.event.onrestore.after)) {
                    winform.event.onrestore.after(layxWindow, winform);
                }
            }
        },
        // 最小化
        min: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id],
                innertArea = Utils.innerArea();
            if (layxWindow && winform) {
                if (winform.minable !== true) return;
                // 更新层级别
                that.updateZIndex(id);

                // 绑定最小化之前事件
                if (Utils.isFunction(winform.event.onmin.before)) {
                    var revel = winform.event.onmin.before(layxWindow, winform);
                    if (revel === false) {
                        return;
                    }
                }

                // 存储状态
                winform.minBefore = winform.status;
                winform.status = "min";
                // 更新图标
                var minMenu = layxWindow.querySelector(".layx-min-menu");
                if (minMenu) {
                    minMenu.classList.remove("layx-max-menu");
                    minMenu.classList.add("layx-restore-menu");
                    minMenu.setAttribute("title", "恢复");
                    minMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-restore"></use></svg>';
                }
                // 隐藏拖曳
                var resizePanel = layxWindow.querySelector(".layx-resizes");
                if (resizePanel) {
                    resizePanel.setAttribute("data-enable", "0");
                }

                // 更新最大化图标
                var restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='max']");
                if (restoreMenu) {
                    restoreMenu.classList.remove("layx-restore-menu");
                    restoreMenu.classList.add("layx-max-menu");
                    restoreMenu.setAttribute("title", "最大化");
                    restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-max"></use></svg>';
                }
                // 克隆一份
                var _winform = layxDeepClone({}, winform);
                delete that.windows[id];
                that.windows[id] = _winform;
                // 更新最小化布局
                that.updateMinLayout();

                // 绑定最小化之后事件
                if (Utils.isFunction(winform.event.onmin.after)) {
                    winform.event.onmin.after(layxWindow, winform);
                }
            }
        },
        // 更新层级别
        updateZIndex: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                if (winform.isStick === true) {
                    winform.zIndex = ++that.stickZIndex;
                }
                else {
                    winform.zIndex = ++that.zIndex;
                }
                layxWindow.style.zIndex = winform.zIndex;
            }
        },
        // 更新最小化布局
        updateMinLayout: function () {
            var that = this,
                windows = that.windows,
                innertArea = Utils.innerArea(),
                paddingLeft = 10,
                paddingBottom = 10,
                widthByMinStatu = 220,
                stepIndex = 0,
                lineMaxCount = Math.floor(innertArea.width / (widthByMinStatu + paddingLeft));
            for (var id in windows) {
                var winform = windows[id],
                    layxWindow = document.getElementById("layx-" + id);
                if (layxWindow && winform.status === "min") {
                    var control = layxWindow.querySelector(".layx-control-bar");
                    if (control) {
                        var heightByMinStatus = control.offsetHeight;
                        layxWindow.classList.add("layx-min-statu");
                        // 设置最小化区域
                        layxWindow.style.width = widthByMinStatu + 'px';
                        layxWindow.style.height = heightByMinStatus + 'px';
                        layxWindow.style.top = innertArea.height - (Math.floor(stepIndex / lineMaxCount) + 1) * (heightByMinStatus + paddingBottom) + 'px';
                        layxWindow.style.left = stepIndex % lineMaxCount * (widthByMinStatu + paddingLeft) + paddingLeft + 'px';
                        stepIndex++;
                    }
                }
            }
        },
        // 最大化
        max: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id],
                innertArea = Utils.innerArea();
            if (layxWindow && winform) {
                if (winform.maxable !== true) return;
                // 更新层级别
                that.updateZIndex(id);

                // 绑定最大化之前事件
                if (Utils.isFunction(winform.event.onmax.before)) {
                    var revel = winform.event.onmax.before(layxWindow, winform);
                    if (revel === false) {
                        return;
                    }
                }

                // 隐藏滚动条
                document.body.classList.add('layx-body');
                // 设置窗口信息
                layxWindow.style.top = 0;
                layxWindow.style.left = 0;
                layxWindow.style.width = innertArea.width + "px";
                layxWindow.style.height = innertArea.height + "px";
                // 存储状态
                winform.status = "max";
                // 更新图标
                var maxMenu = layxWindow.querySelector(".layx-max-menu");
                if (maxMenu) {
                    maxMenu.classList.remove("layx-max-menu");
                    maxMenu.classList.add("layx-restore-menu");
                    maxMenu.setAttribute("title", "恢复");
                    maxMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-restore"></use></svg>';
                }
                // 隐藏拖曳
                var resizePanel = layxWindow.querySelector(".layx-resizes");
                if (resizePanel) {
                    resizePanel.setAttribute("data-enable", "0");
                }

                // 更新最小化图标
                var restoreMenu = layxWindow.querySelector(".layx-restore-menu[data-menu='min']");
                if (restoreMenu) {
                    restoreMenu.classList.remove("layx-restore-menu");
                    restoreMenu.classList.add("layx-min-menu");
                    restoreMenu.setAttribute("title", "最小化");
                    restoreMenu.innerHTML = '<svg class="layx-iconfont" aria-hidden="true"><use xlink:href="#layx-icon-min"></use></svg>';
                }

                // 克隆一份
                var _winform = layxDeepClone({}, winform);
                delete that.windows[id];
                that.windows[id] = _winform;
                // 更新最小化布局
                that.updateMinLayout();

                // 绑定最大化之后事件
                if (Utils.isFunction(winform.event.onmax.after)) {
                    winform.event.onmax.after(layxWindow, winform);
                }
            }
        },
        // 销毁
        destroy: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                layxShade = document.getElementById(windowId + '-shade'),
                winform = that.windows[id];
            if (layxWindow && winform) {
                // 更新层级别
                that.updateZIndex(id);

                // 绑定关闭之前事件
                if (Utils.isFunction(winform.event.ondestroy.before)) {
                    var revel = winform.event.ondestroy.before(layxWindow, winform);
                    if (revel === false) {
                        return;
                    }
                }

                if (winform.closable !== true) return;

                layxWindow.parentElement.removeChild(layxWindow);
                delete that.windows[id];

                if (layxShade) {
                    layxShade.parentElement.removeChild(layxShade);
                }

                // 更新最小化布局
                that.updateMinLayout();

                // 关闭之后事件
                if (Utils.isFunction(winform.event.ondestroy.after)) {
                    winform.event.ondestroy.after();
                }
            }
        },
        // 关闭所有窗口
        destroyAll: function () {
            var that = this;
            for (var id in Layx.windows) {
                that.destroy(id);
            }
        },
        // 闪烁窗口
        flicker: function (id) {
            var that = this,
                flicker,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                // 更新层级别
                that.updateZIndex(id);

                if (layxWindow.classList.contains('layx-flicker')) {
                    layxWindow.classList.remove('layx-flicker');
                }
                layxWindow.classList.add('layx-flicker');

                filcker = setTimeout(function () {
                    layxWindow.classList.remove('layx-flicker');
                    clearTimeout(filcker);
                }, 120 * 8);
            }
        },
        // 设置窗口位置
        setPosition: function (id, position) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform) {
                var _position = that.compileLayxPosition(position);
                winform.area.left = _position.left;
                winform.area.top = _position.top;
                layxWindow.style.left = _position.left + "px";
                layxWindow.style.top = _position.top + "px";
            }
        },
        // 获取子框架window对象
        getChildContext: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id],
                iframeWindow = null;
            if (layxWindow && winform && winform.type === "url") {
                var iframe = layxWindow.querySelector(".layx-iframe");
                if (iframe) {
                    try {
                        iframeWindow = iframe.contentWindow;
                    } catch (e) { }
                }
            }
            return iframeWindow;
        },
        // 获取父框架window对象
        getParentContext: function (id) {
            var that = this;
            var iframeWindow = that.getChildContext(id);
            if (iframeWindow) {
                return iframeWindow.parent;
            }
            else {
                return null;
            }
        },
        // ================ 内置组件
        // 按钮配置参数
        defaultsButtons: {
            label: '确定',
            callback: function (id) {
            }
        },
        // 创建layx按钮
        createLayxButtons: function (buttons, id, isPrompt) {
            var that = this;

            var buttonPanel = document.createElement("div");
            buttonPanel.classList.add("layx-buttons");
            for (var i = 0; i < buttons.length; i++) {
                var buttonItem = document.createElement("button");
                var buttonConfig = layxDeepClone({}, that.defaultsButtons, buttons[i]);
                buttonItem.classList.add("layx-button-item");
                buttonItem.innerText = buttonConfig.label;
                buttonItem.callback = buttons[i].callback;
                buttonItem.onclick = function (e) {
                    if (Utils.isFunction(this.callback)) {
                        if (isPrompt === true) {
                            var textarea = that.getPromptTextArea(id);
                            this.callback(id, (textarea ? textarea.value : "").replace(/(^\s*)|(\s*$)/g, ""), textarea);
                        }
                        else {
                            this.callback(id);
                        }
                    }
                }
                buttonPanel.appendChild(buttonItem);
            }

            return buttonPanel;
        },
        // 消息框
        msg: function (msg, options) {
            var that = this;
            var winform = that.create(layxDeepClone({}, {
                id: 'layx-msg-' + Utils.rndNum(8),
                type: 'html',
                control: false,
                content: "<div class='layx-msg layx-flexbox layx-flex-center' style='height:83px;width:100%;'>" + msg + "</div>",
                autodestroy: 5000,
                width: 320,
                height: 85,
                minHeight: 85,
                stickMenu: false,
                minMenu: false,
                maxMenu: false,
                closeMenu: false,
                alwaysOnTop: true,
                resizable: false,
                movable: false,
                allowControlDbclick: false,
                position: [10, 'tc'],
                autodestroyText: false,
            }, that.options));

            //that.flicker(winform.id);
            return winform;
        },
        // 提示框
        alert: function (title, msg, yes, buttons, options) {
            var that = this,
                id = 'layx-alert-' + Utils.rndNum(8);

            // 创建button
            // 创建button
            if (!Utils.isArray(buttons)) {
                buttons = [
                    {
                        label: '确定',
                        callback: function (id) {
                            if (Utils.isFunction(yes)) {
                                yes(id);
                            }
                            else {
                                Layx.destroy(id);
                            }
                        }
                    }
                ];
            }
            var buttonElement = that.createLayxButtons(buttons, id);
            var winform = that.create(layxDeepClone({}, {
                id: id,
                title: title || "提示消息",
                icon: false,
                type: 'html',
                content: "<div class='layx-alert layx-flexbox layx-flex-center'>" + msg + "</div>",
                width: 352,
                height: 157,
                minHeight: 157,
                stickMenu: false,
                minMenu: false,
                minable: false,
                maxMenu: false,
                maxable: false,
                alwaysOnTop: true,
                resizable: false,
                allowControlDbclick: false,
                shadable: true,
                statusBar: buttonElement,
                position: 'ct',
            }, that.options));

            //that.flicker(winform.id);
            return winform;
        },
        // 询问框
        confirm: function (title, msg, yes, buttons, options) {
            var that = this,
                id = 'layx-confirm-' + Utils.rndNum(8);

            // 创建button
            if (!Utils.isArray(buttons)) {
                buttons = [
                    {
                        label: '确定',
                        callback: function (id) {
                            if (Utils.isFunction(yes)) {
                                yes(id);
                            }
                        }
                    },
                    {
                        label: '取消',
                        callback: function (id) {
                            Layx.destroy(id);
                        }
                    }
                ];
            }
            var buttonElement = that.createLayxButtons(buttons, id);
            var winform = that.create(layxDeepClone({}, {
                id: id,
                title: title || "询问消息",
                icon: false,
                type: 'html',
                content: "<div class='layx-confirm layx-flexbox layx-flex-center'>" + msg + "</div>",
                width: 352,
                height: 157,
                minHeight: 157,
                stickMenu: false,
                minMenu: false,
                minable: false,
                maxMenu: false,
                maxable: false,
                alwaysOnTop: true,
                resizable: false,
                allowControlDbclick: false,
                shadable: true,
                statusBar: buttonElement,
                position: 'ct',
            }, that.options));

            //that.flicker(winform.id);
            return winform;
        },
        // 获取prompt输入框对象
        getPromptTextArea: function (id) {
            var that = this,
                windowId = "layx-" + id,
                layxWindow = document.getElementById(windowId),
                winform = that.windows[id];
            if (layxWindow && winform && winform.type === "html") {
                var promptPanel = layxWindow.querySelector(".layx-prompt");
                if (promptPanel) {
                    var textarea = promptPanel.querySelector(".layx-textarea");
                    if (textarea) {
                        return textarea;
                    }
                }
            }
            return null;
        },
        // 输入框
        prompt: function (title, msg, yes, buttons, options) {
            var that = this,
                id = 'layx-prompt-' + Utils.rndNum(8);

            // 创建button
            if (!Utils.isArray(buttons)) {
                buttons = [
                    {
                        label: '确定',
                        callback: function (id, value, textarea) {
                            if (textarea && value.length === 0) {
                                textarea.focus();
                            }
                            else {
                                if (Utils.isFunction(yes)) {
                                    yes(id, value, textarea);
                                }
                            }
                        }
                    },
                    {
                        label: '取消',
                        callback: function (id, value, textarea) {
                            Layx.destroy(id);
                        }
                    }
                ];
            }
            var buttonElement = that.createLayxButtons(buttons, id, true);
            var winform = that.create(layxDeepClone({}, {
                id: id,
                title: title || "请输入信息",
                icon: false,
                type: 'html',
                content: "<div class='layx-prompt'><label>" + msg + "</label><textarea class='layx-textarea'></textarea></div>",
                width: 352,
                height: 200,
                minHeight: 200,
                stickMenu: false,
                minMenu: false,
                minable: false,
                maxMenu: false,
                maxable: false,
                alwaysOnTop: true,
                resizable: false,
                allowControlDbclick: false,
                shadable: true,
                statusBar: buttonElement,
                position: 'ct',
            }, that.options));

            //that.flicker(winform.id);
            return winform;
        },
        // 加载框
        load: function (id, msg, options) {
            var that = this;
            var loadElement = document.createElement("div");
            loadElement.classList.add("layx-load");
            loadElement.classList.add("layx-flexbox");
            loadElement.classList.add("layx-flex-center");
            loadElement.style.height = 83 + "px";
            loadElement.style.width = "100%";
            loadElement.innerHTML = msg;

            var dotCount = 0;
            var loadTimer = setInterval(function () {
                if (dotCount === 5) {
                    dotCount = 0;
                }
                ++dotCount;
                var dotHtml = "";
                for (var i = 0; i < dotCount; i++) {
                    dotHtml += ".";
                }
                loadElement.innerHTML = msg + dotHtml;
            }, 200);

            var winform = that.create(layxDeepClone({}, {
                id: id ? id : 'layx-load-' + Utils.rndNum(8),
                type: 'html',
                control: false,
                shadable: true,
                content: loadElement,
                width: 320,
                height: 85,
                minHeight: 85,
                stickMenu: false,
                minMenu: false,
                maxMenu: false,
                closeMenu: false,
                alwaysOnTop: true,
                resizable: false,
                movable: false,
                allowControlDbclick: false,
                position: 'ct',
            }, that.options));

            //that.flicker(winform.id);
            return winform;
        }
    };

    // 工具库
    var Utils = {
        // 是否boolean类型
        isBoolean: function (obj) {
            return typeof obj === "boolean";
        },
        // 是否string类型
        isString: function (obj) {
            return typeof obj === "string";
        },
        // 是否数值类型
        isNumber: function (obj) {
            return typeof obj === "number";
        },
        // 是否数组类型
        isArray: function (o) {
            return Object.prototype.toString.call(o) == '[object Array]';
        },
        // 是否一个方法类型
        isFunction: function (func) {
            return func && Object.prototype.toString.call(func) === '[object Function]';
        },
        // 判断是否是dom对象
        isDom: function (obj) {
            return (typeof HTMLElement === 'object') ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        },
        // 获取包含滚动条的浏览器可视区域
        innerArea: function () {
            return { width: window.innerWidth, height: window.innerHeight };
        },
        // 解析窗口传入的位置参数，并转化为 {left: top: }对象
        compileLayxPosition: function (width, height, position) {
            var that = this,
                postionOptions = ['ct', 'lt', 'rt', 'lb', 'rb', 'lc', 'tc', 'rc', 'bc'],
                innerArea = that.innerArea();

            var pos = { top: 0, left: 0 };
            if (that.isArray(position) && position.length === 2) {
                pos.top = that.isNumber(position[0]) ? position[0] : that.compileLayxPosition(width, height, position[0]).top;
                pos.left = that.isNumber(position[1]) ? position[1] : that.compileLayxPosition(width, height, position[1]).left;
            } else {
                position = postionOptions.indexOf(position.toString()) > -1 ? position.toString() : 'ct';
                switch (position) {
                    case 'ct':
                        pos.top = (innerArea.height - height) / 2;
                        pos.left = (innerArea.width - width) / 2;
                        break;
                    case 'lt':
                        pos.top = 0;
                        pos.left = 0;
                        break;
                    case 'rt':
                        pos.top = 0;
                        pos.left = innerArea.width - width;
                        break;
                    case 'lb':
                        pos.top = innerArea.height - height;
                        pos.left = 0;
                        break;
                    case 'rb':
                        pos.top = innerArea.height - height;
                        pos.left = innerArea.width - width;
                        break;
                    case 'lc':
                        pos.left = 0;
                        pos.top = (innerArea.height - height) / 2;
                        break;
                    case 'tc':
                        pos.top = 0;
                        pos.left = (innerArea.width - width) / 2;
                        break;
                    case 'rc':
                        pos.left = innerArea.width - width;
                        pos.top = (innerArea.height - height) / 2;
                        break;
                    case 'bc':
                        pos.top = innerArea.height - height;
                        pos.left = (innerArea.width - width) / 2;
                        break;
                }
            }
            return pos;
        },
        //产生随机数函数
        rndNum: function (n) {
            var rnd = "";
            for (var i = 0; i < n; i++)
                rnd += Math.floor(Math.random() * 10);
            return rnd;
        },
        // 解析传入的宽度或高度
        compileLayxWidthOrHeight: function (type, widthOrHeight, errorValue) {
            var that = this,
                innerArea = that.innerArea();
            if (/(^[1-9]\d*$)/.test(widthOrHeight)) {
                return Number(widthOrHeight);
            }
            if (/^(100|[1-9]?\d(\.\d\d?)?)%$/.test(widthOrHeight)) {
                var value = Number(widthOrHeight.toString().replace('%', ''));
                if (type === "width") {
                    return innerArea.width * (value / 100);
                }
                if (type === "height") {
                    return innerArea.height * (value / 100);
                }
            }
            return errorValue;
        },
        // 向上递归查找元素
        getNodeByClassName: function (node, className, parentWindow) {
            parentWindow = parentWindow || win;
            var that = this;
            if (node === parentWindow.document.body) {
                return null;
            }
            var cls = node.classList;
            if (cls.contains(className)) {
                return node;
            } else {
                return that.getNodeByClassName(node.parentNode, className);
            }
        },
        // 获取鼠标点击坐标
        getMousePosition: function (e) {
            e = e || window.event;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            return { 'x': x, 'y': y };
        }
    };

    // 拖曳大小类
    var LayxResize = function (handle, isTop, isLeft, lockX, lockY) {
        // 移动标识
        LayxResize.isResizing = false;
        // 判断是否第一次拖曳
        LayxResize.isFirstResizing = true;

        var drag = function (e) {
            e = e || window.event;
            // 只允许鼠标左键拖曳
            var button = e.button || e.which;
            if (button == 1 && e.shiftKey == false) {
                var moveMouseCoord = Utils.getMousePosition(e),
                    distX = moveMouseCoord.x - handle.mouseStartCoord.x,
                    distY = moveMouseCoord.y - handle.mouseStartCoord.y,
                    _top = handle.winform.area.top + distY,
                    _left = handle.winform.area.left + distX,
                    _height = isTop ? handle.winform.area.height - distY : handle.winform.area.height + distY,
                    _width = isLeft ? handle.winform.area.width - distX : handle.winform.area.width + distX;
                // 是否有任何移动操作
                if (distX !== 0 || distY !== 0) {
                    LayxResize.isResizing = true;
                    // 隐藏滚动条
                    document.body.classList.add('layx-body');

                    if (LayxResize.isFirstResizing === true) {
                        LayxResize.isFirstResizing = false;
                        // 解决鼠标拖出目标容器bug
                        var mousePreventDefault = document.createElement("div");
                        mousePreventDefault.classList.add("layx-mouse-preventDefault");
                        var main = handle.layxWindow.querySelector(".layx-main");
                        if (main) {
                            main.appendChild(mousePreventDefault);
                        }

                        // 绑定拖曳之前事件
                        if (Utils.isFunction(handle.winform.event.onresize.before)) {
                            var reval = handle.winform.event.onresize.before(handle.layxWindow, handle.winform);
                            if (reval === false) {
                                LayxResize.isResizing = false;
                                LayxResize.isFirstResizing = true;
                                document.onmouseup = null;
                                document.onmousemove = null;
                                return;
                            }
                        }
                    }
                    // 限制最小宽度
                    _width = Math.max(_width, handle.winform.area.minWidth);
                    // 显示最小最大左边距
                    if (isLeft) {
                        _left = Math.min(_left, handle.winform.area.left + handle.winform.area.width - handle.winform.area.minWidth);
                        _left = Math.max(0, _left);

                        _width = Math.min(_width, handle.winform.area.left + handle.winform.area.width);
                    } else {
                        _left = Math.min(_left, handle.winform.area.left);
                        _left = Math.max(handle.winform.area.left, _left);

                        _width = Math.min(_width, handle.innerArea.width - handle.winform.area.left);
                    }
                    // 限制最小高度
                    _height = Math.max(_height, handle.winform.area.minHeight);
                    // 显示最小最大上边距
                    if (isTop) {
                        _top = Math.min(_top, handle.winform.area.top + handle.winform.area.height - handle.winform.area.minHeight);
                        _top = Math.max(0, _top);

                        _height = Math.min(_height, handle.winform.area.top + handle.winform.area.height);
                    } else {
                        _top = Math.min(_top, handle.winform.area.top);
                        _top = Math.max(handle.winform.area.top, _top);

                        _height = Math.min(_height, handle.innerArea.height - handle.winform.area.top);
                    }
                    // 是否锁住Y轴
                    if (lockY) {
                        handle.layxWindow.style.width = _width + 'px';
                        handle.layxWindow.style.left = _left + 'px';
                    }
                    // 是否锁住X轴
                    if (lockX) {
                        handle.layxWindow.style.top = _top + 'px';
                        handle.layxWindow.style.height = _height + 'px';
                    }
                    if (lockY === false && lockX === false) {
                        handle.layxWindow.style.width = _width + 'px';
                        handle.layxWindow.style.left = _left + 'px';
                        handle.layxWindow.style.top = _top + 'px';
                        handle.layxWindow.style.height = _height + 'px';
                    }

                    // 绑定拖曳中事件
                    if (Utils.isFunction(handle.winform.event.onresize.progress)) {
                        handle.winform.event.onresize.progress(handle.layxWindow, handle.winform);
                    }
                }
            }
        };

        var dragend = function (e) {
            e = e || window.event;
            document.onmouseup = null;
            document.onmousemove = null;
            // 只有发生移动才触发
            if (LayxResize.isResizing === true) {
                LayxResize.isResizing = false;
                LayxResize.isFirstResizing = true;
                // 移除鼠标拖动遮罩层
                var mousePreventDefault = handle.layxWindow.querySelector(".layx-mouse-preventDefault");
                if (mousePreventDefault) {
                    mousePreventDefault.parentElement.removeChild(mousePreventDefault);
                }

                // 更新窗口位置信息
                handle.winform.area.top = handle.layxWindow.offsetTop;
                handle.winform.area.left = handle.layxWindow.offsetLeft;
                handle.winform.area.width = handle.layxWindow.offsetWidth;
                handle.winform.area.height = handle.layxWindow.offsetHeight;

                // 恢复滚动条
                if (document.body.classList.contains("layx-body")) {
                    document.body.classList.remove('layx-body');
                }

                // 绑定拖曳之后事件
                if (Utils.isFunction(handle.winform.event.onresize.after)) {
                    handle.winform.event.onresize.after(handle.layxWindow, handle.winform);
                }
            }
        };

        var dragstart = function (e) {
            e = e || window.event;

            var layxWindow = Utils.getNodeByClassName(handle, 'layx-window', win);
            if (layxWindow) {
                var id = layxWindow.getAttribute("id").substr(5),
                    winform = Layx.windows[id];
                if (winform) {
                    // 最小化不允许拖曳
                    if (winform.status !== "min" && winform.resizable === true) {
                        // 更新层级别
                        Layx.updateZIndex(id);
                        // 获取鼠标点击坐标
                        var mouseCoord = Utils.getMousePosition(e);
                        // 存储一开始的坐标
                        handle.mouseStartCoord = mouseCoord;
                        // 存储layxWindow Dom对象
                        handle.layxWindow = layxWindow;
                        // 存储winform对象
                        handle.winform = winform;
                        // 存储浏览器可视区域信息
                        handle.innerArea = Utils.innerArea();
                        // 禁止浏览器默认事件
                        e.preventDefault();
                        // 禁止冒泡
                        e.stopPropagation();

                        document.onmouseup = dragend;
                        document.onmousemove = drag;
                    }
                    else {
                        Layx.restore(id);
                    }
                }
            }
            return false;
        };
        handle.onmousedown = dragstart;
    };

    // 拖动类
    var LayxDrag = function (handle) {
        // 移动标识
        LayxDrag.isMoveing = false;
        // 判断是否第一次拖曳
        LayxDrag.isFirstMoveing = true;

        var drag = function (e) {
            e = e || window.event;
            // 只允许鼠标左键拖曳
            var button = e.button || e.which;
            if (button == 1 && e.shiftKey == false) {
                var moveMouseCoord = Utils.getMousePosition(e),
                    distX = moveMouseCoord.x - handle.mouseStartCoord.x,
                    distY = moveMouseCoord.y - handle.mouseStartCoord.y;
                // 是否有任何移动操作
                if (distX !== 0 || distY !== 0) {
                    LayxDrag.isMoveing = true;
                    // 隐藏滚动条
                    document.body.classList.add('layx-body');

                    if (LayxDrag.isFirstMoveing === true) {
                        LayxDrag.isFirstMoveing = false;
                        // 解决鼠标拖出目标容器bug
                        var mousePreventDefault = document.createElement("div");
                        mousePreventDefault.classList.add("layx-mouse-preventDefault");
                        var main = handle.layxWindow.querySelector(".layx-main");
                        if (main) {
                            main.appendChild(mousePreventDefault);
                        }

                        // 绑定移动之前事件
                        if (Utils.isFunction(handle.winform.event.onmove.before)) {
                            var reval = handle.winform.event.onmove.before(handle.layxWindow, handle.winform);
                            if (reval === false) {
                                LayxDrag.isMoveing = false;
                                LayxDrag.isFirstMoveing = true;
                                document.onmouseup = null;
                                document.onmousemove = null;
                                return;
                            }
                        }
                    }
                    var _left = handle.winform.area.left + distX;
                    var _top = handle.winform.area.top + distY;

                    // 判断窗口是否最大化状态
                    if (handle.winform.status === "max") {
                        // 计算鼠标对应比例
                        if (moveMouseCoord.x < handle.winform.area.width / 2) {
                            _left = 0;
                        } else if (moveMouseCoord.x > handle.winform.area.width / 2 && moveMouseCoord.x < handle.innerArea.width - handle.winform.area.width) {
                            _left = moveMouseCoord.x - handle.winform.area.width / 2;
                        } else if (handle.innerArea.width - moveMouseCoord.x < handle.winform.area.width / 2) {
                            _left = handle.innerArea.width - handle.winform.area.width;
                        } else if (handle.innerArea.width - moveMouseCoord.x > handle.winform.area.width / 2 && moveMouseCoord.x >= handle.innerArea.width - handle.winform.area.width) {
                            _left = moveMouseCoord.x - handle.winform.area.width / 2;
                        }

                        // 更新现在窗口坐标信息
                        _top = 0;
                        handle.winform.area.top = 0;
                        handle.winform.area.left = _left;
                        // 恢复窗口
                        Layx.restore(handle.winform.id);
                    }

                    // 计算限制信息
                    // 方向限制
                    handle.winform.moveLimit.horizontal === true && (_left = handle.winform.area.left);
                    handle.winform.moveLimit.vertical === true && (_top = handle.winform.area.top);
                    // 拖出限制
                    handle.winform.moveLimit.leftOut === false && (_left = Math.max(_left, 0));
                    handle.winform.moveLimit.rightOut === false && (_left = Math.min(_left, handle.innerArea.width - handle.winform.area.width));
                    handle.winform.moveLimit.bottomOut === false && (_top = Math.min(_top, handle.innerArea.height - handle.winform.area.height));

                    // 禁止拖出顶部
                    _top = Math.max(_top, 0);
                    // 禁止完全拖出底部
                    _top = Math.min(handle.innerArea.height - 15, _top);

                    // 设置移动
                    handle.layxWindow.style.left = _left + "px";
                    handle.layxWindow.style.top = _top + "px";

                    // 绑定移动中事件
                    if (Utils.isFunction(handle.winform.event.onmove.progress)) {
                        handle.winform.event.onmove.progress(handle.layxWindow, handle.winform);
                    }
                }
            }
        };

        var dragend = function (e) {
            e = e || window.event;
            document.onmouseup = null;
            document.onmousemove = null;
            // 只有发生移动才触发
            if (LayxDrag.isMoveing === true) {
                LayxDrag.isMoveing = false;
                LayxDrag.isFirstMoveing = true;
                // 移除鼠标拖动遮罩层
                var mousePreventDefault = handle.layxWindow.querySelector(".layx-mouse-preventDefault");
                if (mousePreventDefault) {
                    mousePreventDefault.parentElement.removeChild(mousePreventDefault);
                }

                // 更新窗口位置信息
                handle.winform.area.top = handle.layxWindow.offsetTop;
                handle.winform.area.left = handle.layxWindow.offsetLeft;

                // 恢复滚动条
                if (document.body.classList.contains("layx-body")) {
                    document.body.classList.remove('layx-body');
                }

                // 判断是否拖到顶部了，顶部自动最大化
                if (handle.winform.area.top === 0 && handle.winform.status === "normal") {
                    handle.winform.area.top = handle.defaultArea.top;
                    handle.winform.area.left = handle.defaultArea.left;
                    Layx.max(handle.winform.id);
                }

                // 绑定移动之后事件
                if (Utils.isFunction(handle.winform.event.onmove.after)) {
                    handle.winform.event.onmove.after(handle.layxWindow, handle.winform);
                }
            }
        };

        var dragstart = function (e) {
            e = e || window.event;

            var layxWindow = Utils.getNodeByClassName(handle, 'layx-window', win);
            if (layxWindow) {
                var id = layxWindow.getAttribute("id").substr(5),
                    winform = Layx.windows[id];
                if (winform) {
                    // 最小化不允许拖动
                    if (winform.status !== "min" && winform.movable === true) {
                        // 更新层级别
                        Layx.updateZIndex(id);
                        // 获取鼠标点击坐标
                        var mouseCoord = Utils.getMousePosition(e);
                        // 存储一开始的坐标
                        handle.mouseStartCoord = mouseCoord;
                        // 存储layxWindow Dom对象
                        handle.layxWindow = layxWindow;
                        // 存储winform对象
                        handle.winform = winform;
                        // 存储浏览器可视区域信息
                        handle.innerArea = Utils.innerArea();
                        // 存储最一开始的位置信息
                        handle.defaultArea = layxDeepClone({}, winform.area);
                        // 禁止浏览器默认事件
                        e.preventDefault();
                        // 禁止冒泡
                        e.stopPropagation();

                        document.onmouseup = dragend;
                        document.onmousemove = drag;
                    }
                    else {
                        Layx.restore(id);
                    }
                }
            }
            return false;
        };
        handle.onmousedown = dragstart;
    };

    win.layx = {
        // 版本
        v: (function () {
            return Layx.version;
        })(),
        // 打开窗口
        open: function (options) {
            var winform = Layx.create(options);
            return winform;
        },
        // 获取窗口列表
        windows: function () {
            return Layx.windows;
        },
        // 获取当前窗口对象
        getWindow: function (id) {
            return Layx.windows[id];
        },
        // 关闭窗口
        destroy: function (id) {
            Layx.destroy(id);
        },
        // 窗口最大化
        max: function (id) {
            Layx.max(id);
        },
        // 设置标题
        setTitle: function (id, title, useFrameTitle) {
            Layx.setTitle(id, title, useFrameTitle);
        },
        // 闪烁窗口
        flicker: function (id) {
            Layx.flicker(id);
        },
        // 恢复窗口
        restore: function (id) {
            Layx.restore(id);
        },
        // 更新层级别
        updateZIndex: function (id) {
            Layx.updateZIndex(id);
        },
        // 更新最小化布局
        updateMinLayout: function () {
            Layx.updateMinLayout();
        },
        // 置顶切换
        stickToggle: function (id) {
            Layx.stickToggle(id);
        },
        // 设置窗口位置
        setPosition: function (id, position) {
            Layx.setPosition(id, position);
        },
        // 获取子框架window对象
        getChildContext: function (id) {
            return Layx.getChildContext(id);
        },
        // 获取父框架window对象
        getParentContext: function (id) {
            return Layx.getParentContext(id);
        },
        // 设置窗口内容，文本窗口有效
        setContent: function (id, content) {
            Layx.setContent(id, content);
        },
        // 设置iframe地址，iframe窗口有效
        setUrl: function (id, url) {
            Layx.setUrl(id, url);
        },
        // 关闭所有窗口
        destroyAll: function () {
            Layx.destroyAll();
        },
        // ================ 内置组件
        // 消息框
        msg: function (msg, options) {
            return Layx.msg(msg, options);
        },
        // 提示框
        alert: function (title, msg, yes, buttons, options) {
            return Layx.alert(title, msg, yes, buttons, options);
        },
        // 询问框
        confirm: function (title, msg, yes, buttons, options) {
            return Layx.confirm(title, msg, yes, buttons, options);
        },
        // 获取prompt输入框textarea对象
        getPromptTextArea: function (id) {
            return Layx.getPromptTextArea(id);
        },
        // 输入框
        prompt: function (title, msg, yes, buttons, options) {
            return Layx.prompt(title, msg, yes, buttons, options);
        },
        // 加载框
        load: function (id, msg, options) {
            return Layx.load(id, msg, options);
        }
    };

})(top, window, self);

; !(function (global) {
    var extend,
        _extend,
        _isObject;

    _isObject = function (o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    }

    _extend = function self(destination, source) {
        var property;
        for (property in destination) {
            if (destination.hasOwnProperty(property)) {

                if (_isObject(destination[property]) && _isObject(source[property])) {
                    self(destination[property], source[property]);
                }

                if (source.hasOwnProperty(property)) {
                    continue;
                } else {
                    source[property] = destination[property];
                }
            }
        }
    }

    extend = function () {
        var arr = arguments,
            result = {},
            i;
        if (!arr.length) return {};
        for (i = arr.length - 1; i >= 0; i--) {
            if (_isObject(arr[i])) {
                _extend(arr[i], result);
            }
        }
        arr[0] = result;
        return result;
    }
    global.layxDeepClone = extend;
})(window);
;
!
    (function (window) {
        var svgSprite = '<svg><symbol id="layx-icon-restore" viewBox="0 0 1157 1024"><path d="M1016.52185234 724.44050175L833.87364805 724.44050175 833.87364805 898.52098643 833.87364805 960.05279112 833.87364805 961.2211168 772.34184336 961.2211168 772.34184336 960.05279112 124.31068789 960.05279112 124.31068789 961.2211168 62.7788832 961.2211168 62.7788832 960.05279112 62.7788832 898.52098643 62.7788832 360.31241885 62.7788832 298.78061416 124.31068789 298.78061416 298.78061416 298.78061416 298.78061416 62.7788832 303.06447442 62.7788832 360.31241885 62.7788832 1016.52185234 62.7788832 1074.15923838 62.7788832 1078.05365615 62.7788832 1078.05365615 662.90869795 1078.05365615 724.44050175 1016.52185234 724.44050175ZM124.31068789 898.52098643L772.34184336 898.52098643 772.34184336 724.44050175 772.34184336 662.90869795 772.34184336 360.31241885 124.31068789 360.31241885 124.31068789 898.52098643ZM1016.52185234 124.31068789L360.31241885 124.31068789 360.31241885 298.78061416 772.34184336 298.78061416 833.87364805 298.78061416 833.87364805 360.31241885 833.87364805 662.90869795 1016.52185234 662.90869795 1016.52185234 124.31068789Z"  ></path></symbol><symbol id="layx-icon-default-icon" viewBox="0 0 1024 1024"><path d="M891.88743395 61.93952995L132.11256605 61.93952995c-38.92547129 0-70.60411733 31.65534435-70.60411734 70.5924665L61.50844871 891.46800355c0 38.91382045 31.67864605 70.59246649 70.60411734 70.5924665l759.7748679 0c38.92547129 0 70.60411733-31.67864605 70.60411734-70.5924665L962.49155129 132.53199645C962.49155129 93.59487431 930.81290525 61.93952995 891.88743395 61.93952995zM844.02576498 142.29540409c16.71896178 0 30.25724302 13.54993209 30.25724302 30.26889386 0 16.70731093-13.53828125 30.25724302-30.25724302 30.25724303s-30.25724302-13.54993209-30.25724303-30.25724303C813.76852195 155.84533618 827.3068032 142.29540409 844.02576498 142.29540409zM735.60300658 142.29540409c16.71896178 0 30.25724302 13.54993209 30.25724302 30.26889386 0 16.70731093-13.53828125 30.25724302-30.25724302 30.25724303s-30.25724302-13.54993209-30.25724303-30.25724303C705.34576355 155.84533618 718.8840448 142.29540409 735.60300658 142.29540409zM881.80945351 881.37837227L142.19054649 881.37837227 142.19054649 277.92288427l739.60725618 0L881.79780267 881.37837227zM758.85809209 638.26020125l-0.01165084-180.19196018 90.09598008 90.09598008L758.85809209 638.26020125zM265.15355875 638.26020125l-90.09598008-90.0959801 90.08432924-90.08432924L265.15355875 638.26020125z"  ></path></symbol><symbol id="layx-icon-min" viewBox="0 0 1024 1024"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z"  ></path></symbol><symbol id="layx-icon-max" viewBox="0 0 1024 1024"><path d="M75.74912227 948.24738475L75.74912227 75.75145131l872.50059037 0 0 872.49593344L75.74912227 948.24738475zM839.18786674 184.81446115L184.81213326 184.81446115l0 654.37573462 654.37573461 0L839.18786674 184.81446115z"  ></path></symbol><symbol id="layx-icon-destroy" viewBox="0 0 1024 1024"><path d="M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z"  ></path></symbol><symbol id="layx-icon-stick" viewBox="0 0 1024 1024"><path d="M863.92416068 184.3484319H160.07583932a50.27488011 50.27488011 0 0 1 0-100.5497602h703.84832136a50.27488011 50.27488011 0 0 1 0 100.5497602z m-50.27488007 804.39808157a50.22460522 50.22460522 0 0 1-35.69516489-14.57971521L512 708.21268254l-265.95411572 265.95411572A50.27488011 50.27488011 0 0 1 160.07583932 938.47163339V335.1730722a50.27488011 50.27488011 0 0 1 50.27488007-50.27488013h603.29856122a50.27488011 50.27488011 0 0 1 50.27488007 50.27488013v603.29856119a50.27488011 50.27488011 0 0 1-50.27488007 50.27488008z m-301.64928061-402.19904078a50.22460522 50.22460522 0 0 1 35.69516487 14.57971522L763.37440051 816.80642355V385.44795228H260.62559949v431.86122007l215.67923564-215.67923564A50.27488011 50.27488011 0 0 1 512 586.54747269z"  ></path></symbol></svg>';
        var script = function () { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }();
        var shouldInjectCss = script.getAttribute("data-injectcss");
        var ready = function (fn) {
            if (document.addEventListener) {
                if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                    var loadFn = function () {
                        document.removeEventListener("DOMContentLoaded", loadFn, false);
                        fn()
                    };
                    document.addEventListener("DOMContentLoaded", loadFn, false)
                }
            } else if (document.attachEvent) { IEContentLoaded(window, fn) }

            function IEContentLoaded(w, fn) {
                var d = w.document,
                    done = false,
                    init = function () {
                        if (!done) {
                            done = true;
                            fn()
                        }
                    };
                var polling = function () {
                    try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return }
                    init()
                };
                polling();
                d.onreadystatechange = function () {
                    if (d.readyState == "complete") {
                        d.onreadystatechange = null;
                        init()
                    }
                }
            }
        };
        var before = function (el, target) { target.parentNode.insertBefore(el, target) };
        var prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

        function appendSvg() {
            var div, svg;
            div = document.createElement("div");
            div.innerHTML = svgSprite;
            svgSprite = null;
            svg = div.getElementsByTagName("svg")[0];
            if (svg) {
                svg.setAttribute("aria-hidden", "true");
                svg.style.position = "absolute";
                svg.style.width = 0;
                svg.style.height = 0;
                svg.style.overflow = "hidden";
                prepend(svg, document.body)
            }
        }
        if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }
        ready(appendSvg)
    })(window);