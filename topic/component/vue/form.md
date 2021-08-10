# 表单和双向绑定

了解过前面的内容之后，我们已经可以在单个元素上绑定显示数据，并根据事件更新该数据：

```vue
<template>
  <h1>Form</h1>
  <h2>1. bind/event</h2>
  <button
      @click="updateCount">Count: {{ count }}</button>
  <p>textValue: {{ textValue }}</p>
  <input
      type="text"
      :value="textValue"
      @input="updateText">
  <p>checked: {{ checked }}</p>
  <input
      type="checkbox"
      :checked="checked"
      @change="updateChecked">
</template>

<script>
export default {
  name: 'DemoForm',
  data() {
    return {
      // 1. bind/event
      count: 0,
      textValue: 'hi',
      checked: true,
    };
  },
  methods: {
    updateCount() {
      this.count += 1;
    },
    updateText(event) {
      this.textValue = event.target.value;
    },
    updateChecked(event) {
      this.checked = event.target.checked;
    },
  },
};
</script>
```

但由于不同表单元素的数据/状态属性及更新事件并不相同，这种分别绑定数据和事件的操作有点麻烦。

Vue 中添加了 `v-model` 指令，用于简化数据绑定和事件监听。

## v-model

`v-model` 指令可以为表单元素创建数据的双向绑定：

```vue
<template>
  <h1>Form</h1>
  <h2>2. model</h2>
  <ul>
    <li
        v-for="(value, key) in form"
        :key="key">{{ `${key}: ${value}` }}</li>
  </ul>
  <form
      @submit.prevent="">
    <h3>text</h3>
    <label>
      <span>input[type="text|password|number"]</span>
      <input
          type="text"
          v-model="form.username" />
    </label>
    <label>
      <span>textarea</span>
      <textarea
          v-model="form.comment"></textarea>
    </label>
    <h3>date</h3>
    <label>
      <span>date</span>
      <input
          type="date"
          v-model="form.date">
    </label>
    <h3>checkbox/radio & group</h3>
    <label>
      <span>checkbox</span>
      <input
          type="checkbox"
          v-model="form.rememberMe">
    </label>
    <label>
      <span>checkbox group</span>
      <div
          v-for="(option, index) in options"
          :key="index">
        <input
            type="checkbox"
            :value="option"
            v-model="form.groups">
        <span>{{ option }}</span>
      </div>
    </label>
    <label>
      <span>radio group</span>
      <div
          v-for="(option, index) in options"
          :key="index">
        <input
            type="radio"
            :value="option"
            v-model="form.group">
        <span>{{ option }}</span>
      </div>
    </label>
    <label>
      <span>select</span>
      <select
          v-model="form.picked">
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option">{{ option }}</option>
      </select>
    </label>
  </form>
</template>

<script>
export default {
  name: 'DemoForm',
  data() {
    return {
      // 2. model
      options: [
        'A',
        'B',
        'C',
      ],
      form: {
        username: 'admin',
        comment: 'it\'s nice',
        date: '2021-09-12',
        rememberMe: false,
        groups: [
          'C',
        ],
        group: 'B',
        picked: 'A',
      },
    };
  },
};
</script>
```

## 修饰符

+ .lazy: 选择 `change` 事件作为触发时机，而不是 `input` 事件
+ .number: 将输入的值转换为数值
+ .trim: 自动删除文本首尾的空白

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/05.form>

在线预览: <https://codesandbox.io/s/vra-vue-05-form-lzx1t>

## 继续阅读

+ 上一节: [事件](./event.md)
+ 下一节: [样式](./style.md)
