# 跨组件数据传递

前面已经了解了跨组件传递数据的两种方式：

+ `props`（或 `@Input`）：可以从父组件向子组件传递各种类型的数据，甚至是方法和组件。
+ `ref`：可以从父组件中访问子组件的数据或方法。

跨组件传递数据的场景有很多：

+ 父组件 <=> 子组件
+ 祖先组件 <=> 后代组件（跨越多层父子关系）
+ 组件 <=> 兄弟组件（位于同一父组件内）
+ 组件树上的任意组件之间（拥有共同的祖先组件）

## 本节的子主题

+ Vue
  + [props](../component/vue/data/props.md)
  + [attrs](./vue/attrs.md)
  + slot
  + 自定义事件
  + Provide/Inject
  + 状态管理
+ React
  + [props](../component/react/props.md)
  + Context
  + 状态管理
+ Angular
  + [@Input](../component/angular/input.md)
  + 内容投影
  + @Output
  + 状态管理

## 继续阅读

+ 上一节: [ref 和 DOM](../ref/readme.md)
+ 下一节: