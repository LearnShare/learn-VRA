# Hello World

## 编写最小化的 Hello World

在上一节完成的代码基础上进行修改：

1. 生成 src/app/components/hello-world 模块
  ```bash
  ng generate component components/hello-world
  ```
2. 删除下列文件
  ```
  src/app/components/hello-world/hello-world.component.scss
  src/app/components/hello-world/hello-world.component.spec.ts
  src/app/app.component.scss
  src/app/app.component.spec.ts
  ```
3. 修改 hello-world.component.ts
  ```ts
  import {
    Component,
    Input,
  } from '@angular/core';

  @Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
  })
  export class HelloWorldComponent {
    @Input() msg = '';
  }
  ```
4. 修改 hello-world.component.html
  ```html
  <h1>{{ msg }}</h1>
  ```
5. 调整 app.component.ts
  ```ts
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  })
  export class AppComponent {
    title = 'vra-angular';

    helloMsg = 'Hello World from Angular';
  }
  ```
4. 调整 app.component.html
  ```html
  <div class="app">
    <app-hello-world
        [msg]="helloMsg"></app-hello-world>
  </div>
  ```

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/01.hello-world>

在线预览: <https://codesandbox.io/s/vra-angular-01hello-world-ixx3f>

## 继续阅读

+ 上一节: [项目结构](./vra-angular.md)
+ 下一节: [TypeScript](../../typescript/readme.md)
