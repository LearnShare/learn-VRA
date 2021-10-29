# React Router

[React Router for Web](https://reactrouter.com/web/guides/quick-start)

React Router 是比较流行的 React 路由库。它包括 Web 和 React Native 两个版本，我们这里需要的是 Web 版。

## 路由实例

下面的例子展示了 React Router 的最小实例，访问特定路径以显示匹配的组件：

```jsx
import React from 'react';
// 导入路由组件
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// 导入页面组件
import PageHome from './pages/home';
import PageAbout from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
              path="/about">
            <PageAbout />
          </Route>
          <Route
              path="/">
            <PageHome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

启动应用并访问 <http://localhost:3000/about>，可以看到 'about.jsx' 的内容被渲染在页面中。

访问 <http://localhost:3000/abc> 时会发现 'home.jsx' 的内容被渲染出来。这是因为 `path="/"` 匹配了 '/about' 之外的所有路径，因此必须将它放在 `<Route>` 列表的最后。

## 路由组件

### \<BrowserRouter\> 和 \<HashRouter\>

React Router 应用的核心，通常会把它放在组件树靠顶部的位置。二者的区别是 URL 的模式不同：

+ `<BrowserRouter>`: 使用 path，如 'http://myweb.com/login' 。通常建议使用这种方式，但需要对服务器进行特殊配置。
+ `<HashRouter>`: 使用 hash，如 'http://myweb.com/#/login'

组件属性：

+ `<BrowserRouter>`:
  + `basename`: 指定路由根路径（以 '/' 开头的路径，不需要结尾的 '/'）。参考 [Vue Router: URL base](./vue-router.md#URL-base)
  + `forceRefresh`: 是否在导航时整页刷新（通常不需要）
+ `<HashRouter>`:
  + `basename`: 同上
  + `hashType`: hash 类型，支持以下三种：
    + `slash`: 'http://myweb.com/#/login' （默认方式）
    + `noslash`: 'http://myweb.com/#login'
    + `hashbang`: 'http://myweb.com/#!/login'

### \<Switch\> 和 \<Route\>

类似于 `switch...case`，`<Switch>` 会从前往后逐个检查，渲染第一个匹配的 `<Route>`，并忽略后面的 `<Route>`。

如果不把 `<Route>` 放在 `<Switch>` 内，所有匹配的 `<Route>` 都会被渲染出来。

`<Route>` 组件的属性：

+ `path`: 路径或路径列表
+ `exact`: 是否精确匹配
+ `strict`: 是否严格匹配尾部的 '/'
+ `sensitive `: 是否区分大小写
+ `component`|`render`|`children`: 路由对应的组件或渲染方法，其中可访问 [Route props](#Route-props)

```jsx
<Switch>
  { <!-- 1. 指定对应的组件 --> }
  <Route
      path="/about"
      component={ PageAbout } />
  { <!-- PageAbout 会自动添加三个 props: match, location, history --> }
  
  { <!-- 2. 指定渲染方法 --> }
  <Route
      path="/settings"
      render={ (props) => (
        <PageSettings
            ...props />
      ) } />
  { <!-- props 包含三个属性: match, location, history --> }
</Switch>
```

#### 路径匹配规则

React Router 使用 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 解析路径，它支持非常灵活的路径匹配规则：

```js
// 1. 按路径完整匹配
path: '/about'

// 2. 包含一个或多个动态参数
path: '/user/:id'
path: '/user/:userId/image/:imageId'

// 3. 使用正则
```

`exact` 用于控制路径是否精确匹配，当设置为 `true` 时：

```js
path: '/about'
exact: true

// /about => 匹配
// /about/us => 不匹配
```

`strict` 用于控制是否严格匹配尾部的 '/'，当设置为 `true` 时：

```js
path: '/about/'
strict: true

// /about/ => 匹配
// /about/us => 匹配
// /about => 不匹配
```

存在以下几个可匹配任意路径的情况：

+ 未指定 `path`
+ `path="/"`
+ `path="*"`
+ `path="/:any"`

#### Route props

`<Route>` 会向组件或渲染方法提供三个参数：

+ `match`: 路由匹配情况
  + `params`: path 中的参数对象
  + `isExact`: 是否精确匹配
  + `path`: 当前路径
  + `url`: URL 中匹配的部分
+ `location`: URL 中的数据
  + `pathname`: 当前路径
  + `search`: 查询字符串，包含 '?'
  + `hash`: hash，包含 '#'
+ `history`: 类似于 [window.history](https://developer.mozilla.org/en-US/docs/Web/API/History) 的属性和接口
  + `length`: 历史记录的数量
  + `push()/go()/goBack()/goForward()/replace()`: 手动导航/前进后退
  + `action`: 当前动作
  + `block()`: 禁止导航

### \<Link\> 和 \<NavLink\>

`<Link>` 和 `<NavLink>` 组件可以替代 `<a>` 元素，用于精确控制路由跳转。可用属性：

+ `to`: 目标路由，可接受三种类型的值
  + 跳转地址
  + `location`: 参考 [Route props](#Route-props)
  + 方法: 接收当前 `location` 作为参数，需要返回跳转地址或 `location`
+ `replace`: 使用 `replace()` 还是 `push()`
+ `component`: 用于替换这两个组件的自定义组件

`<NavLink>` 是特殊的 `<Link>`，它可以在当前路径匹配 `to` 属性时，为 `<a>` 元素提供额外的 `class` 或 `style`。可以将它用在页面导航栏中，并在路径匹配时呈现“激活”的状态。

它的额外属性：

+ `activeClassName`: 匹配时的 `class`，默认为 'active'
+ `activeStyle`: 匹配时的 `style`
+ `exact`
+ `strict`
+ `isActive`: 自定义方法，根据返回值决定路径是否匹配。可接受参数：
  + `match`: 当前是否匹配
  + `location`: 当前的 `location`

### \<Redirect\>

`<Redirect>` 组件用于重定向到新的路由，有两种用法：

```jsx
{ <!-- 1. 在 <Route> 内重定向 --> }
<Route
    path="/shop">
  <Redirect
      to="/store" />
</Route>
{ <!-- 2. 通过 from 匹配并重定向 --> }
<Redirect
    from="/shop"
    to="/store" />
```

可用属性：

+ `to`: 定义重定向的目标路径
+ `from`: 定义匹配的路径
+ `push`: 使用 `push()` 还是 `replace()`
+ `exact`
+ `strict`
+ `sensitive`

## 嵌套路由

在 `<Route>` 中嵌入其他 `<Route>` 可以实现嵌套路由，示例如下：

```jsx
// app.js
import PageSettings from './pages/settings/index';

<Route
    path="/settings">
  <PageSettings />
</Route>
```

```jsx
// pages/settings/index.jsx
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import PageSettingsNav from '../../components/settings-nav';
import PageSettingsProfile from './profile';
import PageSettingsNotification from './notification';

function PageSettings({
  match,
}) {
  const {
    path,
  } = match;

  return (
    <div>
      <h3>page-settings</h3>
      <PageSettingsNav />
      <hr />
      <Switch>
        <Route
            path={ `${path}/profile` }
            exact>
          <PageSettingsProfile />
        </Route>
        <Route
            path={ `${path}/notification` }
            exact>
          <PageSettingsNotification />
        </Route>
        <Redirect
            from="*"
            to={ `${path}` } />
      </Switch>
    </div>
  );
}

export default withRouter(PageSettings);
```

`withRouter(component)` 向组件中注入了 Route props，参考 [withRoute](#withRoute)

## 其他接口

### withRouter

`withRouter(component)` 是一个高阶组件，用于向组件 `component` 中注入 [Route props](#Route-props)。

```jsx
import {
  withRouter,
} from 'react-router-dom';

function MyComponent(props) {
  // props => Route props
}

withRoute(MyComponent);
```

### generatePath

`generatePath(path, params)` 可以根据输入参数生成路径。

```js
import {
  generatePath,
} from 'react-router-dom';

generatePath('/user/:id', {
  id: 123,
}); // => /user/123
```

### matchPath

`matchPath(path, props)` 用于检查输入的路径和路由参数是否可以匹配。如果匹配，会返回 `match` 对象；否则无返回值。

`props` 与 `<Route>` 组件的属性类似：

+ path
+ exact?
+ strict?

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/13.router>

在线预览: <https://codesandbox.io/s/vra-react-13-router-otuvp>

## 继续阅读

+ 上一节: [Vue Router](./vue-router.md)
+ 下一节:
