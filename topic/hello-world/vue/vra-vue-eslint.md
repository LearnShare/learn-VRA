# vra-vue 添加 ESLint + Airbnb

创建项目时应当已经选择并支持了 ESLint。

## 安装 Airbnb 规则

``` sh
pnpm i -D eslint-config-airbnb-base
```

## 更新 .eslintrc.cjs

``` js
  extends: [
    'airbnb-base',  // 添加这一行
  ],
  rules: {          // 根据项目风格，设置合适的规则
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
```

## 运行 ESLint

运行 `pnpm run lint`，并根据运行结果修改代码中的问题，或调整 ESLint 规则。

可以运行 `pnpm run lint --fix` 自动修复部分问题。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/01.hello-world>

## 继续阅读

+ 上一节: [项目结构](./vra-react.md)
+ 下一节: [SCSS + dart-sass](./vra-react-scss.md)
