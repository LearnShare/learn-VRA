# HTML 和插值

在 Angular 模板中，几乎可以编写一切符合语法的 HTML 内容。

除此之外，Angular 还提供了许多扩展语法。

## 插值

插值用于将文本内容添加到模板中。

src/app/components/demo-template/demo-template.component.html:

```html
<div class="app-demo-template">
  <h1>Angular Template</h1>
  <h2>1. HTML</h2>
  <p>{{ msg }}</p>
  <p>a + b = {{ a + b }}</p>
  <img
      src="{{ imgUrl }}"
      alt="Unsplash random image">
  <p
      [innerHTML]="htmlContent"></p>
</div>
```

src/app/components/demo-template/demo-template.component.ts:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html',
})
export class DemoTemplateComponent {
  msg: string;
  a: number;
  b: number;
  imgUrl: string;
  htmlContent: string;

  constructor() {
    this.msg = 'value from data';
    this.a = 1;
    this.b = 2;
    this.imgUrl = 'https://images.unsplash.com/photo-1629019625736-89ff131a723c?w=160&q=80';
    this.htmlContent = '<strong>html content</strong>';
  }
}
```

渲染出的 HTML：

```html
<div class="app-demo-template">
  <h1>Angular Template</h1>
  <h2>1. HTML</h2>
  <p>value from data</p>
  <p>a + b = 3</p>
  <img alt="Unsplash random image" src="https://images.unsplash.com/photo-1629019625736-89ff131a723c?w=160&amp;q=80">
  <p>
    <strong>html content</strong>
  </p>
</div>
```

其中，`{{ msg }}` 将 msg 属性输出为文本内容，并插入到 HTML 中。

也可以在 `{{  }}` 中编写 JavaScript 语句，语句将完成执行，并输出文本内容。

插值也可以应用到元素属性中，如 `src="{{ imgUrl }}"`。

但是无法将包含 HTML 代码的文本直接作为代码插入，它们最终也会输出为文本（`<>` 会被转换为字符实体）。

可以使用 `[innerHTML]="htmlContent"` 属性将 HTML 代码插入到元素中，但需要特别注意这么做是否安全。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/03.template>

在线预览: <https://codesandbox.io/s/vra-angular-03-template-nhqlb>

## 继续阅读

+ 上一节:
+ 下一节:
