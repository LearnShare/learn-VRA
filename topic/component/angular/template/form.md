# 表单和双向绑定

了解过前面的内容之后，我们已经可以在单个元素上绑定显示数据，并根据事件更新该数据：

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
})
export class DemoFormComponent {
  // 1. bind/event
  count: number;
  textValue: string;
  checked: boolean;

  constructor() {
    this.count = 0;
    this.textValue = 'hi';
    this.checked = true;
  }

  updateCount() {
    this.count += 1;
  }

  updateText(value: string) {
    this.textValue = value;
  }

  updateChecked(checked: boolean) {
    this.checked = checked;
  }
}
```

```html
<div class="app-demo-form">
  <h1>Form</h1>
  <h2>1. bind/event</h2>
  <button
      (click)="updateCount()">Count: {{ count }}</button>
  <p>textValue: {{ textValue }}</p>
  <input
      type="text"
      #input
      [value]="textValue"
      (input)="updateText(input.value)">
  <p>checked: {{ checked }}</p>
  <input
      type="checkbox"
      #checkbox
      [checked]="checked"
      (change)="updateChecked(checkbox.checked)">
</div>
```

但由于不同表单元素的数据/状态属性及更新事件并不相同，这种分别绑定数据和事件的操作有点麻烦。

Angular 提供了双向绑定的语法 `[(ngModel)]=""`，用于简化表单的数据绑定和事件监听。

## [(ngModel)]=""

`[(ngModel)]=""` 可以为表单元素创建数据的双向绑定。使用步骤：

1. 从 '@angular/forms' 中导入和使用 `FormsModule`：
  ```ts
  // app.module.ts
  import {
    FormsModule,
  } from '@angular/forms';

  @NgModule({
    imports: [
      FormsModule,
    ],
  })
  export class AppModule { }
  ```
2. 在表单元素中绑定数据
  ```html
  <input
      type="text"
      [(ngModel)]="textValue2" />
  ```

如果在 `<form>` 中的表单元素上使用双向绑定语法，可能会收到下面的错误提示：

>Error: If ngModel is used within a form tag, either the name attribute must be set or the form control must be defined as 'standalone' in ngModelOptions.
>
>Example 1: `<input [(ngModel)]="person.firstName" name="first">`  
>Example 2: `<input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`

建议使用第一种方式，为每个表单元素添加 `name` 属性。

更多表单元素的示例：

```ts
options: Array<string>;
form: {
  [key: string]: any;
};

this.options = [
  'A',
  'B',
  'C',
];
this.form = {
  username: 'admin',
  comment: 'it\'s nice',
  date: '2021-09-12',
  rememberMe: false,
  groups: [
    'C',
  ],
  group: 'B',
  picked: 'A',
};
```

```html
<ul>
  <li
      *ngFor="let item of form | keyvalue">{{ item.key }}: {{ item.value }}</li>
</ul>
<form
    (ngSubmit)="submitForm($event)">
  <h3>text</h3>
  <label>
    <span>input[type="text|password|number"]</span>
    <input
        type="text"
        name="username"
        [(ngModel)]="form.username" />
  </label>
  <label>
    <span>textarea</span>
    <textarea
        name="comment"
        [(ngModel)]="form.comment"></textarea>
  </label>
  <h3>date</h3>
  <label>
    <span>date</span>
    <input
        type="date"
        name="date"
        [(ngModel)]="form.date">
  </label>
  <h3>checkbox/radio & group</h3>
  <label>
    <span>checkbox</span>
    <input
        type="checkbox"
        name="rememberMe"
        [(ngModel)]="form.rememberMe">
  </label>
  <label>
    <span>radio group</span>
    <div
        *ngFor="let option of options">
      <input
          type="radio"
          name="group"
          [value]="option"
          [(ngModel)]="form.group">
      <span>{{ option }}</span>
    </div>
  </label>
  <label>
    <span>select</span>
    <select
        name="picked"
        [(ngModel)]="form.picked">
      <option
          *ngFor="let option of options"
          [value]="option">{{ option }}</option>
    </select>
  </label>
</form>
```

为了创建更复杂的表单逻辑，`@angular/forms` 提供了更丰富的功能，参考 [特殊组件和模式 - @angular/forms]。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/05.form>

在线预览: <https://codesandbox.io/s/vra-angular-05-form-ke5v4>

## 继续阅读

+ 上一节: [循环](./for.md)
+ 下一节: [样式](../style.md)
