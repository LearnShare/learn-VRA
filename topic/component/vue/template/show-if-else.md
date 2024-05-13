# 显示或隐藏元素

Vue 提供了用于控制元素显示或隐藏的指令。

``` vue
<template>
  <h2>3. show/hide</h2>
  <div>
    <span
        v-show="showA">A</span>
    <br>
    <span
        v-if="showB">B</span>
    <span
        v-else>B not exist</span>
    <br>
    <span
        v-if="showItem === 'C'">C</span>
    <span
        v-else-if="showItem === 'D'">D</span>
    <span
        v-else>E</span>
  </div>
</template>

<script>
export default {
  name: 'DemoTemplate',
  data() {
    return {
      // 3. show/hide
      showA: false,
      showItem: 'D',
    };
  },
};
</script>
```

渲染出的 HTML:

``` html
<div>
  <span style="display: none;">A</span>
  <br>
  <span>B not exist</span>
  <br>
  <span>D</span>
</div>
```

## v-show

从上面的例子可以看出，`v-show` 指令控制了元素是否包含行内样式 `display: none;`，从而控制元素是否显示在页面中。

## v-if/v-else-if/v-else

与 JavaScript 中的 if/else-if/else 一致，但它们控制元素是否渲染到 HTML 中。

当需要通过隐藏元素来控制用户的操作权限时，建议使用 v-if/v-else-if/v-else 从 HTML 中完全移除相应元素。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/03.template>

## 继续阅读

+ 上一节: [属性绑定](./bind.md)
+ 下一节: [循环](./for.md)
