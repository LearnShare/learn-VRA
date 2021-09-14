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

有两点需要注意：

1. `<slot>` 元素本身不会被渲染，它会被完全替换掉。
2. 插入插槽中的模板只能访问父组件的作用域，因为它们仍然是父组件模板的一部分。

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

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/12.slot>

在线预览: <https://codesandbox.io/s/vra-vue-12-slot-pzzh3>

## 继续阅读

+ 上一节: [attrs](./attrs.md)
+ 下一节:
