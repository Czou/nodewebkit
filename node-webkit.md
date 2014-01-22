node-webkit 开发环境搭建
====

##### node-webkit支持的操作系统类型：

* Linunx:32bit / 64bit
* Windows: win32
* Mac:32bit,10.7+

#### 开发环境
1，根据自己的操作系统下载响应的nw二进制文件，下载地址：<https://github.com/rogerwang/node-webkit>

2,建立基本开发目录，根据实际扩展

> ---- appName

> --------- node-module // 存放node插件

>---------- package.json // 此文件必须在根目录，配置文件

>---------- index.html

>---------- js

>---------- css

>---------- images

3，运行

`````js

cd appName

nw.exe

`````


####简单示例

1，在建立好的index.html中写入 Hello world

2，package.json中添加如下代码

``````js

{
   "main": "index.html",
   "name": "hello"
}

`````

3, 运行

````js

nw.exe

`````

#### package参数简单介绍

````js

{
    "main": "index.html",                              /* APP的主入口，文件名任意；必选 */

    "name": "nw-demo",                                /* APP的名称，必须具备唯一性，且符合正常变量命名；必选 */

    "description": "demo app of node-webkit",         /* APP的简单描述 */

    "version": "0.1.0",                               /* APP的版本号 */

    "keywords": [ "demo", "node-webkit" ],            /* APP的关键字，搜索APP时用到 */

    "window": {                                       /* APP的窗口属性 */

        "icon": "link.png",                           /* APP图标（windows下，状态栏上可见） */

        "toolbar": true,                              /* 是否显示工具栏 */

        "width": 800,                                 /* 窗口初始化大小 */

        "height": 500,

        "frame": true                                 /* 是否显示外窗体，如最大化、最小化、关闭按钮 */

    },

    "user-agent": "%name %ver %nwver %webkit_ver %osinfo" /* 可自定义APP的UA */
}

``````
