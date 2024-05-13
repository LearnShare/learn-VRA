# 生命周期

参考内容：

+ [Vue Guide: 生命周期图示](https://v3.cn.vuejs.org/guide/instance.html#生命周期图示)
+ [Vue API: 生命周期钩子](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html)

生命周期指的是组件运行过程中的特殊时间点，如组件创建、挂载、重新渲染和卸载。

## 生命周期钩子

生命周期钩子指的是具有特定名称，且会在组件运行的特殊时间点自动执行的方法。

``` ts
{
  name: 'DemoLifeCycle',

  created() {
    // 组件创建并完成初始化
    // 可以在这里执行数据初始化，或接口调用
  },
  mounted() {
    // 组件已挂载，但子组件可能没有渲染完毕
    // 可以在这里使用 ref 进行 DOM 操作
  },
  updated() {
    // 组件已更新，但子组件可能没有渲染完毕
  },
  beforeUnmount() {
    // 组件卸载之前
    // 可以在这里清除定时器和 $watch
  },
  errorCaptured(error, component, info) {
    // 内部组件发生错误
  },
}
```

## 继续阅读

+ 上一节: [watch](./watch.md)
+ 下一节: [生命周期](../../react/lifecycle.md)
