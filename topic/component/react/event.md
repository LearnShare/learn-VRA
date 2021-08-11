# 事件

```jsx
import React, {
  Component,
} from 'react';

class DemoJsx extends Component {
  constructor(props) {
    super(props);

    this.listenerOne = this.listenerOne.bind(this);
  }

  listenerOne(event) {
    console.log(event.type, 'one');
  }

  listenerTwo = (event) => {
    console.log(event.type, 'two');
  }

  render() {
    return (
      <div className="jsx-demo">
        <h2>4. events</h2>
        <button
            onClick={this.listenerOne}>One</button>
        <button
            onClick={this.listenerTwo}>Two</button>
      </div>
    );
  }
}

export default DemoJsx;
```

有两种声明事件处理方法的方式：

1. 普通类方法，需要绑定 `this`
  ```js
  this.listenerOne = this.listenerOne.bind(this);

  listenerOne(event) {
    console.log(event.type, 'one');
  }
  ```
2. 箭头函数
  ```js
  listenerTwo = (event) => {
    console.log(event.type, 'two');
  }
  ```

建议使用第二种。

## 继续阅读

+ 上一节: [JSX](./jsx.md)
+ 下一节: [表单](./form.md)
