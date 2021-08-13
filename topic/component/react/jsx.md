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

+ 为了避免和类声明关键词冲突，部分属性名称不同：
  + for => `htmlFor`
  + class => `className`
+ 部分属性名需要写成驼峰式的名称
  + tabindex => `tabIndex`
  + onclick => `onClick`
  + readonly => `readOnly`
  + 等

`aria-*` 和 `data-*` 的格式保持不变。

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

在 JSX 中，`null` `undefined` 和 `false` 将不会被渲染：

```jsx
const data = null;

dataInfo() {
  if (data
      && data.length) {
    return <span>{ data.length }</span>
  }

  return null;
}

<p>{
  data && <span>not empty</span>
}</p>
<p>{ list }</p>
```

将会渲染为：

```html
<p></p>
<p></p>
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
    <li
        key={value}>{ value }</li>
  ))
}</ol>
```

为了有效地跟踪循环中渲染出的每个元素，需要为元素添加 `key` 属性。

key 可以是数字或字符串，它可以来源于：

+ 循环的值
+ 值的特殊字段，如 item.id
+ 循环的 key
+ 循环的序号

通常应该避免使用循环序号，因为它可能会随着数组元素的增加、删除或排序发生变化，从而导致无法预料的逻辑错误。

## 渲染 HTML 内容

可以使用 `dangerouslySetInnerHTML` 属性向 JSX 元素中插入 HTML 内容：

```jsx
htmlContent: {
  __html: '<p>it's dangerous</p>',
}

<div
    dangerouslySetInnerHTML={htmlContent}></div>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/04.jsx>

在线预览: <https://codesandbox.io/s/vra-react-04-jsx-5qizt>

## 继续阅读

+ 上一节: [创建和使用组件](./component.md)
+ 下一节: [事件](./event.md)
