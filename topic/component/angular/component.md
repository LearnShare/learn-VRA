# 创建、注册和使用组件

## 创建组件

src/app/components/toggle-button/toggle-button.component.ts:

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
  checked: Boolean;

  constructor() {
    this.checked = false;
  }

  toggleChecked() {
    this.checked = !this.checked;
  }
}
```

`@Component()` 是 `ToggleButtonComponent` 类的装饰器。它将类标记为 Angular 组件，并添加了额外的配置信息，如组件的选择器、模板和样式。

也可以使用 Angular CLI 提供的命令创建组件：

```bash
ng generate component components/toggle-button
```

但手动创建更加灵活可控一些。

## 组件配置

`@Component(options)` 接收一个参数，用于配置组件元数据：

```ts
{
  // 选择器名称（用于在模板中使用该组件，可选的）
  selector: '',

  // 输入参数（可选的）
  inputs: [],

  // 组件事件（可选的）
  outputs: [],

  // 组件模板（二选一，可选的）
  template: '', // 字符串形式的模板声明
  templateUrl: '', // 独立的模板文件

  // 组件样式（二选一，可选的）
  styles: [], // 字符串形式的样式声明
  styleUrls: [], // 独立的样式文件

  // 动画（可选的）
  animations: [],

  // 替换插值表达式的起止分界符（`{{` 和 `}}`，可选的）
  interpolation: [],

  // 是否保留空白字符（默认为 false，可选的）
  preserveWhitespaces: false,
}
```

## 注册组件

在 [Angular 应用](../../app/angular/angular-app.md)中，我们已经了解到根组件是通过跟模块渲染到页面中的，这是 Angular 应用的特点之一。

src/app/app.module.ts:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

1. 导入需要注册的组件类
2. 在 `@NgModule()` 装饰器的 `declarations` 字段中添加导入的类

__提示__：`ng generate component` 命令会自动完成组件的注册。

## 使用组件

组件注册完成后，就可以在当前模块的其他组件中使用了。

src/app/app.component.html:

```html
<div class="app">
  <app-toggle-button></app-toggle-button>
</div>
```

`<app-toggle-button>` 的标签名就是组件声明时定义的 `selector` 名称。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/02.component>

在线预览: <https://codesandbox.io/s/vra-angular-02-component-wusf3>

## 继续阅读

+ 上一节: [组件](../readme.md)
+ 下一节:
