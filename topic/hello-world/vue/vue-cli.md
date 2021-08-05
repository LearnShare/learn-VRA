# Vue CLI

+ <https://cli.vuejs.org/>
+ <https://cli.vuejs.org/zh/>

## 关于 @vue/cli

Vue CLI (`@vue/cli`) 是 Vue 的官方开发工具，它提供的主要功能：

+ Vue 项目的创建、执行、测试和编译
+ 基于 Webpack 的构建流程
+ 可通过插件扩展功能
+ 丰富的自定义配置选项

## 安装 @vue/cli

```bash
npm install -g @vue/cli
```

安装完成后，可以通过如下命令验证安装结果：

```bash
vue -V

# 或
# vue --version
```

更多命令：

```bash
# 查看环境信息
vue info

# 查看帮助
vue -h

# 创建项目
vue create project-name

# 添加插件和功能
vue add eslint

# 检查需要升级的插件
vue outdated

# 升级插件
vue upgrade
```

## 创建项目

在工作目录执行以下命令，进入交互式创建流程：

```bash
vue create cra-vue
```

在该流程中，可以使用键盘按键（`↑`、`↓`、`Space`、`Enter`）操作菜单。

按步骤选择配置：

1. 如果目录已存在，选择
  + Overwite: 覆盖已有内容
  + Merge: 与已有内容合并 √
2. 选择预定义的项目配置
  + Default (Vue 2)
  + Default (Vue 3)
  + Manually: 手动选择 √
3. 选择需要的功能
  + Choose Vue version √
  + Babel √
  + TypeScript
  + Progressive Web App (PWA) Support
  + Router √
  + Vuex √
  + CSS Pre-processors √
  + Linter / Formatter √
  + Unit Testing √
  + E2E Testing
4. 选择 Vue 版本
  + 2.x
  + 3.x √
5. 使用路由的历史模式
  + Y √
  + n
6. 选择 CSS 预处理器
  + Sass/SCSS (with dart-sass) √
  + Sass/SCSS (with node-sass)
  + Less
  + Stylus
7. 选择代码检查/格式化功能
  + ESLint with error prevention only
  + ESLint + Airbnb config √
  + ESLint + Standard config
  + ESLint + Prettier
8. 选择代码检查的行为
  + Lint on save √
  + Lint and fix on commit
9. 选择单元测试库
  + Mocha + Chai
  + Jest √
10. 选择配置文件的存放位置
  + In dedicated config files √
  + In package.json
11. 是否保存该项目配置
  + y Y
  + N
12. 保存为: vue3

## 运行和预览

```bash
cd vra-vue

npm run serve
```

在浏览器中访问 <http://localhost:8080/> 即可。

## 项目配置文件

参考 [Vue CLI: 配置参考](https://cli.vuejs.org/zh/config/)

在项目根目录创建 `vue.config.js` 文件，并在其中编写配置代码。

下面的例子给出了一些常用的配置：

```js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: { // 配置 Webpack
    resolve: {
      alias: {
        comp: resolve('src/components'),
      },
    },
  },
  devServer: {        // 配置 Webpack dev-server
    proxy: 'http://testapi.server.com',
  },
};
```

## 继续阅读

+ 上一节: [hello-world](../readme.md)
+ 下一节: [项目结构](./vra-vue.md)
