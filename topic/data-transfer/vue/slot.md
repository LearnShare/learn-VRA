# slot 插槽

默认情况下，在成对组件标签内编写的任何内容都会被忽略掉：

hello-world.vue:

```vue
<template>
  <div class="hello-world"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>
```

demo-slot.vue:

```html
<hello-world>hi there</hello-world>
```

渲染出的 HTML：

```html
<div class="hello-world"></div>
```

Vue 提供了 `<slot>` 元素，用于接收组件标签内编写的其他内容。

## <slot>

`<slot>` 元素声明了一个“插槽”，用于接收组件标签内编写的其他内容，包括文本、HTML 元素或自定义组件：

default-slot.vue:

```html
<p>
  <slot></slot>
</p>
```

demo-slot.vue:

```html
<default-slot>hello slot</default-slot>
<default-slot>
  <strong>any</strong> <span>content</span>
</default-slot>
```

渲染出的 HTML：

```html
<p>hello slot</p>
<p>
  <strong>any</strong> <span>content</span>
</p>
```

类似于 `<template>` 元素，`<slot>` 元素本身不会被渲染，它会被完全替换掉。

## 默认内容

`<slot>` 元素中可以包含默认内容。当父组件未提供插槽中的内容时，默认内容将会渲染出来。

default-content.vue:

```html
<p>
  <slot>component default content</slot>
</p>
```

demo-slot.vue:

```html
<default-content></default-content>
```

渲染出的 HTML：

```html
<p>component default content</p>
```

## 命名插槽

有时候我们需要在一个组件中设置多个插槽，可以使用 `name` 属性对多个 `<slot>` 加以区分：

named-slot.vue:

```html
<div class="page-layout">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

demo-slot.vue:

```html
<named-slot>
  <template
      v-slot:header>
    <span>page header</span>
  </template>
  <template
      v-slot:default>
    <span>page body</span>
  </template>
  <template
      v-slot:footer>
    <span>page footer</span>
  </template>
</named-slot>
<named-slot>
  <span>abc</span>
  <template
      v-slot:footer>
    <span>page footer</span>
  </template>
  <span>123</span>
</named-slot>
```

渲染出的 HTML：

```html
<div class="page-layout">
  <header>
    <span>page header</span>
  </header>
  <main>
    <span>page body</span>
  </main>
  <footer>
    <span>page footer</span>
  </footer>
</div>
<div class="page-layout">
  <header></header>
  <main>
    <span>abc</span>
    <span>123</span>
  </main>
  <footer>
    <span>page footer</span>
  </footer>
</div>
```

其中：

+ `<template v-slot:header>` 中的内容将替换掉 `<slot name="header"></slot>`。
+ 未命名的 `<slot>` 将会具有默认名称 `default`。
+ 未指明目标插槽的内容，都会进入默认插槽中。

`<template v-slot:header>` 也可以缩写为 `<template #header>`。

## 访问子组件的数据

默认情况下，插入插槽中的模板只能访问父组件的作用域，因为它们仍然是父组件模板的一部分。

如果将子组件的数据绑定到 `<slot>` 上，就可以在父组件插入插槽中的模板内访问这些数据了：

slot-props.vue:

```vue
<template>
  <div class="slot-props">
    <slot
        :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotProps',
  data() {
    return {
      data: {
        name: 'abc',
        value: 123,
      },
    };
  },
};
</script>
```

demo-slot.vue:

```html
<child-data>
  <template
      #default="slotProps">
    <span>name: {{ slotProps.data.name }}, </span>
    <span>value: {{ slotProps.data.value }}</span>
  </template>
</child-data>
```

`<template #default="slotProps">` 是 `<template v-slot:default="slotProps">` 的缩写形式，默认插槽也可以写为 `<template v-slot="slotProps">` 形式。

`slotProps` 代表了子组件中绑定到 `<slot>` 上的 props，`data` 是其中的一个属性。也可以用解构语法编写：

```html
<template
    #default="{
      data,
    }">
```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/12.slot>

在线预览: <https://codesandbox.io/s/vra-vue-12-slot-pzzh3>

## 继续阅读

+ 上一节: [attrs](./attrs.md)
+ 下一节: [自定义事件](./emit.md)
