# 属性绑定

虽然可以在模板中使用 `{{ }}` 语法使用数据变量或 JavaScript 表达式，但该语法并不能在元素/组件属性中使用。

要完成这个操作，需要使用属性绑定指令。

## v-bind:attr (:attr)

```vue
<template>
  <h2>2. attr/class/style</h2>
  <button
      v-bind:id="submitBtnId"
      :disabled="!submitBtnEnabled">Submit</button>
  <button
      :class="{
        large: isLarge,
      }">Button</button>
  <button
      :class="btnClasses">Primary</button>
  <div
      :style="divStyle"></div>
</template>

<script>
export default {
  name: 'DemoTemplate',
  data() {
    return {
      // 2. attr/class/style
      submitBtnId: 'button-id',
      submitBtnEnabled: false,
      isLarge: true,
      btnClasses: {
        primary: true,
        large: false,
      },
      divStyle: {
        width: '100px',
        height: '50px',
        backgroundColor: '#AAF',
      },
    };
  },
};
</script>
```

渲染出的 HTML:

```html
<h2>2. attr</h2>
<button id="button-id" disabled="">Submit</button>
<button class="large">Button</button>
<button class="primary">Primary</button>
<div style="width: 100px; height: 50px; background-color: rgb(170, 170, 255);"></div>
```

`v-bind` 的语法：

```
// 绑定组件数据
v-bind:href="imgUrl"
v-bind:disabled="btnDisabled"

// 绑定表达式
v-bind:title="user.name"
v-bind:tabindex="`item-${index}`"

// 绑定动态属性
v-bind:[key]="value"

// 可以简写为
:attr="value"
:[key]="value"

// 绑定 class
:class="['button', 'primary']"
:class="{
  large: isLarge,
}"
:class="['button', {
  large: isLarge,
}]"
:class="btnClasses"

// 绑定 style
:style="{
  width: '100px',
  fontSize: '16px',
}"
:style="styleObject"
:style="[styleA, styleB]"
```

+ 如果绑定的值为 `null` 或 `undefined`，该属性将不会出现在渲染结果中。
+ 当在组件上绑定 class 属性时，绑定的值会和组件根元素的 class 属性合并。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/03.template>

在线预览: <https://codesandbox.io/s/vra-vue-03-template-lqm4l>

## 继续阅读

+ 上一节:
+ 下一节:
