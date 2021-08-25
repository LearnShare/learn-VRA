# @Input

类似于 Vue/React 的 `props`，Angular 提供了用于声明组件外部数据的 `@Input` 装饰器：

```ts
import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <h1>{{ msg }}</h1>
  `,
})
export class HelloWorldComponent {
  @Input() msg = '';
}
```

定义为外部数据的属性在 Angular 中称作“输入属性”。

## 定义输入属性

`@Input` 装饰器可以将组件类的属性标记为输入属性：

```ts
// 定义属性、指定类型和初始值
@Input() msg: string = '';
// 也可以指定别名，供模板中使用
@Input('user-id') id = '';
```

## 传递数据

demo-parent.component.ts:

```ts
export class DemoParentComponent {
  msg: string;
  sizes: Array<string>;
  config: {
    [key: string]: any;
  };
  count: {
    value: number,
  };

  constructor() {
    this.msg = 'Hello';
    this.sizes = [
      'small',
      'medium',
      'large',
    ];
    this.config = {
      x: 1,
      y: 'B',
      z: false,
    };
    this.count = {
      value: 0,
    };
  }

  addNumber = (value: number) => {
    this.count.value += value;
  };
}
```

**注意**：传递给子组件的方法必须是 `func = () => {}` 这种形式。

demo-parent.component.html:

```html
<div class="demo-parent">
  <app-demo-children
      [numberValue]="12"
      [string-value]="msg"
      [list]="sizes"
      [config]="config"
      [count]="count.value"
      [func]="addNumber"></app-demo-children>
</div>
```

## 使用数据

demo-children.component.ts:

```ts
export class DemoChildrenComponent {
  @Input() numberValue = 0;
  @Input('string-value') stringValue = '';
  @Input() list: Array<string> = [];
  @Input() config: {
    [key: string]: any,
  } = {};
  @Input() count: number = 0;
  @Input() func: Function = () => {};

  add() {
    this.func(2);
  }
}
```

demo-children.component.html:

```html
<div class="demo-children">
  <p>numberValue: {{ numberValue }}</p>
  <p>stringValue: {{ stringValue }}</p>
  <p>list:</p>
  <ul>
    <li
        *ngFor="let item of list">{{ item }}</li>
  </ul>
  <p>config:</p>
  <ul>
    <li
        *ngFor="let item of config | keyvalue">{{ item.key }}: {{ item.value }}</li>
  </ul>
  <p>
    <span>count: {{ count }}&nbsp;</span>
    <button
        (click)="add()">+ 2</button>
  </p>
</div>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/07.data>

在线预览: <https://codesandbox.io/s/vra-angular-07-data-j98pj>

## 继续阅读

+ 上一节: [data](./data.md)
+ 下一节:
