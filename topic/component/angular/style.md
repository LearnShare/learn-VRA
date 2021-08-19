# 样式

## 内联样式

在 [属性绑定](./template/bind.md) 中，我们已经了解了绑定元素属性的方法。

```ts
import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-demo-style',
  templateUrl: './demo-style.component.html',
  styleUrls: [
    './demo-style.component.scss',
  ],
})
export class DemoStyleComponent {
  color: string;
  fontSize: string;
  bgColor: string;

  styleString: string;
  styleObject: {
    [key: string]: any;
  };

  constructor() {
    this.color = '#AAF';
    this.fontSize = '150%';
    this.bgColor = '#CCF';

    const styles = [
      'font-size: 16px',
      'color: #F66',
    ];
    this.styleString = styles.join(';');
    this.styleObject = {
      'font-size': '16px',
      color: '#333',
    };
  }
}
```

```html
<div class="app-demo-style">
  <h2>1. inline style</h2>
  <p>
    <span
        [style.color]="color">single style rule</span>
    <span
        [style.font-size]="fontSize"> large </span>
    <span
        [style.backgroundColor]="bgColor">bgColor</span>
  </p>
  <p
      [style]="styleString">style string</p>
  <p
      [style]="styleObject">style object</p>
</div>
```

渲染出的 HTML：

```html
<div _ngcontent-rsd-c16="" class="app-demo-style">
  <h2 _ngcontent-rsd-c16="">1. inline style</h2>
  <p _ngcontent-rsd-c16="">
    <span _ngcontent-rsd-c16="" style="color: rgb(170, 170, 255);">single style rule</span>
    <span _ngcontent-rsd-c16="" style="font-size: 150%;"> large </span>
    <span _ngcontent-rsd-c16="" style="background-color: rgb(204, 204, 255);">bgColor</span>
  </p>
  <p _ngcontent-rsd-c16="" style="color: rgb(255, 102, 102); font-size: 16px;">style string</p>
  <p _ngcontent-rsd-c16="" style="color: rgb(51, 51, 51); font-size: 16px;">style object</p>
</div>
```

绑定 `style` 属性有两种语法：

+ `[style]=""`: 用于声明一条或多条 CSS 属性。属性值支持：
  + 一条或多条 CSS 属性声明文本，如 `fontSize: 16px; color: #F66;`
  + 属性声明对象，如 `{ 'font-size': '16px', color: '#333' }`
+ `[style.property-name]=""`: 用于指定单个 CSS 属性的值，如：
  + `[style.font-size]="fontSize"`
  + `[style.backgroundColor]="bgColor"`

其中，CSS 属性名可以使用 `font-size`，也可以使用 `fontSize`。

## 使用 class 关联样式

也可以使用 `class` 属性关联样式。

src/app/components/demo-style/demo-style.component.ts:

```ts
classString: string;
classList: Array<string>;
classObject: {
  [key: string]: any;
};

this.classString = 'info success';
this.classList = [
  'info',
  'warning',
];
this.classObject = [
  'info',
  'danger',
];
```

src/app/components/demo-style/demo-style.component.html:

```html
<h2>2. style with class</h2>
<p class="error">error message</p>
<p
    [class]="classString">class string</p>
<p
    [class]="classList">class list</p>
<p
    [class]="classObject">class object</p>
<button class="btn btn-primary">Bootstrap</button>
```

src/app/components/demo-style/demo-style.component.scss:

```scss
.error {
  color: red;
}
```

src/styles.scss:

```scss
@import "../node_modules/bootstrap/dist/css/bootstrap.css";

.info {
  padding: 6px 10px;
  font-size: 14px;
  line-height: 24px;

  &.success {
    background-color: #198754;
  }
  &.warning {
    background-color: #FFC107;
  }
  &.danger {
    background-color: #DC3545;
  }
}
```

渲染出的 HTML：

```html
<h2 _ngcontent-rsd-c16="">2. style with class</h2>
<p _ngcontent-rsd-c16="" class="error">error message</p>
<p _ngcontent-rsd-c16="" class="info success">class string</p>
<p _ngcontent-rsd-c16="" class="info warning">class list</p>
<p _ngcontent-rsd-c16="" class="danger info">class object</p>
<button _ngcontent-rsd-c16="" class="btn btn-primary">Bootstrap</button>
```

样式的来源可以是：

+ 组件中定义或引入的样式
+ 在 `src/styles.scss` 引入的全局样式或外部样式

## 使用其他语言

在使用 [Angular CLI: 创建项目](../../hello-world/angular/angular-cli.md) 时，可以选择使用 CSS 的方式。

## 样式作用域

在 `@Component(options)` 装饰器中，可以配置样式的封装策略。

参考：

+ [Angular Guide: 视图封装模式](https://angular.cn/guide/view-encapsulation)
+ [Angular API: Component](https://angular.cn/api/core/Component#encapsulation)
+ [Angular API: ViewEncapsulation](https://angular.cn/api/core/ViewEncapsulation)

```ts
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-demo-style',
  templateUrl: './demo-style.component.html',
  styleUrls: [
    './demo-style.component.scss',
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
```

编译后的 HTML 和 CSS：

```html
<style>
.error[_ngcontent-ksn-c16] {
  color: red;
}
</style>

<p _ngcontent-ksn-c16="" class="error">error message</p>
```

有三个可选值：

+ `ViewEncapsulation.Emulated`: 编译为局部作用域的样式，并通过特别的属性与元素关联（默认值）
+ `ViewEncapsulation.None`: 编译为全局样式
+ `ViewEncapsulation.ShadowDom`: 使用 Shadow DOM 封装样式（会影响外部样式的引用）

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/07.style>

在线预览: <https://codesandbox.io/s/vra-vue-07-style-kb1rs>

## 继续阅读

+ 上一节: [表单和双向绑定](./template/form.md)
+ 下一节:
