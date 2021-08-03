# 创建基于 TypeScript 的 Vue 项目

## 创建项目

在工作目录执行以下命令，进入交互式创建流程：

```bash
vue create cra-vue
```

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
  + TypeScript √
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
5. 使用基于类的组件语法
  + y Y
  + N
6. 使用 Babel 转换 TypeScript
  + Y √
  + n
7. 使用路由的历史模式
  + Y √
  + n
8. 选择 CSS 预处理器
  + Sass/SCSS (with dart-sass) √
  + Sass/SCSS (with node-sass)
  + Less
  + Stylus
9. 选择代码检查/格式化功能
  + ESLint with error prevention only
  + ESLint + Airbnb config √
  + ESLint + Standard config
  + ESLint + Prettier
10. 选择代码检查的行为
  + Lint on save √
  + Lint and fix on commit
11. 选择单元测试库
  + Mocha + Chai
  + Jest √
12. 选择配置文件的存放位置
  + In dedicated config files √
  + In package.json
13. 是否保存该项目配置
  + y Y
  + N
14. 保存为: vue3-ts

后续可以再进行一些代码风格的调整。

## 运行和预览

```bash
cd vra-vue

npm run serve
```

在浏览器中访问 <http://localhost:8080/> 即可。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/02.typescript>

在线预览: <https://codesandbox.io/s/vra-vue-02typescript-ipo2c>

## 继续阅读

+ 上一节: [TypeScript](./readme.md)
+ 下一节: [创建基于 TypeScript 的 React 项目](./react.md)
