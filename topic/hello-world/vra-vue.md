# vra-vue 项目结构

## 项目结构

在[上一节](./vue-cli.md)中，我们使用 Vue CLI 创建并运行了了 `vra-vue` 项目。

来看一下项目的结构：

```
vra-vue/
  node_modules/
  public/
    favicon.ico
    index.html    // 页面入口
  src/
    assets/       // 图片、字体等资源
    components/   // Vue 组件
      HelloWorld.vue
    router/       // Vue Router 路由配置
    store/        // Vuex 状态管理配置
    views/        // 页面入口
      About.vue
      Home.vue
    App.vue       // Vue 根组件
    main.js       // 应用配置和启动
  tests/          // 测试代码
  .browserslistrc // Browserslist 配置
  .editorconfig   // EditorConfig 配置
  .eslintrc.js    // ESLint 配置
  .gitignore
  babel.config.js // Babel 配置
  jest.config.js  // Jest 配置
  LICENSE
  package-lock.json
  package.json
  README.md
```

## 代码风格调整

为了符合 [代码风格](../development-environment.md#代码风格) 的要求，进行如下调整：

1. 修改文件名及相关代码
  ```
  src/components/HelloWorld.vue => src/components/hello-world.vue
  src/views/About.vue => src/views/about.vue
  src/views/Home.vue => src/views/home.vue
  src/App.vue => src/app.vue
  ```
2. 修改 .editorconfig
  ```
  root = true

  [*.{js,vue,html,css,scss}]
  charset = utf-8
  indent_style = space
  indent_size = 2
  tab_width = 2
  end_of_line = lf
  trim_trailing_whitespace = true
  insert_final_newline = true
  max_line_length = 80
  ```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/00.vue-create>

在线预览: <https://codesandbox.io/s/vra-vue-00vue-create-d39hz>

## 继续阅读

+ 上一节: [Vue CLI](./vue-cli.md)
+ 下一节: [Hello World](./vue-hello-world.md)
