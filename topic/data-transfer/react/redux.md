# Redux

Redux 是 React 生态中最流行的状态管理库之一，但 Redux 也可以在其他环境中使用。

相关库：

+ [Redux](https://redux.js.org/): Redux 核心库
+ [React Redux](https://react-redux.js.org/): Redux 的 React 绑定，用于在 React 中使用 Redux
+ [Redux Toolkit](https://redux-toolkit.js.org/): 用于简化 Redux 开发的工具库
+ [Redux Thunk](https://github.com/reduxjs/redux-thunk): Redux 中间件，用于编写异步动作等副作用
+ [Redux Saga](https://redux-saga.js.org/): 另一个编写副作用的中间件
+ [redux-vuex](https://github.com/alexander-heimbuch/redux-vuex): Redux 的 Vue 绑定，与 Vuex 相似的语法

## 核心概念

Redux 的核心概念：

+ Store: 数据仓库
+ State: 数据在特定时刻的值
+ Action: 用于触发 Reducer 的数据对象
+ Reducer: 数据更新逻辑

### Store

数据仓库，用于存储数据，并提供获取数据、修改数据和监听数据变化的接口。

每个 React 应用中仅需要一个 Store 实例，作为全局顶级的数据仓库。

```js
// src/store/index.js
import {
  createStore,
} from 'redux';

const initialState = {
  token: '',
  userData: null,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'set-token':
      return {
        ...state,
        token: action.token,
      };
    case 'set-userdata':
      return {
        ...state,
        userData: action.userData,
      };
    case 'clear':
      return {
        token: '',
        userData: null,
      };
    default:
      return state;
  }
}

const store = createStore(mainReducer, initialState);

export default store;
```

`createStore` 用于创建 Store 实例：

```js
createStore(reducer, preloadedState?, enhancer?)
```

参数：

+ `reducer`: 一般方法，根据传入的数据返回新的 state。参数：
  + `state`: 当前的 state
  + `action`: 数据对象
+ `preloadedState`: 初始 state
+ `enhancer`: 可使用 `applyMiddleware()` 方法添加中间件

#### 中间件

Redux 中间件可以作用在触发 Action 和执行 Reducer 过程之间，可以完成日志记录、异常监控和 API 请求等异步操作或其他副作用。

```js
applyMiddleware(...middleware)
```

参数：

+ `middleware`: 一个或多个中间件

中间件可以接收 Store 的 `dispatch` 和 `getState` 作为命名参数，并返回另一个函数。  
返回的函数接收一个 `next` 参数，它是 middleware 的 dispatch 方法。然后返回另一个函数。  
返回的函数接受一个 `action` 参数，它可以在合适的时候调用 `next(action)` 触发该 Action。

一个记录日志的简单示例：

```js
import {
  createStore,
  applyMiddleware,
} from 'redux';

const logger = (store)
  => (next)
  => (action)
  => {
    console.log('redux action:', action);

    console.log('state before:', store.getState());
    const nextValue = next(action);
    console.log('state after:', store.getState());

    return nextValue;
  };

const store = createStore(mainReducer, initialState, applyMiddleware(logger));
```

### State

Store 中存储的数据在特定时刻（初始化，及修改前后）的值。

#### 获取数据

可以使用 `store.getState()` 方法获取 Store 实例当前的数据：

```js
store.getState(); // { token, userData }
```

#### Selector

Selector 是指从 State 中提取数据的方法，它可以避免分散在各处的重复代码：

```js
const hasLogin = (state) => !!(state.token && state.userData);
```

#### 订阅更新

可以使用 `store.subscribe()` 方法订阅 Store 的数据更新，以便及时更新数据：

```js
store.subscribe(() => {
  // store.getState()
});
```

通常我们不会在每个使用 Store 的组件中手动订阅并处理数据更新，借助 `react-redux` 之类的库会更加方便。

### Action

Action 类似于事件，它只是一个包含 `type` 字段的普通对象。Reducer 会根据 `type` 字段决定执行哪些逻辑，而 Action 中的其他字段就是该“事件”的附加数据。

Action 是同步的，它将立即触发并执行 Reducer，并完成 State 的更新。

```js
// 1. 简单的 Action
{
  type: 'clear',
}

// 2. 包含数据的 Action
{
  type: 'set-token',
  token: '123',
}

// 3. 使用“域/动作”方式命名
{
  type: 'cart/remove',
  id: '123',
}
```

#### Dispatch

`store.dispatch(action)` 用于提交 Action：

```js
store.dispatch({
  type: 'set-token',
  token: '123',
});
```

#### Action Creator

在不同地方重复编写 Action 是比较麻烦的，容易出错，而且也不利于后期维护。

"Action Creator" 是一个创建并返回 Action 对象的方法，使用它可以避免很多麻烦：

```js
// src/store/action.js
const setToken = (token) => ({
  type: 'set-token',
  token,
});

const setUserData = (data) => ({
  type: 'set-userdata',
  userData: data,
});

export default {
  setToken,
  setUserData,
},
```

### Reducer

Reducer 是一个方法，它接收当前 `state` 数据和 `action` 对象作为参数，并决定是否更新 State。

```js
const reducer = (state, action) => newState;
```

Reducer 方法需要符合以下条件：

+ 仅通过 `state` 和 `action` 参数获取新的 state。
+ `state` 是不可变的，所以不能直接修改它。可以复制 `state` 数据，再对该副本进行修改。
+ 禁止异步逻辑、依赖随机值或有其他副作用。

#### combineReducers()

为了避免单一 Reducer 过于复杂，可以将 Reducer 的逻辑拆分为多个函数，并使用 `combineReducers()` 方法将它们合并起来。

```js
const initialUserData = {
  token: '',
  userData: null,
};
const userReducer = (state = initialUserData, action) => {};

const initialMenuData = [];
const menuReducer = (state = initialMenuData, action) => {};

const rootReducer = combineReducers({
  // 指定了模块的名称
  user: userReducer,
  menu: menuReducer,
});

store.getState();
/*
{
  // 模块名称
  user: {
    token: '',
    userData: null,
  },
  menu: [],
}
*/
```

## 使用 react-redux

### <Provider>

`<Provider>` 元素用于将 Store 实例注入到应用中，使内部的任意元素都可以访问该实例。

```jsx
import {
  Provider,
} from 'react-redux';

import store from './store/index';

<Provider
    store={ store }>
  <App />
</Provider>
```

### connect()

`connect()` 方法用于连接 Store 和组件，并返回新的包装组件：

```js
import {
  connect,
} from 'react-redux';

// MyComponent

const mapStateToProps = (state) => {
  const {
    token,
    userData,
  } = state;

  return {
    token,
    userData,
    hasLogin: !!(token && userData),
    userId: userData && userData.id,
  };
};

const mapDispatchToProps = {
  setToken: (token) => ({
    type: 'set-token',
    token,
  }),
  setUserData: (userData) => ({
    type: 'set-userdata',
    userData,
  }),
  clear: () => ({
    type: 'clear',
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

**提示**：`connect()(MyComponent)` 会默认为组件注入 `dispatch` 方法。

它有以下参数：

+ `mapStateToProps`: 用于将 State 数据绑定到组件的 props，会在组件初始化时和每次 State 更新后调用。可以有以下参数：
  + `state`: Store 中的 State 数据
  + `ownProps`: 组件的 props 属性
+ `mapDispatchToProps`: 用于将 dispatch 方法绑定为 props 方法，可以有两种形式：
  + 方法：用于创建方法调用 `store.dispatch(action)`，可以有以下参数：
    + `dispatch`: 等同于 `store.dispatch`
    + `ownProps`: 组件的 props 属性
  + 对象：包含一个或多个 Action Creator 方法
+ `mergeProps`: 手动处理多种 props 属性的合并逻辑
+ `options`: 配置选项

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/12.redux>

在线预览: <https://codesandbox.io/s/vra-react-12-redux-r282l>

## 继续阅读

+ 上一节: [VueX](../vue/vuex.md)
+ 下一节: [NgRx](../angular/ngrx.md)
