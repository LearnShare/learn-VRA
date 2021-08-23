# 数据的响应性

参考内容：

+ [Vue Guide: 深入响应性原理](https://v3.cn.vuejs.org/guide/reactivity.html)
+ [MDN: Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

Vue 中的数据具有响应性，具体表现在以下几个方面：

## 1. 模板渲染

模板不是只在组件初始化时渲染一次，而是会在数据发生变化后重新渲染：

```vue
<template>
  <p>now: {{ now }}</p>
  <p>datetime: {{ formatDateTime(now) }}</p>
</template>

<script>
export default {
  name: 'DemoClock',
  data() {
    this.timer = null;

    return {
      now: new Date(),
    };
  },
  mounted() {
    this.timer = window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  },
  methods: {
    formatDateTime(time) {
      return time.toLocaleString();
    },
  },
};
</script>
```

组件逻辑：

1. `data` 中声明了数据 `now`，用于保存当前时间
2. 模板中使用了 `{{ now }}` 和 `{{ formatDateTime(now) }}`
3. `mounted()` 事件中启动了定时器，每秒更新一次 `now`
4. `beforeUnmount()` 事件中清除了定时器

运行后可以发现页面中的两行文字每秒钟都会更新一次。

Vue 会在 `now` 数据发生变化后，检查模板中对 `now` 的每一处引用，完成计算并决定是否重新渲染。

## 2. 关联计算
