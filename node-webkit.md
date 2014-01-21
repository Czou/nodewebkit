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


 
