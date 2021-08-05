# vra-react 项目结构

## 项目结构

在[上一节](./create-react-app.md)中，我们使用 Create React App 创建并运行了了 `vra-react` 项目。

来看一下项目的结构：

```
vra-react/
  node_modules/
  public/
    favicon.ico
    index.html    // 页面入口
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.css
    App.js        // React 根组件
    App.test.js   // 组件测试代码
    index.css
    index.js      // 应用配置和启动
    logo.svg
    reportWebVitals.js
    setupTests.js
  .gitignore
  LICENSE
  package-lock.json
  package.json
  README.md
```

## 代码风格调整

为了符合 [代码风格](../development-environment.md#代码风格) 的要求，进行如下调整：

1. 修改文件名及相关代码
  ```
  src/App.* => src/app.*
  ```
2. 删除 src/reportWebVitals.js，并修改 src/index.js
3. 创建 .editorconfig
  ```
  root = true

  [*.{js,jsx,html,css,scss}]
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

1. [ESLint + Airbnb](./vra-react-eslint.md)
2. [SCSS + dart-sass](./vra-react-scss.md)

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/00.create-react-app>

在线预览: <https://codesandbox.io/s/vra-react-00create-react-app-34tb9>

## 继续阅读

+ 上一节: [Create React App](./create-react-app.md)
+ 下一节: [Hello World](./react-hello-world.md)
