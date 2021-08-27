# computed

`computed` 用于完成数据的自动跟踪和处理，如加减运算或列表过滤。

```vue
<template>
  <div class="computed">
    <p>sum: {{ sum }}</p>
    <label>
      <span>filter by:</span>
      <select
          v-model="filter">
        <option
            v-for="(option, index) in filterOptions"
            :key="index"
            :value="option">{{ option }}</option>
      </select>
    </label>
    <ul>
      <li
          v-for="item in filteredList"
          :key="item.id">{{ item.name }} - {{ item.size }}</li>
    </ul>
    <p>
      <span>value: {{ value }}, double: {{ double }}&nbsp;</span>
      <button
          @click="setDouble">Set double = 16</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DemoComputed',
  data() {
    return {
      a: 1,
      b: 2,
      filterOptions: [
        'small',
        'medium',
        'large',
      ],
      filter: '',
      list: [
        {
          id: 1,
          name: '地瓜',
          size: 'large',
        },
        {
          id: 2,
          name: '土豆',
          size: 'medium',
        },
        {
          id: 3,
          name: '西红柿',
          size: 'small',
        },
      ],
      value: 3,
    };
  },
  computed: {
    sum() {
      return this.a + this.b;
    },
    filteredList() {
      if (this.filter) {
        return this.list
          .filter((item) => item.size === this.filter);
      }

      return this.list;
    },
    double: {
      get() {
        return this.value * 2;
      },
      set(value) {
        this.value = value / 2;
      },
    },
  },
  methods: {
    setDouble() {
      this.double = 16;
    },
  },
};
</script>
```

## computed 选项

`computed` 是包含一个或多个方法的对象：

```js
computed: {
  // functions
},
```

其中的方法没有参数，但必须有返回值。方法中可以使用 `data` `props` 或其他 `computed` 的值，且方法会在值变化后自动重新执行。

## computed 值

`computed` 中的方法可以像 `data` 和 `props` 一样作为值，在模板或 JavaScript 逻辑中使用。

`computed` 中的方法应当只包含数据处理逻辑，不应该包含任何副作用。当依赖的值一样时，执行的结果也应当一样。而且每次执行都不会改变其他数据，也不能执行接口调用等操作。

## getter/setter

`computed` 也可以写作 getter/setter 组合的值：

```js
{
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    double: {
      get() {
        return this.value * 2;
      },
      set(value) {
        this.value = value / 2;
      },
    },
  },
}
```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/08.data>

在线预览: <https://codesandbox.io/s/vra-vue-08-data-mqpp9>

## 继续阅读

+ 上一节: [props](./props.md)
+ 下一节: [state](../../react/state.md)
