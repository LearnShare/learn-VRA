# 生命周期

参考内容：

+ [React API: 组件的生命周期](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)
+ [React 生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

React 的生命周期分为几个阶段：

+ 挂载：组件完成数据初始化，并渲染到 DOM 树中
+ 更新：state 或 props 数据发生变化，或手动执行 forceUpdate() 后，组件判断是否需要更新，并重新渲染
+ 卸载：组件从 DOM 中移除
+ 错误：组件本身或内部组件发生错误

## 生命周期方法常用的生命周期方法：

```js
class DemoLifeCycle extends Component {
  // 组件构造方法
  // 可以在这里完成 state 初始化，和方法绑定
  // 如果不需要初始化 state 和方法绑定，则不需要实现该方法
  constructor(props) {
    super(props);

    this.state = {};
    this.func = this.func.bind(this);
  }

  // 渲染 HTML 元素或自定义组件
  // 这个方法是必须存在的
  render() {}

  // 组件渲染完毕
  // 可以在这里执行计时器，或接口调用
  componentDidMount() {}

  // 手动判断组件是否需要重新渲染
  // nextProps: 更新后的 props
  // nextState: 更新后的 state
  // 返回值：true - 继续完成渲染；false - 跳过渲染
  shouldComponentUpdate(nextProps, nextState) {}

  // 在组件重新渲染前获取一些数据
  // nextProps: 更新前的 props
  // nextState: 更新前的 state
  // 返回值：作为 componentDidUpdate() 的第三个参数
  getSnapshotBeforeUpdate(prevProps, prevState) {}

  // 组件更新完毕（初次渲染后不会执行）
  componentDidUpdate(prevProps, prevState, snapshot) {}

  // 组件卸载前
  // 可以在这里清除计时器，或关闭网络连接
  componentWillUnmount() {}

  // 根据错误信息更新 state
  // 返回值：返回数据会更新到 state
  getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  // 内部组件抛出了错误
  // 可以在这里记录错误信息
  componentDidCatch(error, info) {}
}
```

## 继续阅读

+ 上一节: [生命周期](../vue/func/lifecycle.md)
+ 下一节: [生命周期](../angular/lifecycle.md)
