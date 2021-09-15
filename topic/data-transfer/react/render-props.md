# props.children 和 Render Props

React 中并没有类似 Vue 的插槽概念，但由于可以通过 props 传递几乎一切数据，反而比插槽这种模式更加灵活了。

## props.children

`props.children` 是每个组件中都有的默认属性。

默认情况下，React 也会忽略掉在成对组件标签内编写的任何内容。`props.children` 代表了这些内容。可以将它渲染到子组件中，以实现类似 Vue 的默认插槽功能。

hello-world.jsx:

```jsx
<div
    className="hello-world">
  { props.children }
</div>
```

demo-props.jsx:

```jsx
<HelloWorld>hi there</HelloWorld>
```

渲染出的 HTML：

```html
<div class="hello-world">hi there</div>
```

## Render Props

Render Props 指的是一种特殊模式，组件通过 props 接收一个返回 React 元素的方法，并在内部调用该方法完成渲染。

这种应用方式类似于 Vue 中的插槽 props，可以在父组件的模板中访问子组件的数据。

nav-menu.jsx:

```jsx
class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/about',
        },
      ],
    };
  }

  render() {
    return (
      <nav>
        <ul>
          { this.props.renderItems(this.state.list) }
        </ul>
      </nav>
    );
  }
}
```

demo-props.jsx:

```jsx
renderItems = (list) => list.map((item) => ((
  <li>
    <a
        href={ item.href }>{ item.label }</a>
  </li>
)));

<NavMenu
    renderItems={ this.renderItems } />
```

渲染出的 HTML：

```html
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</nav>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/09.render-props>

在线预览: <https://codesandbox.io/s/vra-react-09-render-props-bc572>

## 继续阅读

+ 上一节: [跨组件数据传递](../readme.md)
+ 下一节:
