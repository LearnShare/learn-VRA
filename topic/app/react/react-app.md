# React 应用

回顾一下 [Hello World](https://codesandbox.io/s/vra-react-01hello-world-blqhy) 的代码：

public/index.html:

```html
<div id="root"></div>
```

src/app.js:

```jsx
import React from 'react';

import HelloWorld from './components/hello-world';

function App() {
  return (
    <div className="App">
      <HelloWorld msg="Hello World from React" />
    </div>
  );
}

export default App;
```

src/index.js:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## react-dom

[react-dom](https://github.com/facebook/react/tree/main/packages/react-dom)

`react-dom` 模块负责将 React 组件渲染到 HTML 中。

### render

```jsx
ReactDOM.render(element, container, callback?)
```

参数：

+ element: 要渲染的根组件/HTML 元素
+ container: 作为容器的 HTML 元素（首次渲染时，会清空内部的元素）
+ callback: 渲染/更新后的回调函数（可选）

### createPortal

参考 [React docs: Portals](https://zh-hans.reactjs.org/docs/portals.html)

## 继续阅读

+ 上一节: [路径别名](../vue/vue-path.md)
+ 下一节: [Angular 应用](../angular/angular-app.md)
