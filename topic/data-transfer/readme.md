# 跨组件数据传递

前面已经了解了跨组件传递数据的几种方式：

+ `props`（或 `@Input`）：可以从父组件向子组件传递各种类型的数据，甚至是方法和组件。
+ `$emit`（或 `@Output`）：可以通过事件从子组件向父组件传递数据
+ `ref`：可以从父组件中访问子组件的数据或方法。

跨组件传递数据的场景有很多：

+ 父组件 <=> 子组件
+ 祖先组件 <=> 后代组件（跨越多层父子关系）
+ 组件 <=> 兄弟组件（位于同一父组件内）
+ 组件树上的任意组件之间（拥有共同的祖先组件）

## 本节的子主题

<table>
  <thead>
    <tr>
      <th>子主题</th>
      <th>Vue</th>
      <th>React</th>
      <th>Angular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>props/@Input</td>
      <td>
        <a href="../component/vue/data/props.md">props</a>
      </td>
      <td>
        <a href="../component/react/props.md">props</a>
      </td>
      <td>
        <a href="../component/angular/input.md">@Input</a>
      </td>
    </tr>
    <tr>
      <td>attrs</td>
      <td>
        <a href="./vue/attrs.md">attrs</a>
      </td>
      <td>-</td>
      <td>
        <a href="./angular/attrs.md">attrs</a>
      </td>
    </tr>
    <tr>
      <td>slot</td>
      <td>
        <a href="./vue/slot.md">slot</a>
      </td>
      <td>
        <a href="./react/render-props.md">props.children 和 Render Props</a>
      </td>
      <td>
        <a href="./angular/ng-content.md">内容投影</a>
      </td>
    </tr>
    <tr>
      <td>自定义事件</td>
      <td>
        <a href="./vue/emit.md">$emit</a>
      </td>
      <td>
        <a href="./react/func-props.md">模拟事件语法</a>
      </td>
      <td>
        <a href="./angular/output.md">@Output</a>
      </td>
    </tr>
    <tr>
      <td>局部共享</td>
      <td>
        <a href="./vue/provide-inject.md">Provide/Inject</a>
      </td>
      <td>
        <a href="./react/context.md">Context</a>
      </td>
      <td>
        <a href="./angular/service.md">Service</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./state-management.md">状态管理</a>
      </td>
      <td>
        <a href="./vue/vuex.md">Vuex</a>
      </td>
      <td>
        <a href="./react/redux.md">Redux</a>
      </td>
      <td>
        <a href="./angular/ngrx.md">NgRx</a>
      </td>
    </tr>
  </tbody>
</table>

## 继续阅读

+ 上一节: [ref 和 DOM](../ref/readme.md)
+ 下一节: [路由](../router/readme.md)
