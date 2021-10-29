# Vue Router

+ [Vue Router](https://next.router.vuejs.org/zh/)

Vue Router 是 Vue 的官方路由库。

## 路由实例

下面的例子展示了 Vue Router 的最小实例，访问特定路径以显示匹配的组件：

1. 编写路由模块
  ```js
  // src/router/index.js
  import {
    createRouter,
    createWebHistory,
  } from 'vue-router';

  // 导入组件
  import PageLogin from '@/pages/login.vue';

  // 路由映射配置
  const routes = [
    {
      // 路径
      path: '/login',
      // 名称
      name: 'Login',
      // 对应组件
      component: PageLogin,
      // 元数据
      meta: {
        login: false,
      },
    },
  ];

  // 创建路由模块
  export default createRouter({
    // 使用路径模式
    history: createWebHistory(),
    routes,
  });
  ```
2. 引入和应用路由模块
  ```js
  // app.js
  import {
    createApp,
  } from 'vue';

  import router from './router/index';

  import App from './app.vue';

  const app = createApp(App);

  app.use(router);

  app.mount('#app');
  ```
3. 展示路由组件
  ```js
  // app.vue
  <template>
    <router-view></router-view>
  </template>

  <script>
  export default {
    name: 'App',
  };
  </script>
  ```

启动应用并访问 <http://localhost:8080/login>，可以看到 'login.vue' 的内容被渲染在页面中。

但访问 <http://localhost:8080/> 时看不到任何内容，这是因为该路径（`/`）并没有匹配的组件。

### 代码分割和按需加载

可以将路由对应的模块以动态导入语法引入：

```js
const PageSettings = () => import('@/pages/settings/index.vue');

// 或
{
  name: 'About',
  path: '/about',
  component: () => import('@/pages/about.vue');
},
```

这样 Webpack 会将其打包为独立的模块，仅在首次进入该路由时加载对应的文件。

## 路由组件

当使用 `app.use(router)` 在应用中注册路由模块后，可以在模板中使用以下两个组件：

+ `<router-view>`: 根据路由配置渲染对应的组件
+ `<router-link>`: 路由链接，用于精确控制路由跳转

### <router-view>

`<router-view>` 组件会根据路由配置选择对应的组件，并将它渲染出来。可以把它放在任意组件的模板中，但通常应用中只有一个路由模块，也只有一个 `<router-view>` 组件。

类似于 `<slot>`，`<router-view>` 也可以添加 'name' 属性进行命名，参考 [命名视图](#命名视图)。

在嵌套路由中，可以使用更多 `<router-view>` 来渲染子路由对应的组件，参考 [嵌套路由](#嵌套路由)。

### <router-link>

`<router-link>` 组件可以替代 `<a>` 元素，用于精确控制路由跳转。可用属性：

+ `to`: 跳转目标，支持两种方式：
  + 'path': 跳转路径（可包含查询参数），如 '/about'，'/login?redirect=/home'
  + 路由配置，选项包括：
    + `name`: 路由名称，如 'Search'
    + `path`: 路径，如 '/search'
    + `hash`: 如 '#result'
    + `params`: 路由参数，如 `{ size: 'large' }`
    + `query`: 查询参数，如 `{ page: 3 }`
    + `replace`: 使用 `router.replace()` 还是 `router.push()`
+ `replace`: 使用 `router.replace()` 还是 `router.push()`
+ `active-class`: 匹配时的 'class' 名称，默认为 'router-link-active'
+ `exact-active-class`: 精确匹配时的 'class' 名称，默认为 'router-link-exact-active'

关于路径的匹配和精确匹配，参考 [匹配和精确匹配](#匹配和精确匹配)。

## 路由模块

`createRouter(options)` 用于创建路由模块（路由实例），接收一个对象作为配置选项：

```js
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

选项参数：

+ `history`: 设置 URL 的模式，支持两种方式：
  + `createWebHistory()`: 使用 path，如 'http://myweb.com/login' 。通常建议使用这种方式，但需要对服务器进行特殊配置。
  + `createWebHashHistory()`: 使用 hash，如 'http://myweb.com/#/login'
+ `routes`: 路由映射配置列表。配置选项包括：
  + `path`: 以 '/' 开头的路径或路径匹配规则
  + `name`: 路由名称
  + `component`: 路由对应的组件
  + `components`: 同时渲染多个组件，参考 [命名视图](#命名视图)
  + `meta`: 可以完全自定义的额外信息
  + `beforeEnter`: 路由守卫，导航到该路由之前
  + `redirect`: 重定向配置，参考 [重定向](#重定向)
  + `children`: 嵌套路由配置，参考 [嵌套路由](#嵌套路由)
+ `linkActiveClass`: `<router-link>` 匹配时的 'class' 名称，默认为 'router-link-active'
+ `linkExactActiveClass`: `<router-link>` 精确匹配时的 'class' 名称，默认为 'router-link-exact-active'

### URL base

假如我们的 Vue 应用是一个在线商店，需要将它部署在 'http://myweb.com/store' 而不是 'http://store.myweb.com/' 时，路由中的路径该怎么办？

虽然可以一律写成 `/store/*` 的形式，但这么做有点繁琐。Vue Router 中可以指定路由路径的根目录，这样所有路由的路径都会变成它的子目录。

`createWebHistory(base)` 和 `createWebHashHistory(base)` 都可以指定 `base` 参数，它是一个 '/' 开头的路径，默认值也是 '/'：

```js
// 1. path 形式
createWebHistory('/store');
// /cart => http://myweb.com/store/cart
// /checkout => http://myweb.com/store/checkout

// 2. hash 形式
createWebHashHistory('/store');
// /cart => http://myweb.com/store/#/cart
// /checkout => http://myweb.com/store/#/checkout
```

### 路径匹配

路由根据 `path` 参数完成匹配，决定应该向 `<router-view>` 中渲染哪个/哪些组件。当存在多个路径匹配的路由时，仅第一个会生效。

`path` 参数支持多种不同的方式：

1. 按路径完整匹配
  ```
  path: '/login'
  // 可以匹配以下路径
  + /login
  // 无法匹配以下路径
  + /log
  + /loginx
  + /login/x
  ```
2. 包含一个或多个动态参数
  ```
  path: '/user/:id'
  // 可以匹配以下路径
  + /user/1
  + /user/1/
  + /user/abc
  // 无法匹配以下路径
  + /user
  + /user/1/x

  path: '/user/:userId/image/:imageId'
  // 可以匹配以下路径
  + /user/1/image/1
  + /user/abc/image/xyz
  ```
3. 使用正则
  ```
  // 限制参数格式（仅匹配数字形式的 ':id'）
  path: '/user/:id(\\d+)'

  // 可重复参数（*: 0 个或多个；+: 1 个或多个）
  path: '/products/:type*'
  // 可匹配
  + /products
  + /products/a
  + /products/a/b
  + /products/a/b/c

  // 可选参数
  path: '/products/:type?'
  // 可匹配
  + /products
  + /products/a

  // 匹配任意路径（可以用于处理 404）
  path: '/:any(.*)'
  ```

可以使用 `this.$route.params` 获取 URL 中的动态参数，参考 [this.$route](#thisroute)。

#### 匹配和精确匹配

1. 精确匹配：当 `path` 不包含动态参数和正则，且 `this.$route.path` 与之完全相同
  ```
  path: '/login'
  url: 'http://myweb.com/login'
  ```
2. 非精确匹配：
  + 当 `path` 包含动态参数或正则，且 `this.$route.path` 能与之匹配
    ```
    path: '/user/:id'
    url: 'http://myweb.com/user/123'
    ```
  + 当 `this.$route.path` 与子路由匹配时，与父路由为非精确匹配
3. 除以上两种情况，其他的都是不匹配

### 命名视图

命名视图可以同时渲染多个 `<router-view>` 组件，并分别为它们指定要渲染的组件。

```html
// app.vue
<router-view
    name="nav"></router-view>
<router-view></router-view>
```

```js
{
  name: 'About',
  path: '/about',
  components: {
    default: PageAbout,
    nav: AppNav,
  },
  meta: {
    login: false,
  },
},
```

包含 `name` 属性的 `<router-view>` 组件即为命名视图，没有 `name` 属性的为默认视图，它的名称为 'default'。`components` 属性指定了组件对应的视图名称。

**提示**：没有匹配组件的 `<router-view>` 将不会渲染任何内容。

### 重定向

重定向功能可以实现从一个路由自动跳转到另一个路由的功能。

```js
// 1. 直接指定重定向的路由
{
  name: 'Shop',
  path: '/shop',
  redirect: {
    name: 'Store',
  },
},

// 2. 重定向方法
// 可以根据目标路由动态计算重定向的路由和参数
{
  name: 'Article',
  path: '/article/:id',
  redirect: (to) => ({
    path: '/post',
    params: {
      id: to.params.id,
    },
  }),
},
```

### 嵌套路由

嵌套路由功能让我们可以在 `<router-view>` 内的组件中插入更多 `<router-view>`，并重用外层路由的路径。

```js
// src/router/index.js
{
  name: 'Settings',
  path: '/settings',
  components: {
    default: PageSettings,
    nav: AppNav,
  },
  meta: {
    login: true,
  },
  // /settings 模块下的两个子模块
  children: [
    {
      name: 'Profile',
      path: 'profile', // /settings/profile
      component: PageSettingsProfile,
      meta: {
        login: true,
      },
    },
    {
      name: 'Notification',
      path: 'notification', // /settings/notification
      component: PageSettingsNotification,
      meta: {
        login: true,
      },
    },
  ],
},
```

```html
<!-- src/pages/settings/index.vue -->
<div>page-settings</div>
<settings-nav></settings-nav>
<router-view></router-view>
```

这段路由配置会添加三个路径（页面）：

+ '/settings'
+ '/settings/profile'
+ '/settings/notification'

它们都会渲染 'PageSettings' 组件，而 'profile' 和 'notification' 组件会渲染在 'PageSettings' 内的 `<router-view>` 中。

**注意**：嵌套路由中 `children.path` 是否以 '/' 开头会影响最终路径：

+ '/profile': 路径会是 'http://myweb.com/profile'
+ 'profile': 路径会是 'http://myweb.com/settings/profile'

但这并不影响组件的嵌套结构。

## 相关接口

### Router

可以导入路由模块，或在组件中使用 `this.$router` 访问路由实例。它提供以下接口：

+ `currentRoute`: 当前路由
+ `options`: 路由的配置选项
+ `getRoutes()`: 获取路由映射配置
+ `hasRoute()`: 检查是否存在指定路由
+ `addRoute()/removeRoute()`: 添加/删除路由
+ `push()/go()/back()/forward()/replace()`: 手动导航/前进后退
+ `beforeEach()/afterEach()/beforeResolve()`: 在每次导航前/后执行的方法，参考 [导航守卫](#导航守卫)
+ `onError()`: 用于处理导航中发生的错误

#### 导航守卫

导航守卫允许在导航执行的特殊时刻执行一个方法，可以在该方法中记录导航前后的信息，指定新的的导航目标，或直接取消本次导航动作。

导航守卫方法接收两个参数：

+ `to`: 将要进入的目标路由
+ `from`: 将要离开的目标路由

除了 `afterEach()` 以外，导航守卫都是异步执行的，且多个导航守卫会按声明顺序依次执行。返回 `Promise` 会阻断导航执行，直到异步操作结束（resolve/reject）：

```js
router.beforeEach(() => {
  console.log('beforeEach');

  // 2s 之后继续完成导航
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), 2000);
  });
});
```

**提示**：建议不要在 `beforeEach()` 和 `beforeResolve()` 中添加异步过程，因为这会给用户带来操作未响应的错觉。

允许添加导航守卫的特殊时刻包括：

+ 全局守卫（应用到整个路由模块）
  + `beforeEach()`: 在导航前执行
  + `afterEach()`: 在导航完成后执行
  + `beforeResolve()`: 在导航解析前执行。此时组件已加载完毕，而且其他导航守卫已执行完毕
+ 路由守卫（应用到单个路由）
  + `beforeEnter()`: 在导航到该路由前执行
+ 组件守卫（应用到单个组件）
  + `beforeRouteEnter()`: 导航进入该组件前（无法访问 `this`）
  + `beforeRouteUpdate()`: 路由发生变化，但复用了当前组件（如 `params` 或 `query` 更新）
  + `beforeRouteLeave()`: 导航离开该组件前
  
导航守卫方法可以通过返回值控制导航的行为：

+ `void`、`undefined` 或 `true`：导航继续
+ `false` 或抛出错误：导航取消
+ 路由配置：导航到指定的路由

### this.$route

每个组件中，都可以通过 `this.$route` 访问当前路由。它提供以下数据：

+ `name`: 路由名称
+ `params`: 路径中的参数对象
+ `hash`: URL 中 # 及后面的部分
+ `query`: query 参数对象
+ `path`: 当前路径，包含 `hash`
+ `fullPath`: 完整路径，包含 `hash` 和 `query`
+ `meta`: 路由中的 `meta` 数据
+ `matched`: 当前匹配的路由列表
+ `redirectedFrom`: 重定向来源

`this.$route` 的数据是响应式的，可以通过 `computed` 属性获取最新的数据：

```js
computed: {
  userId() {
    return this.$route.params.id;
  },
},
```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/16.router>

在线预览: <https://codesandbox.io/s/vra-vue-16-router-exzpr>

## 继续阅读

+ 上一节: [路由](./readme.md)
+ 下一节: [React Router](./react-router.md)
