# 模板变量

参考内容：

+ [Angular Guide: 模板变量](https://angular.cn/guide/template-reference-variables)
+ [Angular API: ViewChild](https://angular.cn/api/core/ViewChild)
+ [How to Use Template Reference Variables in Angular](https://www.pluralsight.com/guides/how-to-use-template-reference-variables-in-angular)
+ [Template Variables in Angular](https://blog.briebug.com/blog/template-variables-angular)

在 [事件](../component/angular/template/event.md) 一节中，我们已经尝试过模板变量了：

```html
<input
    type="text"
    #input
    (input)="textChanged2(input.value)">
```

`#input` 声明了名为 `input` 的模板变量，它代表了 `<input>` 元素。我们又在事件处理方法 `textChanged2` 中将 `input.value` 作为参数传入。

Angular 的模板变量可以引用以下类型：

+ DOM 元素
+ 组件实例
+ 指令
+ TemplateRef - 模板片段
+ Web Components

## 声明模板变量

可以在 HTML 元素或自定义组件上使用 `#refName` 声明名称为 `refName` 的模板变量：

```html
<input
    type="text"
    #input
    (input)="textChanged(input.value)">
<input
    type="password"
    name="password"
    #autoHint>
<app-hello-world
    #helloWorldRef
    msg="hello"></app-hello-world>
```

### @ViewChild - 获取模板变量

默认情况下，已声明的模板变量只能在模板中特定作用域内访问。

要在组件逻辑中访问模板变量，需要使用 `@ViewChild` 装饰器获取模板变量为组件属性：

```ts
import {
  ElementRef,
  ViewChild,
} from '@angular/core';

import { HelloWorldComponent } from '../hello-world/hello-world.component';

export class DemoRefComponent {
  // ElementRef - DOM 元素
  @ViewChild('autoHint') autoHint!: ElementRef;

  // HelloWorldComponent - 自定义元素
  @ViewChild('helloWorldRef') helloWorldRef!: HelloWorldComponent;
}
```

`@ViewChild` 装饰器内的参数就是模板变量的名称。

## 访问模板变量

模板变量既可以在模板中直接访问，也可以通过 `@ViewChild` 获取之后，在组件逻辑中访问。

### 在模板中访问

```html
<input
    type="text"
    #input
    (input)="textChanged(input.value)">
```

上面的例子中，我们在 `textChanged` 事件处理方法中传入了 `input.value` 作为参数。这里的 `input` 就是使用 `#input` 声明的模板变量。

在模板中，你可以在特定作用域内随意访问声明过的模板变量。作用域的边界包括：

+ 结构型指令（`*ngIf` `*ngFor`）
+ `<ng-template>` 元素

### 在组件逻辑中访问

```ts
ngAfterViewInit() {
  if (this.autoHint) {
    const {
      nativeElement,
    } = this.autoHint;

    nativeElement.setAttribute('placeholder', nativeElement.name);
  }
}

mute() {
  if (this.helloWorldRef) {
    console.log(this.helloWorldRef.msg);
    this.helloWorldRef.mute();
  }
}
```

**注意**：引用的元素或组件仅在模板完成渲染后才能访问到，要特别注意访问他们的时机（生命周期钩子）。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/08.ref>

在线预览: <https://codesandbox.io/s/vra-angular-08-ref-9rfgz>

## 继续阅读

+ 上一节: [ref 和 DOM](../readme.md)
+ 下一节: [TemplateRef](./template-ref.md)
