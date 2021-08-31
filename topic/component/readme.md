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

<table>
  <thead>
    <tr>
      <th>主题</th>
      <th>子主题</th>
      <th>Vue</th>
      <th>React</th>
      <th>Angular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">组件</td>
      <td>
        <a href="./vue/component.md">创建、注册和使用组件</a>
      </td>
      <td>
        <a href="./react/component.md">创建和使用组件</a>
      </td>
      <td>
        <a href="./react/angular.md">创建、注册和使用组件</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./vue/sfc.md">单文件组件</a>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td rowspan="6">模板</td>
      <td>HTML 和插值</td>
      <td>
        <a href="./vue/template/html.md">HTML 和插值</a>
      </td>
      <td rowspan="4">
        <a href="./react/jsx.md">JSX</a>
      </td>
      <td>
        <a href="./angular/template/html.md">HTML 和插值</a>
      </td>
    </tr>
    <tr>
      <td>属性绑定</td>
      <td>
        <a href="./vue/template/bind.md">属性绑定</a>
      </td>
      <td>
        <a href="./angular/template/bind.md">属性绑定</a>
      </td>
    </tr>
    <tr>
      <td>显示或隐藏元素</td>
      <td>
        <a href="./vue/template/show-if-else.md">显示或隐藏元素</a>
      </td>
      <td>
        <a href="./angular/template/if-switch.md">显示或隐藏元素</a>
      </td>
    </tr>
    <tr>
      <td>循环</td>
      <td>
        <a href="./vue/template/for.md">循环</a>
      </td>
      <td>
        <a href="./angular/template/for.md">循环</a>
      </td>
    </tr>
    <tr>
      <td>事件</td>
      <td>
        <a href="./vue/template/event.md">事件</a>
      </td>
      <td>
        <a href="./react/event.md">事件</a>
      </td>
      <td>
        <a href="./angular/template/event.md">事件</a>
      </td>
    </tr>
    <tr>
      <td>表单</td>
      <td>
        <a href="./vue/template/form.md">表单和双向绑定</a>
      </td>
      <td>
        <a href="./react/form.md">表单</a>
      </td>
      <td>
        <a href="./angular/template/form.md">表单和双向绑定</a>
      </td>
    </tr>
    <tr>
      <td colspan="2">样式</td>
      <td>
        <a href="./vue/style.md">样式</a>
      </td>
      <td>
        <a href="./react/style.md">样式</a>
      </td>
      <td>
        <a href="./angular/style.md">样式</a>
      </td>
    </tr>
    <tr>
      <td colspan="2" rowspan="4">
        <a href="./data.md">数据</a>
      </td>
      <td>
        <a href="./vue/data/reactivity.md">数据的响应性</a>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>
        <a href="./vue/data/data.md">data</a>
      </td>
      <td>
        <a href="./react/state.md">state</a>
      </td>
      <td>
        <a href="./angular/data.md">数据</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./vue/data/props.md">props</a>
      </td>
      <td>
        <a href="./react/props.md">props</a>
      </td>
      <td>
        <a href="./angular/input.md">@Input</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./vue/data/computed.md">computed</a>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="2" rowspan="3">
        <a href="./func.md">逻辑</a>
      </td>
      <td>
        <a href="./vue/func/methods.md">methods</a>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>
        <a href="./vue/func/watch.md">watch</a>
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>
        <a href="./vue/func/lifecycle.md">生命周期</a>
      </td>
      <td>
        <a href="./react/lifecycle.md">生命周期</a>
      </td>
      <td>
        <a href="./angular/lifecycle.md">生命周期</a>
      </td>
    </tr>
  </tbody>
</table>

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
    + [数据的响应性](./vue/data/reactivity.md)
    + [data](./vue/data/data.md)
    + [props](./vue/data/props.md)
    + [computed](./vue/data/computed.md)
  + 逻辑
    + [methods - 方法](./vue/func/methods.md)
    + [watch](./vue/func/watch.md)
    + [生命周期](./vue/func/lifecycle.md)
  + [ref - 模板引用](../ref/vue-ref.md)
  + 跨组件数据传递
    + 插槽
    + props 和 attr
    + 自定义事件
    + Provide/Inject
    + 状态管理
  + 特殊组件和模式
    + \<template\>
    + \<slot\>
    + \<teleport\>
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
  + [state](./react/state.md)
  + [props](./react/props.md)
  + 逻辑
    + [生命周期](./react/lifecycle.md)
  + [ref 和 DOM](../ref/react-ref.md)
  + 跨组件数据传递
    + props
    + Context
    + 状态管理
  + 特殊组件和模式
    + Suspense 和按需加载
    + Portal
    + 错误边界
    + 高阶组件
    + Profiler
    + StrictMode
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
    + [表单和双向绑定](./angular/template/form.md)
  + [样式](./angular/style.md)
  + 数据
    + [组件数据](./angular/data.md)
    + [@Input](./angular/input.md)
  + 逻辑
    + [生命周期](./angular/lifecycle.md)
  + [模板变量](../ref/angular-ref.md)
  + 跨组件数据传递
    + @Input
    + @Output
    + 内容投影
    + 状态管理
  + 特殊组件和模式
    + ng-container
    + ng-template
    + @angular/forms
    + 模块
    + 依赖注入
    + 指令
    + 服务
    + 管道
  + 路由
  + 网络请求
  + 动画
  + 扩展阅读
    + 测试
