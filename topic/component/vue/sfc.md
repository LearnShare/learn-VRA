# 单文件组件

单文件组件（single-file components）允许在一处编写模板、样式和 JavaScript 代码：

src/components/hello-world.vue:

```vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: String,
  },
};
</script>

<style>
h1 {
  font-size: 24px;
}
</style>
```

单文件组件的扩展名通常是 `.vue`，它最终会被编译为 JavaScript 代码，以及额外的 CSS 代码。

文件中可以包含三个部分：

```vue
<template>
  <!-- 模板 -->
</template>

<script>
// 脚本代码
</script>

<style>
// 样式
</style>
```

## <script>

脚本代码通常是 `JavaScript`，但也可以使用 `TypeScript`：

```vue
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>
```

在使用其他脚本语言时，需要通过 `lang` 属性指定语言的代号。

## <style>

关于样式部分，参考 [样式](./style.md)。

## 分离 JavaScript 和 CSS

如果模板、脚本和样式堆在一起会让你抓狂，或者一个文件中包含了几百上千行代码，也可以把 JavaScript 和 CSS 分离到单独的文件中：

```vue
<template>
  <!-- 模板 -->
</template>

<script
    src="./hello-world.js"></script>

<style
    src="./hello-world.css"></style>
```
