# 模拟事件语法

在 [props](../../component/react/props.md) 部分，我们已经了解过通过 props 传递方法的用法，可以用它模拟事件处理方法的语法。

toggle-button.jsx:

```jsx
class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  toggleChecked = () => {
    this.setState((oldState) => {
      const newState = {
        checked: !oldState.checked,
      };

      const {
        onChange,
      } = this.props;
      if (onChange) {
        onChange(newState);
      }

      return newState;
    });
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
```

App.js:

```jsx
class App extends Component {
  toggleOnChange = (eventData) => {
    console.log(eventData); // { checked: true } | { checked: false }
  }

  render() {
    return (
      <div className="App">
        <ToggleButton
            onChange={ this.toggleOnChange } />
      </div>
    );
  }
}
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/10.func-props>

在线预览: <https://codesandbox.io/s/vra-react-10-func-props-oxjzj>

## 继续阅读

+ 上一节: [props.children 和 Render Props](./render-props.md)
+ 下一节:
