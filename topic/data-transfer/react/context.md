# Context

类似 Vue 的 Provide/Inject，React 也提供了向组件树内的其他节点共享数据的 Context 功能。

**注意**：与 Vue 不同的是，Context 共享的数据是响应式的。

## React.createContext()

`React.createContext()` 用于创建 Context：

```js
const SimpleContext = React.createContext('');

const ComplexContext = React.createContext({
  name: '',
  updateName: () => {},
});
```

Context 的名称需要是大写字母开头，`createContext()` 中可以传入数据的默认值。

为了在多个组件间共享 Context，通常将其放在独立的文件中：

music-context.js:

```js
import React from 'react';

const MusicListContext = React.createContext({
  musicList: [],
  current: 0,
  play: () => {},
  toggleLiked: () => {},
});

export default MusicListContext;
```

### Context.displayName

Context 可以设置 `displayName` 属性，用于在开发工具中显示更易分辨的名称：

```js
// 未设置显示名称
const MusicListContext = React.createContext();
// <MusicListContext.Provider> 显示为 'Context.Provider'

// 设置显示名称
MusicListContext.displayName = 'MusicListContext';
// <MusicListContext.Provider> 显示为 'MusicListContext.Provider'
```

## Context.Provider

Context 会始终提供名为 `Provider` 的组件（如 `<SimpleContext.Provider>`），它将作为一个根组件，为内部的其他组件提供共享数据。

```jsx
import MusicListContext from './music-context';

<div className="music-player">
  <MusicListContext.Provider
      value={ contextData }>
    <MusicList />
  </MusicListContext.Provider>
</div>
```
`Provider` 组件需要有 `value` 属性，用于提供共享的数据。如果未提供该属性，则共享 Context 的默认值。

`contextData` 的值应当匹配 `MusicListContext` 的默认值，其中会包含来自当前组件的数据和方法。

```js
const contextData = {
  // 来自 state 的数据
  list,
  current,
  // 组件内的方法
  play,
  toggleLiked,
};
```

## Component.contextType

从 Context 获取共享数据的子元素都需要设置 contextType 属性为对应的 Context：

music-list.jsx:

```js
import MusicListContext from './music-context';

class MusicList extends Component {
  static contextType = MusicListContext;
}

/* 也可以设置在类声明外部
class MusicList extends Component {}

MusicList.contextType = MusicListContext;
*/
```

## Context.Consumer

Context 会始终提供名为 `Consumer` 的组件（如 `<SimpleContext.Consumer>`），它接收一个渲染方法作为子元素。

music-list.jsx:

```jsx
<MusicListContext.Consumer>
  {
    (data) => data.list.map((item, index) => (
      <MusicItem
          key={ item.id }
          data={ item }
          index={ index } />
    ))
  }
</MusicListContext.Consumer>
```

渲染方法接收一个参数，该参数是 `Provider` 组件共享的数据。渲染方法根据传入的参数（共享数据）完成内容渲染。

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/11.context>

在线预览: <https://codesandbox.io/s/vra-react-11-context-m0r5b>

## 继续阅读

+ 上一节: [模拟事件语法](./func-props.md)
+ 下一节: