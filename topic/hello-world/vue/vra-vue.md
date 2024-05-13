# vra-vue 项目结构

## 项目结构

在[上一节](./vite.md)中，我们创建并运行了 `vra-vue` 项目。

来看一下项目的结构：

```
vra-vue/
  .vscode/        // vscode 相关配置
  .e2e/           // 端到端（Playwrite）相关配置和测试脚本
  node_modules/
  public/         // 静态文件目录
  src/
    assets/       // 图片及 CSS 资源
    components/   // 组件及测试代码
    router/       // Vue Router 路由配置
    store/        // Pinia 状态管理配置
    views/        // 页面
    App.vue       // Vue 根组件
    main.js       // 应用配置和启动代码
  .eslintrc.js    // ESLint 配置
  .gitignore
  env.d.ts
  index.html            // 页面入口
  package.json
  playwrite.config.ts   // Playwrite 配置文件
  pnpm-lock.yaml
  README.md
  tsconfig*.json        // TypeScript 配置文件
  vite.config.ts        // Vite 配置文件
  vitest.config.ts      // Vitest 配置文件
```

## 代码风格调整

为了符合 [代码风格](../development-environment.md#代码风格) 的要求，进行如下调整：

1. 修改文件名及相关代码
  1. 路径及文件名使用小写字母和 `-`
  2. 省略路径和文件名重复的部分（如 `views/HomeView.vue` -> `views/home.vue`）
2. 在根目录创建 .editorconfig 文件
  ```
  root = true

  [*.{js,ts,vue,html,css,scss}]
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

## 继续阅读

+ 上一节: [Vue CLI](./vue-cli.md)
+ 下一节: [Hello World](./vue-hello-world.md)
