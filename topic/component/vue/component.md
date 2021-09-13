# 创建、注册和使用组件

## 创建组件

### defineComponent - 根据配置创建组件

components/toggle-button.js:

```js
import {
  defineComponent,
} from 'vue/dist/vue.esm-bundler';

const ToggleButton = defineComponent({
  name: 'toggle-button',
  template: `
    <button
        @click="toggleChecked">{{ checked ? 'ON' : 'OFF' }}</button>
  `,
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
  },
});

export default ToggleButton;
```

`defineComponent` 用于创建组件：

```js
defineComponent(options)
```

`options` 参数代表了组件配置。

这里要注意引入的 Vue 版本：

+ `vue`: 默认版本，不支持运行时的模板编译，模板必须编译后才能运行
+ `vue/dist/vue.esm-bundler`: 支持运行时的模板编译

### 单文件组件

components/hello-world.vue:

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
```

参考 [单文件组件](./sfc.md)。

## 组件配置

组件配置可以包含以下属性或方法：

```js
{
  // 组件名称
  name: string;

  // 编译选项
  compilerOptions: {},

  // 局部定义的指令
  directives: {}

  // 局部定义的组件
  components: {}

  // mixins
  mixins: [],

  // 模板
  template: '',

  // 编程式的模板
  render() {
    return h();
  };

  // 组件事件定义
  emits: [] | {},

  // 组件参数
  props: {},

  // 是否继承非 props 属性
  inheritAttrs: true,

  // 组件内的数据
  data() {
    return {};
  },

  // 计算属性
  computed: {},

  // 侦听器
  watch: {}

  // provide/inject
  provide: {}
  inject: [] | {}

  // 组件方法
  methods: {}

  // 生命周期钩子方法

  // setup
  setup() {}

  // 其他自定义属性/方法
}
```

## 注册组件

目前我们了解了两种声明组件的方法：

+ 配置式组件
+ 单文件组件

这两种方式声明的组件在使用上并没有区别。

### 组件名

建议在组件名、组件注册和模板中均使用 `hello-world` 形式。

在引用模块/组件时使用 `HelloWorld` 形式。

### 局部注册

在组件中引用和注册其他组件，src/app.vue：

```vue
<template>
  <hello-world msg="Hello World from Vue"/>
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

components 属性中可以有不同的写法：

```js
import HelloWorld from '';
import ToggleButton from '';

components: {
  // 1. 指定注册别名
  `ni-hao`: HelloWorld,

  // 2. 直接使用模块（组件）名称注册
  ToggleButton,
},
```

**注意**：局部注册的组件只能在当前组件中使用，在子组件中并不可用。

### 全局注册

在应用中可以全局注册组件，src/main.js：

```js
import { createApp } from 'vue';

import ToggleButton from '@/components/toggle-button.js';
import App from './app.vue';

const app = createApp(App);

app.component('toggle-button', ToggleButton);

app.mount('#app');
```

全局注册的组件可以在应用内的其他任意组件中使用。

## 使用组件

注册组件之后，可以在模板中使用。

```vue
<template>
  <HelloWorld msg="HelloWorld" />
  <hello-world msg="hello-world" />
  <ni-hao msg="ni-hao"></ni-hao>
</template>

<script>
import HelloWorld from '@/components/hello-world.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'ni-hao': HelloWorld,
  },
};
</script>
```

对于不需要包含内容的组件，可以不写结束标签，但开始标签必须包含 `/>` 作为结束：

```vue
<hello-world msg="hello-world" />
```

对于需要包含文本内容或其他标签/组件的方式，参考 [\<slot\>]。

其中，使用不同名称注册的组件在模板中使用时有一些区别：

+ `HelloWorld`: 可以作为 `<HelloWorld>` 或 `<hello-world>` 使用
+ `hello-world`: 仅能作为 `<hello-world>` 使用

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/06.component>

在线预览: <https://codesandbox.io/s/vra-vue-06-component-b96f1>

## 继续阅读

+ 上一节: [组件](../readme.md)
+ 下一节: [单文件组件](./sfc.md)
