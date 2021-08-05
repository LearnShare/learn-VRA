# vra-angular 添加 ESLint + Airbnb

+ <https://github.com/angular-eslint/angular-eslint/>

安装相关依赖：

```bash
ng add @angular-eslint/schematics

npm install --save-dev eslint-plugin-import eslint-config-airbnb-typescript
```

更新 .eslintrc.json:

```json
// overrides[*.ts]
"extends": [
  "plugin:@angular-eslint/recommended",
  "plugin:@angular-eslint/template/process-inline-templates",
  "airbnb-typescript/base" // 添加这一行
],
"rules": {
  "@angular-eslint/directive-selector": [
    "error",
    {
      "type": "attribute",
      "prefix": "app",
      "style": "camelCase"
    }
  ],
  "@angular-eslint/component-selector": [
    "error",
    {
      "type": "element",
      "prefix": "app",
      "style": "kebab-case"
    }
  ],
  "import/prefer-default-export": "off" // 添加这一行
}
```

运行 `ng lint`，并根据 ESLint 提示修改各文件的问题：

```
Linting "vra-angular"...

/src/app/app-routing.module.ts
   8:26  error  Missing trailing comma  @typescript-eslint/comma-dangle

/src/app/app.component.spec.ts
   9:28  error  Missing trailing comma        @typescript-eslint/comma-dangle
  12:21  error  Missing trailing comma        @typescript-eslint/comma-dangle
  23:6   error  Strings must use singlequote  @typescript-eslint/quotes

/src/app/app.component.ts
  6:38  error  Missing trailing comma  @typescript-eslint/comma-dangle

/src/app/app.module.ts
   9:17  error  Missing trailing comma  @typescript-eslint/comma-dangle
  13:21  error  Missing trailing comma  @typescript-eslint/comma-dangle
  16:28  error  Missing trailing comma  @typescript-eslint/comma-dangle

/src/environments/environment.prod.ts
  2:19  error  Missing trailing comma  @typescript-eslint/comma-dangle

/src/environments/environment.ts
  6:20  error  Missing trailing comma  @typescript-eslint/comma-dangle

/src/main.ts
  12:10  error    Expected parentheses around arrow function argument  arrow-parens
  12:17  warning  Unexpected console statement                         no-console

/src/polyfills.ts
  17:1   error  Expected exception block, space or tab after '/**' in comment  spaced-comment
  46:1   error  This line has a length of 102. Maximum allowed is 100          max-len
  48:1   error  This line has a length of 115. Maximum allowed is 100          max-len
  57:1   error  Expected exception block, space or tab after '/**' in comment  spaced-comment
  60:18  error  Multiple spaces found before '// Included wi...'               no-multi-spaces
  62:1   error  More than 1 blank line not allowed                             no-multiple-empty-lines
  63:1   error  Expected exception block, space or tab after '/**' in comment  spaced-comment

/src/test.ts
   7:32  error  Missing trailing comma  @typescript-eslint/comma-dangle
  20:34  error  Missing trailing comma  @typescript-eslint/comma-dangle

✖ 21 problems (20 errors, 1 warning)
  18 errors and 0 warnings potentially fixable with the `--fix` option.

Lint warnings found in the listed files.

Lint errors found in the listed files.
```

## 继续阅读

+ 上一节: [项目结构](./vra-angular.md)
+ 下一节: [Hello World](./angular-hello-world.md)
