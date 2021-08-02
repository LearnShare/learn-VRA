# vra-react 添加 ESLint + Airbnb

+ <https://eslint.org/>
+ <https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672>

## 全局安装 ESLint

```bash
npm install -g eslint
```

安装完成后，可以通过如下命令验证安装结果：

```bash
eslint -v

# 或
# eslint --version
```

## 初始化配置文件

在 vra-react 目录中执行以下命令，进入i昂护士创建流程：

```bash
eslint --init
```

按步骤选择配置：

1. 选择 ESLint 的执行方式
  + To check syntax only
  + To check syntax and find problems √
  + To check syntax, find problems, and enforce code style
2. 选择模块语法
  + JavaScript modules (import/export) √
  + CommonJS (require/exports)
  + None of these
3. 选择项目使用的库
  + React √
  + Vue.js
  + None of these
4. 项目中是否使用 TypeScript
  + No √
  + YES
5. 代码的运行环境
  + Browser √
  + Node
6. 配置文件的格式
  + JavaScript √
  + YAML
  + JSON
7. 是否安装所需的插件
  + No
  + YES √

项目中生成了 .eslintrc.js 文件，内容如下：

```js
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
  }
};
```

两个相关依赖也已经安装：

```json
"devDependencies": {
  "eslint": "^7.32.0",
  "eslint-plugin-react": "^7.24.0"
}
```

## 安装 eslint-config-airbnb

```bash
npm install --save-dev eslint-config-airbnb
```

配置 .eslintrc.js：

```js
"extends": [
  "eslint:recommended",
  "plugin:react/recommended",
  "airbnb"
],

"rules": {
  "react/jsx-filename-extension": [
    1,
    {
      "extensions": [".js", ".jsx"]
    }
  ],
  "react/jsx-one-expression-per-line": "off"
}
```

添加 npm scripts：

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "lint": "eslint src/**/*.{js,jsx} --ignore-pattern src/**/*.test.js"
},
```

运行 `npm start`（或 `npm run lint`），并根据 ESLint 提示修改各文件的问题：

```
Failed to compile.

src\app.js
  Line 6:5:    'React' must be in scope when using JSX                      react/react-in-jsx-scope
  Line 7:7:    'React' must be in scope when using JSX                      react/react-in-jsx-scope
  Line 8:9:    'React' must be in scope when using JSX                      react/react-in-jsx-scope
  Line 9:9:    'React' must be in scope when using JSX                      react/react-in-jsx-scope
  Line 10:16:  'React' must be in scope when using JSX                      react/react-in-jsx-scope
  Line 12:9:   'React' must be in scope when using JSX                      react/react-in-jsx-scope

src\index.js
  Line 11:34:  Missing trailing comma  comma-dangle

src\reportWebVitals.js
  Line 1:25:  Expected parentheses around arrow function argument  arrow-parens
  Line 3:32:  Expected a line break after this opening brace       object-curly-newline
  Line 3:74:  Expected a line break before this closing brace      object-curly-newline

Search for the keywords to learn more about each error.
```

## 继续阅读

+ 上一节: [项目结构](./vra-react.md)
+ 下一节: [SCSS + dart-sass](./vra-react-scss.md)
