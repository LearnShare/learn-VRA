# 创建基于 TypeScript 的 React 项目

## 创建项目

选择 [cra-template-typescript](https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript) 作为模板。

在工作目录执行以下命令，进入交互式创建流程：

```bash
create-react-app vra-react --template typescript
```

后续可以再进行一些代码风格的调整，并添加 ESLint 和 SCSS 支持。

## 添加 ESLint + Airbnb 的补充

1. 参考 [ESLint + Airbnb](../hello-world/vra-react-eslint.md) 安装和初始化 ESLint
2. 安装 eslint-config-airbnb-typescript
  ```bash
  npm install --save-dev eslint-config-airbnb-typescript
  ```
3. 修改 .eslintrc.json
  ```json
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base" // 添加这一行
  ],
  "parserOptions": {
    "project": [ // 添加这部分
      "./tsconfig.json"
    ],
    ...
  },
  "rules": {
    "import/extensions": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
  ```

运行 `npm start`（或 `npm run lint`），并根据 ESLint 提示修改各文件的问题。

## 运行和预览

```bash
cd vra-react

npm start
```

在浏览器中访问 <http://localhost:3000/> 即可。

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/02.typescript>

在线预览: <https://codesandbox.io/s/vra-react-02typescript-8c77j>

## 继续阅读

+ 上一节: [创建基于 TypeScript 的 Vue 项目](./vue.md)
+ 下一节: [应用配置和启动](../app/readme.md)
