# 自定义事件

我们已经在 [事件](../..//component/vue/template/event.md) 一节了解过处理 DOM 事件的方法。

Vue 也提供了注册和触发自定义事件的功能。

## emits 选项

在触发自定义事件之前，需要在组件的 `emits` 选项中注册所有事件的名称。

```js
// 1. 仅注册名称
emits: [
  'change',
  'statusUpdated',
],

// 2. 使用验证方法
emits: {
  change: (data) => {
    if (data.id
        && data.value) {
      return true;
    } else {
      throw(new Error('invalid event data'));
      return false;
    }
  },
},
```

关于事件名称，建议在注册时使用 `eventName` 形式，绑定时使用 `event-name` 形式。

## $emit

组件内部提供了 `$emit` 方法，用于触发事件，并提供附加数据（附加数据是可选的）。

```js
this.$emit('eventName', eventData);
```

绑定事件处理方法的语法与原生事件基本一致，但 `$event` 不再是 DOM 事件，而是 `$emit` 中提供的 `eventData`。

toggle-button.vue:

```vue
<template>
  <button
      @click="toggleChecked">{{ checked ? 'ON' : 'OFF' }}</button>
</template>

<script>
export default {
  name: 'ToggleButton',
  emits: [
    'change',
  ],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleChecked() {
      const checked = !this.checked;
      this.checked = checked;

      this.$emit('change', {
        checked,
      });
    },
  },
};
</script>
```

app.vue:

```vue
<toggle-button
    @change="buttonOnChange" />

buttonOnChange(data) {
  console.log(data); // { checked: true } | { checked: false }
},
</script>
```

## 双向绑定

当使用 `propName` 作为 props 属性名，且使用 `update:propName` 作为事件名时，该属性即可使用 `v-model` 实现数据的双向绑定。

volumn-bar.vue:

```vue
<template>
  <div class="volumn-bar">
    <button
        @click="update(-10)">-</button>
    <span>{{ volumn }}</span>
    <button
        @click="update(10)">+</button>
  </div>
</template>

<script>
export default {
  name: 'VolumnBar',
  emits: [
    'update:volumn',
  ],
  props: {
    volumn: Number,
  },
  methods: {
    update(value) {
      const newValue = this.volumn + value;

      if (newValue >= 0
          && newValue <= 100) {
        this.$emit('update:volumn', newValue);
      }
    },
  },
};
</script>
```

app.vue:

```vue
<volumn-bar
    v-model:volumn="value" />

data() {
  return {
    value: 40,
  };
},
```

注意绑定的语法应当是 `v-model:propName="value"`。

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/13.emit>

在线预览: <https://codesandbox.io/s/vra-vue-13-emit-elk9e>

## 继续阅读

+ 上一节: [slot](./slot.md)
+ 下一节:
