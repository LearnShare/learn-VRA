# vra-react SCSS + dart-sass

安装 dart-sass：

```bash
pnpm i -D sass
```

添加文件 `components/hello-world.scss`:

``` scss
h1 {
  color: red;
}
```

在 `hello-world.vue` 末尾添加下面的代码：

``` vue
<style
    scoped
    lang="scss"
    src="./hello-world.scss"></style>
```

运行并检查页面，文字应当显示为红色。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/02.sass>

## 继续阅读

+ 上一节: [ESLint + Airbnb](./vra-react-eslint.md)
+ 下一节: [Hello World](./react-hello-world.md)
