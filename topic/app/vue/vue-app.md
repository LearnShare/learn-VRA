# Vue 应用

回顾一下 [Hello World](https://codesandbox.io/s/vra-vue-01hello-world-wdlpk) 的代码：

public/index.html:

```html
<div id="app"></div>
```

src/app.vue:

```js
<template>
  <HelloWorld msg="Hello World from Vue"/>
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

src/main.js:

```js
import { createApp } from 'vue';
import App from './app.vue';

createApp(App).mount('#app');
```

## createApp - 创建应用实例

参考 [Vue API: createApp](https://v3.cn.vuejs.org/api/global-api.html#createapp)。

```js
const app = createApp(rootComponent, rootProps?);
```

参数：

+ rootComponent: 需要渲染的根组件
+ rootProps: 传给根组件的 [props](./vue-props.vue) 参数（可选）

返回值为 Vue 应用实例，可以进行后续操作：

```js
import { createApp } from 'vue';
import root from './app.vue';

const app = createApp(root);

// 注册或检索全局组件
app.component('toggle-button', {
  // 组件配置
});

// 设置应用配置
app.config({
  // 应用配置
});

// 注册或检索全局指令
app.directive('datetime', {
  // 指令配置
});

// 注册全局 mixin
app.mixin({
  // mixin 配置
});
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
+ 添加全局指令、过滤器或过渡
+ 添加全局 mixin
+ 添加全局实例方法
+ 路由等第三方库

参考：

+ [Vue API: 应用 API](https://v3.cn.vuejs.org/api/application-api.html)
+ [Vue API: 应用配置](https://v3.cn.vuejs.org/api/application-config.html)
+ [Vue Guide: 自定义指令](https://v3.cn.vuejs.org/guide/custom-directive.html)
+ [Vue Guide: 插件](https://v3.cn.vuejs.org/guide/plugins.html)

## 继续阅读

+ 上一节: [应用配置和启动](../readme.md)
+ 下一节: [React 应用](../react/react-app.md)
