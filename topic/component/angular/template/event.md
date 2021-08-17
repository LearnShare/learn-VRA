# 事件

Angular 提供了事件绑定的功能，及创建和处理自定义事件的能力。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-event',
  templateUrl: './demo-event.component.html',
})
export class DemoEventComponent {
  count: number;

  constructor() {
    this.count = 0;
  }
}
```

```html
<div class="app-demo-event">
  <div>
    <span>count: {{ count }}&nbsp;</span>
    <button
        (click)="count = count + 1">Add 1</button>
  </div>
</div>
```

## (event)=""

`(event)=""` 用于监听 DOM 事件或组件自定义事件。

其属性名可以是 DOM 事件名或自定义事件名称，属性值可以是表达式、方法名称或方法调用语句：

```
// 直接执行表达式
(click)="count = count + 1"

// 调用事件处理方法
(click)="addOne()"
(input)="textChanged($event)"

// 过滤特定按键
(keyup.enter)="addItem()"
```

## 事件处理方法

**注意**：调用事件处理方法时，`(click)="addOne()"` 方法后的括号是必须的。

可以在模板中指定传给事件处理方法的参数，它们可以是：

+ `$event`: 代表了原始的 DOM 事件，或自定义事件的数据
+ 任意值
+ 任意变量

```html
<li
    *ngFor="let item of list; index as i"
    (click)="listItemOnClick($event, 'click', i)">{{ i }}: {{ item }}</li>
```

## 自定义事件

在模板中，事件绑定对 HTML 元素和自定义组件的语法和功能是基本一致的。

参考 [跨组件数据传递 - @Output]()。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/04.event>

在线预览: <https://codesandbox.io/s/vra-angular-04-event-57qyd>

## 继续阅读

+ 上一节: [循环](./for.md)
+ 下一节: [表单和双向绑定](./form.md)
