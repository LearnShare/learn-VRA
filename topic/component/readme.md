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
    + [HTML 和插值](./vue/html.md)
    + v-* - 指令
      + [属性绑定](./vue/bind.md)
      + [显示或隐藏元素](./vue/show-if-else.md)
      + [循环](./vue/for.md)
      + [事件](./vue/event.md)
      + [表单和双向绑定](./vue/form.md)
    + ref 和 DOM
  + [样式](./vue/style.md)
  + 数据
    + data
    + props
    + computed
  + 逻辑
    + 方法
    + watch
    + 生命周期
  + 内置特殊组件
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
  + 过渡和动画
  + 路由
  + 扩展阅读
    + 编程式的模板
    + JSX
    + Mixin
    + 组合式 API
    + 自定义指令
    + 插件
    + i18n
    + 服务端渲染
    + 测试
    + 部署