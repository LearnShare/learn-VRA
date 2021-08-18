# 循环

```html
<ul>
  <li
      *ngFor="let item of list">{{ item }}</li>
</ul>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html',
})
export class DemoTemplateComponent {
  list: Array<string>;

  constructor() {
    this.list = [
      'A',
      'B',
      'C',
    ];
  }
}
```

渲染出的 HTML：

```html
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
  <!--bindings={
    "ng-reflect-ng-for-of": "A,B,C"
  }-->
</ul>
```

## *ngFor

`*ngFor` 指令用于重复渲染部分模板内容，其数据可以是数组、对象或其他可迭代数据：

```ts
list: Array<string>;
data: {
  [key: string]: number;
};

this.list = [
  'A',
  'B',
  'C',
];
this.data = {
  x: 1,
  y: 2,
  z: 3,
};
```

```html
<ul>
  <li
      *ngFor="let item of list">{{ item }}</li>
</ul>
<ul>
  <li
      *ngFor="let item of list; index as i">{{ i }}: {{ item }}</li>
</ul>
<ul>
  <li
      *ngFor="let item of data | keyvalue">{{ item.key }}: {{ item.value }}</li>
</ul>
```

`index as i` 是为局部变量 `index` 指定别名 `i`，也可以写为 `let i = index` 的形式。`*ngFor` 提供了许多局部变量，请参考下一节。

` | keyvalue` 是一种管道语法，参考 [管道]。`keyvalue` 是 Angular 提供的内置管道之一，它用于将 Object 或 Map 转换为键值对数组（[{key, value}]）。

## 局部变量

`*ngFor` 指令提供了多个局部变量，方便对循环过程和子元素进行精确控制：

+ index: 当前索引
+ count: 可迭代对象的长度
+ first: 当前是否为首个元素
+ last: 当前是否为最后一个元素
+ even: 当前索引是否为偶数
+ odd: 当前索引是否为奇数

局部变量必须指定别名（`index as i`）或赋值给其他变量（`let i = index`）后才能使用。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/03.template>

在线预览: <https://codesandbox.io/s/vra-angular-03-template-nhqlb>

## 继续阅读

+ 上一节: [显示或隐藏元素](./if-switch.md)
+ 下一节: [事件](./event.md)
