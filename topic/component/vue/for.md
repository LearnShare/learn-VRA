# 循环

Vue 也提供了用于循环的指令，可以基于数组等数据重复渲染部分模板。

```vue
<template>
  <h2>4. for/key</h2>
  <ul>
    <li
        v-for="x in 3"
        :key="x">{{ x }}</li>
  </ul>
  <ol>
    <li
        v-for="(item, index) in forList"
        :key="index">{{ item.label }}</li>
  </ol>
  <div>
    <template
        v-for="(value, key, index) in forData"
        :key="value.id">
      <span>{{ `${key}: ${value.name}` }}</span>
      <br
          v-if="index < Object.keys(forData).length">
    </template>
  </div>
</template>

<script>
export default {
  name: 'DemoTemplate',
  data() {
    return {
      // 4. for/key
      forList: [
        {
          label: 'A',
        },
        {
          label: 'B',
        },
        {
          label: 'C',
        },
      ],
      forData: {
        x: {
          id: 0,
          name: 'X',
        },
        y: {
          id: 1,
          name: 'Y',
        },
        z: {
          id: 2,
          name: 'Z',
        },
      },
    };
  },
};
</script>
```

渲染出的 HTML:

```html
<h2>4. for/key</h2>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<ol>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ol>
<div>
  <span>x: X</span>
  <br>
  <span>y: Y</span>
  <br>
  <span>z: Z</span>
  <!--v-if-->
</div>
```

## v-for

`v-for` 用于重复渲染部分模板内容，其数据可以是数组、对象、数值、文本或其他可迭代数据：

```js
// 数值
v-for="number in 3" // 1 2 3

// 文本
v-for="char in 'abcd'" // a b c d

// 数组
// item: 数组成员
// index: 成员序号
v-for="item in list"
v-for="item of list"
v-for="(item, index) in list"

// 对象
// value: 对象中的值
// key: 对象中的 key
// index: 循环的序号（由于浏览器引擎的差异，输出的顺序可能存在差异）
v-for="value in dataObject"
v-for="(value, key) in dataObject"
v-for="(value, key, index) in dataObject"
```

`v-for` 中声明的局部变量可以在当前元素/组件，以及子元素/组件中使用：

```vue
<template
    v-for="(value, key, index) in forData"
    :key="value.id">
  <span>{{ `${key}: ${value.name}` }}</span>
  <br
      v-if="index < Object.keys(forData).length">
</template>
```

## :key

为了让 Vue 有效地跟踪 `v-for` 渲染出的每个元素，需要为元素添加 `key` 属性：

```vue
<li
    v-for="x in 3"
    :key="x">{{ x }}</li>

<li
    v-for="(item, index) in forList"
    :key="index">{{ item.label }}</li>
```

`key` 的值一般是数字或字符串，它可以来自：

+ 循环的值
+ 值的特殊字段，如 item.id
+ 循环的 key
+ 循环的序号

## \<template\>

可以使用 `<template>` 作为 `v-for` 的容器，这样渲染内部的元素和组件，避免了多余的嵌套元素：

```vue
<div>
  <template
      v-for="(value, key, index) in forData"
      :key="value.id">
    <span>{{ `${key}: ${value.name}` }}</span>
    <br
        v-if="index < Object.keys(forData).length">
  </template>
</div>
```

渲染出的 HTML:

```html
<div>
  <span>x: X</span>
  <br>
  <span>y: Y</span>
  <br>
  <span>z: Z</span>
  <!--v-if-->
</div>
```

## v-if

不建议在同一元素或组件上同时使用 `v-for` 和 `v-if`，因为此时 `v-if` 的优先级更高，无法访问 `v-for` 中的数据。

可以考虑在数据层面进行处理，或者借助 `<template>` 元素。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/04.event>

在线预览: <https://codesandbox.io/s/vra-vue-04-event-20q67>

## 继续阅读

+ 上一节: [显示或隐藏元素](./show-if-else.md)
+ 下一节: [事件](./event.md)
