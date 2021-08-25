# 数据

Angular 组件内部的数据不需要特别的声明、修改和使用语法，只要是普通的类属性即可。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  template: `
    <button
        (click)="toggleChecked()">{{ checked ? 'ON': 'OFF' }}</button>
  `,
})
export class ToggleButtonComponent {
  // 声明
  checked: Boolean;

  constructor() {
    // 初始化
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked;
  }
}
```

## 继续阅读

+ 上一节: [props](../react/props.md)
+ 下一节: [@Input](./input.md)
