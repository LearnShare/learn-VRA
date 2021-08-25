# state

React 组件的 state 属性声明了组件内部的数据。

```jsx
import React, {
  Component,
} from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  toggleChecked = () => {
    this.setState((oldState) => ({
      checked: !oldState.checked,
    }));
  }

  render() {
    const {
      checked,
    } = this.state;

    return (
      <button
          type="button"
          onClick={this.toggleChecked}>{ checked ? 'ON' : 'OFF' }</button>
    );
  }
}

export default ToggleButton;
```

## 定义数据

`state` 需要在组件类的构造函数中定义和初始化：

```js
constructor(props) {
  super(props);

  this.state = {
    a: 1,
    b: 2,
  };
}
```

## 使用数据

`state` 中的数据可以在 JSX 或其他 JavaScript 逻辑中使用：

```jsx
sum() {
  const {
    a,
    b,
  } = this.state;

  return a + b;
}

render() {
  const {
    a,
    b,
  } = this.state;

  return (
    <div className="demo-state">
      <p>a: { a }, b: { b }</p>
      <p>sum: { this.sum() }</p>
    </div>
  );
}
```

## setState() - 修改数据

`state` 中的数据不能直接更新，必须使用 `setState()` 方法更新：

```jsx
addTwo = () => {
  this.setState((oldState) => ({
    a: oldState.a + 2,
  }));
}

<button
    onClick={ this.addTwo }>a + 2</button>
```

`setState()` 中不需要传入完整的 `state` 数据，只传入需要更新的字段即可。

`setState()` 有两种语法：

```js
// 1. 直接更新数据
this.setState({
  key: value,
}, callback?);

// 2. 基于当前的 state 和 props 更新数据
this.setState((oldState, oldProps) => {}, callback?);
// 第一个方法必须返回新的数据对象
// 不要修改 oldState 和 oldProps，而是使用它们构建新的 state 数据
```

`callback` 是可选参数，可以传入一个方法，该方法会在数据更新和组件渲染完毕后执行。

**注意**：当需要基于当前的 state 和 props 更新数据时，请使用第二种方法。

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/07.data>

在线预览: <https://codesandbox.io/s/vra-react-07-data-csero>

## 继续阅读

+ 上一节: [computed](../vue/data/computed.md)
+ 下一节: [props](./props.md)
