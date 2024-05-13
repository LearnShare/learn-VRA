# 模板引用

``` vue
<template>
  <h2>ref</h2>
  <input
      type="text"
      name="username"
      ref="usernameInput">
</template>

<script>
export default {
  name: 'DemoRef',
  mounted() {
    this.focus();
  },
  methods: {
    focus() {
      const {
        usernameInput,
      } = this.$refs;

      if (usernameInput) {
        usernameInput.focus();
      }
    },
  },
};
</script>
```

## ref="refName" 声明引用 ID

`ref` 属性用于指定引用的 ID，可以应用到 DOM 元素或自定义组件上，以获得 DOM 元素或组件实例的引用：

``` vue
<input
    type="text"
    name="username"
    ref="usernameInput">
<hello-world
    ref="helloworldComponent" />
```

+ 引用 ID（或引用名称）可以是 `refName` 或 `ref-name` 的形式（但建议仅使用 `refName` 形式，因为这样更方便访问和使用）。
+ 引用 ID 应当是唯一的。
+ 当存在多个同名的引用时，只有最后一个元素会被引用。

``` vue
<template>
  <ul>
    <li
        v-for="(item, index) in list"
        :key="index"
        ref="listItems">{{ item }}</li>
  </ul>
</template>

<script>
  list: [
    'A',
    'B',
    'C',
  ],

  this.$refs.listItems; // => <li>C</li>
</script>
```

在 Vue 2 中，`v-for` 中可以重复绑定引用 ID，引用的元素会保存至数组中。

但 [Vue 3 不再支持这种方式](https://v3.cn.vuejs.org/guide/migration/array-refs.html)，可以使用下面的方式手动处理。

### :ref="func" 手动处理引用

```vue
<template>
  <ul>
    <li
        v-for="(item, index) in list"
        :key="index"
        :ref="refItems">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'DemoRef',
  data() {
    return {
      list: [
        'A',
        'B',
        'C',
      ],
      listItems: [],
    };
  },
  mounted() {
    console.log(this.listItems);
  },
  methods: {
    refItems(el) {
      this.listItems.push(el);
    },
  },
};
</script>
```

`ref` 属性可以绑定一个方法 `:ref="refItems"`：

``` ts
refItems(el) {
  this.listItems.push(el);
},
```

该方法可以包含一个参数，代表当前的 DOM 元素或组件实例。

利用这种方法的一个例子：

``` vue
<template>
  <input
      type="password"
      name="password"
      :ref="autoHint" />
</template>

<script>
  autoHint(el) {
    el.setAttribute('placeholder', el.name);
  },
</script>
```

`autoHint` 方法会自动将 `input` 元素的 "name" 属性值作为占位文本。

**提示**：可以使用这种方式控制和处理子组件内部的元素或组件。比如获取子组件内部的 canvas 元素，并完成绘图操作。

## this.$refs - 访问元素/组件

`ref="refName"` 会在模板完成渲染后，自动绑定元素或组件到 `this.$refs.refName`。

``` vue
<template>
  <input
      type="text"
      name="username"
      ref="usernameInput" />

  <hello-world
      msg="hello"
      ref="helloWorldElement" />
  <button
      @click="mute">mute</button>
</template>

<script>
  focus() {
    const {
      usernameInput,
    } = this.$refs;

    if (usernameInput) {
      usernameInput.focus();
    }
  },
  mute() {
    const {
      helloWorldElement,
    } = this.$refs;

    if (helloWorldElement) {
      // 访问自定义组件的属性和方法
      console.log(helloWorldElement.msg);
      helloWorldElement.mute();
    }
  },
</script>
```

hello-world.vue:

``` vue
<template>
  <p>{{ muted ? '(muted)' : msg }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      muted: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    mute() {
      this.muted = true;
    },
  },
};
</script>
```

**注意**：引用的元素或组件仅在模板完成渲染后才能访问到，要特别注意访问他们的时机（生命周期钩子）。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/10.ref>

## 继续阅读

+ 上一节: [ref 和 DOM](./readme.md)
+ 下一节: [ref 和 DOM](./react-ref.md)
