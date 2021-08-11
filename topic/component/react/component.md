# 创建和使用组件

## 创建组件

### 函数组件

函数组件比较简单，它只需要返回模板内容就可以了。它不需要内部的数据和状态（state），甚至连外部参数（props）也是可选的。

src/components/hello-world.jsx:

```jsx
import React from 'react';

function HelloWorld({
  msg,
}) {
  return (
    <h1>{ msg }</h1>
  );
}

export default HelloWorld;
```

HelloWorld 函数的返回内容看起来比较奇怪，它既不是 JavaScript 表达式，也不是 HTML 字符串。

这种在 JavaScript 代码中使用的类似 HTML 的语法叫做 `JSX`。参考 [JSX]。

### class 组件

class 组件是继承自 `React.Component` 的类。相对于函数组件，它可以拥有更多数据和功能：

+ state
+ props
+ 生命周期方法
+ 返回模板的 render 方法（这是必须的）
+ 其他数据和方法

src/components/toggle-button.jsx:

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

## 使用组件

与 Vue 组件需要先注册再使用不同，React 中的组件只需要导入就可以使用了。

src/app.js:

```jsx
import React from 'react';

import HelloWorld from './components/hello-world';
import ToggleButton from './components/toggle-button';

function App() {
  return (
    <div className="app">
      <HelloWorld msg="Hello World from React" />
      <ToggleButton />
    </div>
  );
}

export default App;
```

### 组件名称

建议在组件声明、导入和使用时均用 `HelloWorld` 形式，React 也只会将大写的标签名称当作自定义组件。

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/03.component>

在线预览: <https://codesandbox.io/s/vra-react-03-component-eejht>

## 继续阅读

+ 上一节: [组件](../readme.md)
+ 下一节: [JSX](./jsx.md)
