# Vue 应用

回顾一下 Hello World 的代码：

index.html:

``` html
<div id="app"></div>
```

src/app.vue:

``` vue
<template>
  <hello-world msg="Hello World from Vue" />
</template>

<script>
import HelloWorld from '@/components/hello-world.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
```

src/main.ts:

``` ts
import { createApp } from 'vue';

import App from './app.vue';

const app = createApp(App);

app.mount('#app');
```

## createApp - 创建应用实例

参考 [Vue API: createApp](https://cn.vuejs.org/api/application.html#createapp)。

```js
const app = createApp(rootComponent, rootProps?);
```

参数：

+ rootComponent: 需要渲染的根组件
+ rootProps: 传给根组件的 [props](./vue-props.vue) 参数（可选）

返回值为 Vue 应用实例，可以进行后续操作：

``` ts
import { createApp } from 'vue';
import root from './app.vue';

const app = createApp(root);

// 注册或检索全局组件
app.component('toggle-button', {
  // 组件配置
});

// 应用配置
app.config.*

// 注册或检索全局指令
app.directive('datetime', {
  // 指令配置
});

// 注册全局 mixin
app.mixin({
  // mixin 配置
});
// 建议使用组合式函数
```

## mount - 将根元素插入到 HTML 中

```js
app.mount(rootContainer);
```

参数：

+ rootContainer: DOM 元素或 CSS 选择器

## use - 使用插件

```js
app.use(plugin, ...options?)
```

插件的类型很广泛，通常有：

+ 添加全局方法或属性
+ 添加全局指令、mixin
+ 添加全局实例方法
+ 路由、UI 组件等第三方库

## 继续阅读

+ 上一节: [应用配置和启动](../readme.md)
+ 下一节: [路径别名](./vue-path.md)
