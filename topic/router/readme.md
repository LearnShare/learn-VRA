# 路由

前端开发领域中的路由是指将 URL 映射到数据和 UI 的应用模式。

使用这种模式的前端应用通常只会有一个入口文件（index.html），并根据 URL 中的信息决定应用的数据和内容显示。这种前端应用称为单页面应用（single-page application，简称 SPA）。

URL 中可能包含的信息包括：

+ host: 应用的域名或 IP 地址
+ path/hash: 当前的路径
+ query: 查询参数

路由库一般会提供以下功能：

+ 声明式的路由配置
+ 基于路径的模式匹配和组件切换
+ 路由信息的获取
+ 基于 [History API](https://developer.mozilla.org/zh-CN/docs/Web/API/History) 的浏览历史操作
+ 路由跳转的跟踪和劫持
+ 模块按需加载

有一点需要牢记，路由的核心是：

>URL => data => UI

## 本节的子主题

+ [Vue Router](./vue-router.md)
+ React Router
+ @angular/router

## 继续阅读

+ 上一节: [跨组件数据传递](../data-transfer/readme.md)
+ 下一节:
