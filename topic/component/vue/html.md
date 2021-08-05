# HTML 和插值

在 Vue 模板中，可以编写任意符合语法的 HTML 内容。

除此之外，Vue 还提供了许多扩展语法。

## 插值

插值用于将文本内容添加到模板中。

```vue
<template>
  <h2>1. HTML</h2>
  <p>{{ msg }}</p>
  <p>a + b = {{ a + b }}</p>
  <p
      v-text="msg"></p>
  <p>{{ htmlContent }}</p>
  <p
      v-html="htmlContent"></p>
</template>

<script>
export default {
  name: 'DemoTemplate',
  data() {
    return {
      msg: 'value from data',
      htmlContent: '<strong>html content</strong>',
      a: 1,
      b: 2,
    };
  },
};
</script>
```

渲染出的 HTML:

```html
<h2>1. HTML</h2>
<p>value from data</p>
<p>a + b = 3</p>
<p>value from data</p>
<p>&lt;strong&gt;html content&lt;/strong&gt;</p>
<p><strong>html content</strong></p>
```

其中，`{{ msg }}` 将 data.msg 输出为文本内容，并插入到 HTML 中，`v-text="msg"` 的作用是完全一致的。

也可以在 `{{  }}` 中编写 JavaScript 语句，语句将完成执行，并输出文本内容。

但是无法将包含 HTML 代码的文本直接作为代码插入，它们最终也会输出为文本（`<>` 会被转换为字符实体）。

可以使用 `v-html` 指令将 HTML 代码插入到元素中，但需要特别注意这么做是否安全。
