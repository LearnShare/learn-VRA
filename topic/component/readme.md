# 组件

## 认识组件

组件一般包含了下面几个部分：

+ 模板: 包含 HTML 元素或自定义组件，最终渲染为 HTML
+ 样式: 最终编译为 CSS，这部分是可选的
+ 数据和逻辑: 处理组件数据和交互逻辑的代码

关于组件：

+ 组件是 Vue、React 和 Angular 应用的基本组成单位。
+ 组件内可以包含其他组件，构成组件树。
+ 最先渲染到页面中的组件称为根组件。

## 本节的子主题

+ Vue
  + 创建、注册和使用组件
  + 单文件组件
  + 模板
    + <template> 元素
    + [HTML 和插值](./vue/html.md)
    + v-* - 指令
      + [属性绑定](./vue/bind.md)
      + [显示或隐藏元素](./vue/show-if-else.md)
      + [循环](./vue/for.md)
      + [事件](./vue/event.md)
      + [表单和双向绑定](./vue/form.md)
  + JSX
  + 数据
    + data
    + props
    + computed
  + 逻辑
    + 方法
    + watch
    + 生命周期
  + 跨组件数据传递
    + props 和 attr
    + 自定义事件
    + Provide/Inject
    + Vuex
  + 样式
