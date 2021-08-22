# vra-angular 项目结构

## 项目结构

在[上一节](./angular-cli.md)中，我们使用 Angular CLI 创建并运行了了 `vra-angular` 项目。

来看一下项目的结构：

```
vra-angular
  node_modules/
  src/
    app/
      app-routing.module.ts // 路由配置
      app.component.html    // 组件模板
      app.component.scss    // 组件样式
      app.component.spec.ts // 组件测试代码
      app.component.ts      // 组件
      app.module.ts         // Angular 根模块
    assets/
    environments/
      environment.prod.ts
      environment.ts        // 环境变量配置
    favicon.ico
    index.html              // 页面入口
    main.ts                 // 应用配置和启动
    polyfill.ts
    styles.scss
    test.ts                 // 测试配置代码
  .browserslintrc           // Browserslist 配置
  .editorconfig             // EditorConfig 配置
  .gitignore
  angular.json              // Angular CLI 配置
  karma.conf.js             // Karma 配置
  package-lock.json
  package.json
  README.md
  tsconfig.app.json
  tsconfig.json             // TypeScript 配置
  tsconfig.spec.json
```

## 代码风格调整

为了符合 [代码风格](../development-environment.md#代码风格) 的要求，进行如下调整：

1. 修改 .editorconfig
  ```
  root = true

  [*.{js,ts,html,css,scss}]
  charset = utf-8
  indent_style = space
  indent_size = 2
  tab_width = 2
  end_of_line = lf
  trim_trailing_whitespace = true
  insert_final_newline = true
  max_line_length = 80
  ```

## 配置调整

1. [ESLint + Airbnb](./vra-angular-eslint.md)

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/00.ng-new>

在线预览: <https://codesandbox.io/s/vra-angular-00ng-new-lco36>

## 继续阅读

+ 上一节: [Angular CLI](./angular-cli.md)
+ 下一节: [Hello World](./angular-hello-world.md)