# 内容投影

Angular 的内容投影功能与 Vue 中的插槽类似。

## 单插槽投影

组件中包含的唯一（且不包含 `select` 属性的） `<ng-content>` 元素会作为默认插槽，用于接收成对组件标签内编写的任何内容。

hello-world.component.html:

```html
<div class="hello-world">
  <ng-content></ng-content>
</div>
```

demo-slot.component.html:

```html
<app-hello-world>hi there</app-hello-world>
```

渲染出的 HTML：

```html
<div class="hello-world">hi there</div>
```

**注意**：`<ng-content>` 中不能包含任何内容，也就是不支持默认内容。

## 多插槽投影

组件中可以同时拥有多个插槽，每个插槽使用 `select` 属性匹配插入的内容。不包含 `select` 属性的插槽将作为默认插槽，将接收所有未匹配的内容。

multiple-slot.component.html:

```html
<div class="multiple-slot">
  <header>
    <ng-content
        select="[header]"></ng-content>
  </header>
  <main>
    <ng-content></ng-content>
  </main>
  <footer>
    <ng-content
        select="[footer]"></ng-content>
  </footer>
</div>
```

demo-slot.component.html:

```html
<app-multiple-slot>
  <nav
      header>header nav</nav>
  <span>body A </span>
  <div
      footer>footer content</div>
  <span>body B</span>
</app-multiple-slot>
```

渲染出的 HTML：

```html
<app-multiple-slot>
  <div class="multiple-slot">
    <header>
      <nav header="">header nav</nav>
    </header>
    <main>
      <span>body A </span>
      <span>body B</span>
      </main>
    <footer>
      <div footer="">footer content</div>
    </footer>
  </div>
</app-multiple-slot>
```

`select` 属性中可以使用标签名、属性、CSS 类和 `:not` 伪类的任意组合。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/10.ng-content>

在线预览: <https://codesandbox.io/s/vra-angular-10-ng-content-q415i>

## 继续阅读

+ 上一节: [attrs](./attrs.md)
+ 下一节:
