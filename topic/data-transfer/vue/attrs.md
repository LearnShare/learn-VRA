# 非 props 的 Attribute

如果向组件传递一个属性，但它没有对应 props 或自定义事件，那该属性就是非 props 的 attribute。常见的例子有 `id` `class` 和 `style` 属性。

## Attribute 继承

如果组件返回单个根节点，非 props 的 attribute 属性将自动应用到根节点上。其中：

+ 传入的 `class` 和 `style` 值会和根节点已有的值合并。
+ 绑定的事件处理方法也会应用到根节点元素上。

single-root.vue:

```vue
<template>
  <div class="single-root">single-root-component</div>
</template>

<script>
export default {
  name: 'SingleRoot',
  props: {
    attrA: String,
  },
};
</script>
```

demo-attrs.vue:

```html
<template>
  <single-root
      attrA="A"
      attrB="B"
      id="x"
      class="y"
      style="color: red;"
      @click="childOnClick" />
</template>

<script>
import SingleRoot from './single-root.vue';

export default {
  name: 'DemoAttrs',
  components: {
    SingleRoot,
  },
  methods: {
    childOnClick(event) {
      console.log('click target: ', event.target);
      // click target: <div class="single-root y" ...
    },
  },
};
</script>

```

渲染出的 HTML：

```html
<div
    class="single-root y"
    attrb="B"
    id="x"
    style="color: red;">single-root-component</div>
```

可以看到：

1. `attrA` 没有渲染出来，因为它是 props 属性
2. `attrB` 渲染为 `attrb`，因为 HTML 属性名不区分大小写
3. 传入的 class 属性与根节点的 class 属性合并
4. 点击事件的目标是子组件的根节点

### $attrs

在组件中，可以使用 `this.$attrs` 访问传入的非 props attribute：

```js
mounted() {
  console.log(this.$attrs);
},

/*
{
  attrB: "B",
  class: "y",
  id: "x",
  onClick: ƒ (),
  style: {
    color: 'red'
  }
}
*/
```

### 禁用继承

可以在组件选项中关闭非 props attribute 的继承：

```js
{
  inheritAttrs: false,
}
```

## 多根节点组件的处理方式

如果组件返回多个根节点，非 props 的 attribute 将不会自动应用，而且会收到类似下面的警告信息：

>[Vue warn]: Extraneous non-props attributes (class) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.

这种情况下，需要手动将 `$attrs` 绑定到节点：

multiple-root.vue:

```html
<template>
  <div
      class="root-a">root-a</div>
  <div
      class="root-b"
      v-bind="$attrs">root-b</div>
</template>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/11.attrs>

在线预览: <https://codesandbox.io/s/vra-vue-11-attrs-15wwv>

## 继续阅读

+ 上一节: [跨组件数据传递](../readme.md)
+ 下一节:
