# Hello World

## 编写最小化的 Hello World

在上一节完成的代码基础上进行修改：

1. 安装 prop-types
  ```bash
  npm install --save prop-types
  ```
2. 添加 src/components/hello-world.jsx
  ```jsx
  import React from 'react';
  import PropTypes from 'prop-types';

  function HelloWorld({
    msg,
  }) {
    return (
      <h1>{ msg }</h1>
    );
  }

  HelloWorld.propTypes = {
    msg: PropTypes.string,
  };

  HelloWorld.defaultProps = {
    msg: '',
  };

  export default HelloWorld;
  ```
3. 修改 src/app.js
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
4. 删除多余文件，并修改关联的文件
  ```
  src/app.scss
  src/app.test.js
  src/index.scss
  src/logo.svg
  ```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/01.hello-world>

在线预览: <https://codesandbox.io/s/vra-react-01hello-world-blqhy>

## 继续阅读

+ 上一节: [项目结构](./vra-react.md)
+ 下一节: [Angular CLI](../angular/angular-cli.md)
