# 显示或隐藏元素

类似于 Vue，Angular 也提供了用于控制元素显示或隐藏的指令。

## *ngIf=""

`*ngIf=""` 指令用于控制是否将元素/组件渲染到 HTML 中：

```html
<div>
  <span
      *ngIf="showItem">true</span>
  <span
      *ngIf="!showItem">false</span>
</div>
```

```ts
export class DemoTemplateComponent {
  showItem: boolean;

  constructor() {
    this.showItem = true;
  }
}
```

渲染出的 HTML：

```html
<div>
  <span>true</span>
  <!--bindings={
    "ng-reflect-ng-if": "true"
  }-->
  <!--bindings={
    "ng-reflect-ng-if": "false"
  }-->
</div>
```

当其属性值为非真值（`false` `null` `undefined` `''` `0` 等）时，所在元素将不会出现在 HTML 中。

**提示**：类似于下面的注释信息仅出现在开发模式中，编译后的版本会省略详情：

```html
<!--bindings={
  "ng-reflect-ng-if": "true"
}-->
```

## [ngSwitch]="" | *ngSwitchCase | *ngSwitchDefault

`[ngSwitch]=""` 指令用于执行数据匹配逻辑。

```html
<div
    [ngSwitch]="selectedItem">
  <span
      *ngSwitchCase="'A'">selected value is A</span>
  <span
      *ngSwitchCase="'B'">selected value is B</span>
  <span
      *ngSwitchCase="'C'">selected value is C</span>
  <span
      *ngSwitchDefault>nothing selected</span>
</div>
```

```ts
export class DemoTemplateComponent {
  selectedItem: string;

  constructor() {
    this.selectedItem = 'B';
  }
}
```

渲染出的 HTML：

```html
<div ng-reflect-ng-switch="B">
  <!--bindings={
    "ng-reflect-ng-switch-case": "A"
  }-->
  <span>selected value is B</span>
  <!--bindings={
    "ng-reflect-ng-switch-case": "B"
  }-->
  <!--bindings={
    "ng-reflect-ng-switch-case": "C"
  }-->
  <!--container-->
</div>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/03.template>

在线预览: <https://codesandbox.io/s/vra-angular-03-template-nhqlb>

## 继续阅读

+ 上一节: [属性绑定](./bind.md)
+ 下一节: [循环](./for.md)
