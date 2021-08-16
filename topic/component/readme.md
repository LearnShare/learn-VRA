# 组件

## 认识组件

组件是 Vue、React 和 Angular 中可复用的模块。它们类似于 HTML 元素，一般包含了下面几个部分：

+ 模板: 包含 HTML 元素或自定义组件，最终渲染为 HTML
+ 样式: 最终编译为 CSS，这部分是可选的
+ 数据和逻辑: 处理组件数据和交互逻辑的代码

关于组件：

+ 组件是 Vue、React 和 Angular 应用的基本组成单位。
+ 组件内可以包含其他组件，构成组件树。
+ 最先渲染到页面中的组件称为根组件。

## 本节的子主题

+ Vue
  + [创建、注册和使用组件](./vue/component.md)
  + [单文件组件](./vue/sfc.md)
  + 模板
    + [HTML 和插值](./vue/template/html.md)
    + v-* - 指令
      + [属性绑定](./vue/template/bind.md)
      + [显示或隐藏元素](./vue/template/show-if-else.md)
      + [循环](./vue/template/for.md)
      + [事件](./vue/template/event.md)
      + [表单和双向绑定](./vue/template/form.md)
  + [样式](./vue/style.md)
  + 数据
    + data
    + props
    + computed
  + 逻辑
    + 方法
    + watch
    + 生命周期
  + ref 和 DOM
  + 特殊组件和模式
    + \<template\>
    + \<slot\>
    + \<teleport\>
  + 跨组件数据传递
    + 插槽
    + props 和 attr
    + 自定义事件
    + Provide/Inject
    + 状态管理
  + 动态组件
  + 异步组件
  + 路由
  + 过渡和动画
  + 扩展阅读
    + 编程式的模板
    + JSX
    + Mixin
    + 组合式 API
    + 自定义指令
    + 插件
    + i18n
    + Web Components
    + 服务端渲染
    + 测试
    + 部署
+ React
  + [创建和使用组件](./react/component.md)
  + [JSX](./react/jsx.md)
    + [事件](./react/event.md)
    + [表单](./react/form.md)
  + [样式](./react/style.md)
  + state
  + props
  + 生命周期
  + ref 和 DOM
  + 特殊组件和模式
    + Suspense 和按需加载
    + Portal
    + 错误边界
    + 高阶组件
    + Profiler
    + StrictMode
  + 跨组件数据传递
    + props
    + Context
    + 状态管理
  + 路由
  + 扩展阅读
    + 编程式的模板
    + Hook
    + Web Components
    + 服务端渲染
    + 测试
+ Angular
  + [创建、注册和使用组件](./angular/component.md)
  + 模板
    + [HTML 和插值](./angular/template/html.md)
    + [属性绑定](./angular/template/bind.md)
    + [显示或隐藏元素](./angular/template/if-switch.md)
    + [循环](./angular/template/for.md)
    + [事件](./angular/template/event.md)
    + [表单](./angular/template/form.md)
  + 样式
  + 生命周期
  + ref 和 DOM
  + 特殊组件和模式
    + ng-container
    + ng-template
  + 模块
  + 依赖注入
  + 指令
  + 服务
  + 管道
  + 跨组件数据传递
    + @Input
    + @Output
    + 内容投影
    + 状态管理
  + 路由
  + 网络请求
  + 动画
  + 扩展阅读
    + 测试
