# 状态管理

## 什么是状态管理

组件化开发让我们可以专注在组件内部的数据和逻辑，并尽可能减少外部环境的干扰。但这同样导致跨组件的数据共享和更新变得困难：

+ 使用 props/@Input 连续多级传递数据和方法比较麻烦
+ Provide-Inject/Service 共享的数据并非响应式的，组件不能方便地获得更新
+ Provide-Inject/Context 共享的数据和方法都集中在某个根组件中，导致组件逻辑复杂，代码量大大增加

状态管理是一种开发模式，它将需要共享的数据和数据更新逻辑放在一处集中管理，并向使用者提供获取和修改数据的方法，还会在数据更新后通知使用者。

## 你可能不需要状态管理

如果你的应用不算复杂，跨组件共享的数据和逻辑没有很多，或者你或其他项目成员无法很好地使用状态管理库，那么你可能不需要状态管理。

## Flux

[Flux](https://facebook.github.io/flux/) 是 Facebook 公开的一种数据流管理方式。在 Flux 中，数据流是单向的。

![Flux data flow](https://raw.githubusercontent.com/facebook/flux/main/examples/flux-concepts/flux-simple-f8-diagram-with-client-action-1300w.png)

Flux 中的核心概念：

+ `Store`: 数据
  + 数据保存在 Store 中
  + 数据不能被直接修改，仅能通过已注册的 Action 修改
  + 每次数据被修改后，都会触发 Store 的 "change" 事件
+ `View`: 视图
  + View 获取 Store 中的数据并完成后续操作（如内容渲染等）
  + View 必须订阅 Store 的 "change" 事件，并在每次数据更新之后，完成关联操作（如重新渲染）
  + 用户与 View 的交互会触发 Action
+ `Action`: 动作（类似于事件）
  + 用于触发 Dispatcher，并提供相关数据（payload）
+ `Dispatcher`: 分发
  + 接收 Action，并完成 Store 中数据的更新

Flux 本身有其官方实现 [flux](https://github.com/facebook/flux)，它也作为一种模式产生了许多类似的库：

+ [Redux](https://redux.js.org/)
+ [MobX](https://mobx.js.org/)
+ [VueX](https://next.vuex.vuejs.org/)

## 最佳实践

+ 状态管理应当只用来处理复杂的跨组件数据共享。
  如果应用逻辑不太复杂，Provide-Inject/Context/Service 能够满足需求，且代码易读易维护的时候，应当避免使用状态管理。
+ 状态管理应当只负责数据的存储、修改、共享和分发，不应该包含任何副作用、异步过程和其他多余操作。
  绝不能将接口请求、数据缓存等逻辑放在状态管理模块中。

## 本节的子主题

+ Vue
  + [VueX](./vue/vuex.md)
+ React
  + [Redux](./react/redux.md)
+ Angular
  + [NgRx](./angular/ngrx.md)
