# @Output

`@Output` 装饰器用于声明组件的事件属性。

事件属性应当是 `EventEmitter` 类型，可以调用 `emit()` 方法触发事件并提供附加数据。

toggle-button.component.ts:

```ts
import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

interface ChangeData {
  checked: Boolean;
}

@Component({
  selector: 'app-toggle-button',
  template: `
    <button
        (click)="toggleChecked()">{{ checked ? 'ON': 'OFF' }}</button>
  `,
})
export class ToggleButtonComponent {
  @Output() change = new EventEmitter<ChangeData>();

  checked: Boolean;

  constructor() {
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked;

    this.change.emit({
      checked: this.checked,
    });
  }
}
```

app.component.ts:

```ts
toggleOnChange(eventData: any) {
  console.log(eventData);
}
```

app.component.html:

```html
<app-toggle-button
    (change)="toggleOnChange($event)"></app-toggle-button>
```

绑定自定义事件的语法并么有什么特殊，只不过 `$event` 对应的不再是 DOM 事件，而是自定义方法发送的数据。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/11.output>

在线预览: <https://codesandbox.io/s/vra-angular-11-output-ut0d4>

## 继续阅读

+ 上一节: [内容投影](./ng-content.md)
+ 下一节:
