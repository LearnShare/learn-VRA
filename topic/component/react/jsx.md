# JSX

```jsx
function HelloWorld({
  msg,
}) {
  return (
    <h1>{ msg }</h1>
  );
}
```

[JSX](https://facebook.github.io/jsx/) 是一种类似 XML 的 ECMAScript 语法扩展。JSX 代码最终会渲染为 HTML 内容。

JSX 与 [Vue 模板](../vue/html.md) 或 [Handlebars](https://handlebarsjs.com/) 之类的模板并不相同。JSX 允许我们在 JavaScript 代码中编写类似 HTML 的模板，并在模板中使用 JavaScript 的所有功能。

```jsx
class DemoJsx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueA: 1,
      valueB: 'hello',
      checked: false,
      list: [
        'A',
        'B',
        'C',
      ],
    };
  }

  strong() {
    return (
      <strong>strong</strong>
    );
  }

  render() {
    const span = <span>span</span>;

    const mark = (
      <mark>mark</mark>
    );

    const listItems = (
      <>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </>
    );

    const {
      valueA,
      valueB,
      checked,
      list,
    } = this.state;

    return (
      <div className="jsx-demo">
        <h1>JSX</h1>
        <h2>JSX in JavaScript</h2>
        <p>{ span } { mark } { this.strong() }</p>
        <ul>{ listItems }</ul>
        <h2>JavaScript in JSX</h2>
        <p>{ valueA + 2 } { `${valueB} world` }</p>
        <p>{
          checked
            ? <span>ON</span>
            : <span>OFF</span>
        }</p>
        <ol>{
          list.map((value, index) => (
            <li
                key={index}>{ value }</li>
          ))
        }</ol>
      </div>
    );
  }
}
```

## 在 JavaScript 中使用 JSX

```jsx
// 1. 单个元素
const span = <span>span</span>;

// 2. 可以放在括号中（方便多行内容）
const mark = (
  <mark>mark</mark>
);

// 3. 数组
const listItems = (
  <>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </>
);

// 4. 函数返回值
strong() {
  return (
    <strong>strong</strong>
  );
}
```

## 在 JSX 中使用 JavaScript

```jsx
{/* 表达式 */}
<p>{ valueA + 2 } { `${valueB} world` }</p>

{/* 三目运算 */}
<p>{
  checked
    ? <span>ON</span>
    : <span>OFF</span>
}</p>

{/* Array.map() 方法 */}
<ol>{
  list.map((value, index) => (
    <li
        key={index}>{ value }</li>
  ))
}</ol>
```

## 属性

JSX 中元素或组件的属性也可以使用任意表达式：

```jsx
<input type={inputType} />
<button
    tabIndex="2">tabIndex</button>
<button
    className="primary">Primary</button>
<p
    className={infoClasses}>info warning</p>
```

属性名有一些不同：

+ `className`: 为了避免和类声明关键词冲突，class 属性需要写成 `className`
+ `tabIndex`: 部分属性名需要写成驼峰式的名称，如 tabindex => `tabIndex`、onclick => `onClick`

## 显示或隐藏元素

JSX 中显示或隐藏元素需要依赖 JavaScript 的逻辑：

```jsx
<p>{
  checked
    ? <span>ON</span>
    : <span>OFF</span>
}</p>

<button>{ this.buttonLabel() }</button>


buttonLabel() {
  const {
    checked,
  } = this.state;

  if (checked) {
    return <span>ON</span>;
  }

  return <span>OFF</span>;
}
```

## 循环

```jsx
list: [
  'A',
  'B',
  'C',
],

<ol>{
  list.map((value) => (
    <li>{ value }</li>
  ))
}</ol>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/04.jsx>

在线预览: <https://codesandbox.io/s/vra-react-04-jsx-5qizt>

## 继续阅读

+ 上一节:
+ 下一节:
