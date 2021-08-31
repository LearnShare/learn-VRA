# ref 和 DOM

```jsx
import React, {
  Component,
} from 'react';

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <input
          type="text"
          ref={ this.inputRef } />
    );
  }
}

export default RefDemo;
```

## 创建和绑定 ref

1. 使用 `React.createRef()` 创建引用属性
  ```js
  this.inputRef = React.createRef();
  this.helloWorldRef = React.createRef();
  ```
2. 使用 `ref` 绑定引用属性
  ```jsx
  <input
      type="text"
      ref={ this.inputRef } />
  <HelloWorld
      msg="hello"
      ref={ this.helloWorldRef } />
  <button
      onClick={ this.mute }>mute</button>
  ```

**注意**：无法在函数组件上使用 `ref` 属性，因为它们没有实例。

### 回调 ref

React 也支持在 `ref` 属性上绑定一个方法，这种方式称为“回调 ref”。

该方法可以包含一个参数，代表当前的 DOM 元素或组件实例。

```jsx
autoHint = (element) => {
  element.setAttribute('placeholder', element.name);
}

<input
    type="password"
    name="password"
    ref={ this.autoHint } />
```

**提示**：可以使用这种方式控制和处理子组件内部的元素或组件。比如获取子组件内部的 canvas 元素，并完成绘图操作。

## 使用 ref

可以使用 `this.refName.current` 访问引用的 DOM 元素或组件实例：

```js
componentDidMount() {
  if (this.inputRef) {
    this.inputRef.current.focus();
  }
}

mute = () => {
  if (this.helloWorldRef) {
    // 访问自定义组件的属性和方法
    console.log(this.helloWorldRef.current);
    this.helloWorldRef.current.mute();
  }
}
```

hello-world.jsx:

```jsx
class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
    };
  }

  mute() {
    this.setState({
      muted: true,
    });
  }

  render() {
    const {
      muted,
    } = this.state;
    const {
      msg,
    } = this.props;

    return (
      <p>{ muted ? '(muted)' : msg }</p>
    );
  }
}
```

**注意**：引用的元素或组件仅在模板完成渲染后才能访问到，要特别注意访问他们的时机（生命周期钩子）。

## ref 转发

当在自定义组件上使用 `ref` 时，我们只能获取到组件实例，无法访问组件内的 DOM 元素或自定义组件。

“ref 转发”提供了获取组件内部 DOM 元素或自定义组件的能力：

```jsx
this.childRef = React.createRef();

componentDidMount() {
  if (this.childRef) {
    console.log(this.childRef.current.textContent);
  }
}

<ToggleButton
    ref={ this.childRef } />
```

toggle-button.jsx:

```jsx
<button
    ref={ refProps }
    onClick={ this.toggleChecked }>{ checked ? 'ON' : 'OFF' }</button>

const ToggleButtonRef = React.forwardRef((props, ref) => (
  <ToggleButton
      refProps={ ref } />
));

export default ToggleButtonRef;
```

**注意**：你可能并不需要使用 ref 转发功能，因为回调 ref 也能做同样的事情。

```jsx
buttonText = (element) => {
  console.log(element.textContent);
}

<ToggleButton
    refProps={ this.buttonText } />
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/08.ref>

在线预览: <https://codesandbox.io/s/vra-react-08-ref-ujvuw>

## 继续阅读

+ 上一节: [模板引用](./vue-ref.md)
+ 下一节: [模板变量](./angular-ref.md)
