# props

参考：

+ [React Docs: 使用 PropTypes 进行类型检查](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

`props` 用于定义组件的外部数据，这些数据需要从外部传入。

+ `props` 需要在子组件中定义
+ `props` 由父组件传递给子组件，数据传递是单向的
+ `props` 是只读的

## 定义 props

React 的 `props` 数据并不需要提前定义：

```jsx
// 1. 函数组件
function HelloWorld(props) {
  return <p>{{ props.msg }}</p>;
}
// 或
function HelloWorld({
  msg,
}) {
  return <p>{{ msg }}</p>;
}

// 2. 类组件
class MessageBox extends Component {
  render() {
    const {
      msg,
    } = this.props;

    return (
      <div className="message-box">
        <p>{ msg }</p>
      </div>
    );
  }
}
```

但定义 `props` 是很有价值的：

+ 利于阅读和理解组件代码
+ 方便开发工具提供输入提示信息
+ 提供编译时的数据检查和错误提示

**提示**：对于添加到组件上的属性，即使未在 props 中定义，也未在组件中使用，该属性仍然会添加到组件的 props 数据中。

## propTypes - 定义和类型检查

可以使用 [PropTypes](https://www.npmjs.com/package/prop-types) 模块实现 `props` 数据的定义和类型检查：

```js
HelloWorld.propTypes = {
  msg: PropTypes.string,
};
```

`propTypes` 对于函数组件和类组件是一样的，都需要定义在函数/类的外部。更多例子：

```js
DemoProps.propTypes = {
  // 一般类型
  msg: PropTypes.string,
  update: PropTypes.func,
  // 数组
  ids: PropTypes.arrayOf(PropTypes.string),
  // 可渲染的数据
  content: PropTypes.node,
  // 元素或自定义组件
  children: PropTypes.element,
  // 枚举值
  size: PropTypes.oneOf([
    'small',
    'large',
  ]),
  // 多种类型
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // 对象
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  // 必填
  name: PropTypes.string.required,
};
```

## defaultProps - props 默认值

对于非必填的 `props` 属性，如果父组件未提供相关值，它的默认值是 `undefined`。可以使用 `defaultProps` 定义其初始值：

```js
HelloWorld.defaultProps = {
  msg: '',
};
```

对于类组件，也可以使用静态属性定义 `defaultProps`：

```js
class MessageBox extends Component {
  static defaultProps = {
    msg: '',
  };

  render() {}
}
```

## 传递数据

可以通过 `props` 向子组件传递一切数据和值。

demo-parent.jsx:

```jsx
class DemoParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'Hello',
      sizes: [
        'small',
        'medium',
        'large',
      ],
      config: {
        x: 1,
        y: 'B',
        z: false,
      },
      count: {
        value: 0,
      },
    };
  }

  addNumber = (value) => {
    this.setState((oldState) => ({
      count: {
        value: oldState.count.value + value,
      },
    }));
  }

  render() {
    const {
      msg,
      sizes,
      config,
      count,
    } = this.state;

    return (
      <div className="demo-parent">
        <DemoChildren
            numberValue={ 12 }
            stringValue={ msg }
            list={ sizes }
            config={ config }
            count={ count.value }
            func={ this.addNumber } />
      </div>
    );
  }
}

export default DemoParent;
```

## 使用数据

通过 `props` 传入的外部数据可以通过 `this.props.key` 访问。但与 `state` 不同的是，**`props` 中的数据是只读的**。

demo-children.jsx:

```jsx
class DemoChildren extends Component {
  static defaultProps = {
    numberValue: null,
    stringValue: '',
    list: [],
    config: {},
    count: 0,
    func: () => {},
  };

  add = () => {
    this.props.func(2);
  }

  render() {
    const {
      numberValue,
      stringValue,
      list,
      config,
      count,
    } = this.props;

    return (
      <div className="demo-children">
        <p>numberValue: { numberValue }</p>
        <p>stringValue: { stringValue }</p>
        <p>list:</p>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li
                    key={ index }>{ item }</li>
              );
            })
          }
        </ul>
        <p>config:</p>
        <ul>
          {
            Object.keys(config).map((key) => {
              return (
                <li
                    key={ key }>{ config[key] }</li>
              );
            })
          }
        </ul>
        <p>
          <span>count: { count }&nbsp;</span>
          <button
              onClick={ this.add }>+ 2</button>
        </p>
      </div>
    );
  }
}

DemoChildren.propTypes = {
  numberValue: PropTypes.number,
  stringValue: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  config: PropTypes.object,
  count: PropTypes.number,
  func: PropTypes.func,
};

export default DemoChildren;
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/07.data>

在线预览: <https://codesandbox.io/s/vra-react-07-data-csero>

## 继续阅读

+ 上一节: [state](./state.md)
+ 下一节:
