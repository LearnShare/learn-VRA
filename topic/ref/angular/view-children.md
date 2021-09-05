# @ViewChildren

在 [模板变量](./ref.md) 中我们已经尝试了 `@ViewChild` 装饰器，可以用它获取模板变量对应的 HTML 元素或组件实例。

Angular 还提供了 `@ViewChildren` 装饰器，用于获取全部匹配的元素或组件。

```html
<div class="demo-view-children">
  <ul>
    <li
        *ngFor="let item of list"
        #listItem>{{ item }}</li>
  </ul>
</div>
```

```ts
import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
})
export class DemoViewChildrenComponent
    implements AfterViewInit {
  list: Array<string>;
  @ViewChildren('listItem') listItems!: QueryList<any>;

  constructor() {
    this.list = [
      'red',
      'green',
      'blue',
    ];
  }

  ngAfterViewInit() {
    this.listItems.forEach((item) => {
      console.log(item.nativeElement.textContent);
    });
  }
}
```

与 `@ViewChild` 不同的是，`@ViewChildren` 可以同时获取多个匹配的元素。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/08.ref>

在线预览: <https://codesandbox.io/s/vra-angular-08-ref-9rfgz>

## 继续阅读

+ 上一节: [TemplateRef](./template-ref.md)
+ 下一节:
