# 路径别名

## @

Vite 默认提供了名为 `@` 的路径别名，并将它映射到 `src` 路径：

``` js
alias: {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
},
```

因此，我们可以使用路径别名简化路径的书写，例如：

``` js
// 使用别名
import Button from '@/components/button/index.vue';
```

## 继续阅读

+ 上一节: [Vue 应用](./vue-app.md)
+ 下一节: [React 应用](../react/react-app.md)
