# Vuex

专门为 Vue 开发的状态管理库。

+ [Vuex](https://next.vuex.vuejs.org/)

Vuex 的核心概念：

+ Store: 数据仓库
+ State: 数据在特定时刻的值
+ Getters: 获取数据
+ Mutations: 修改数据
+ Actions: 执行某些操作，并触发 Mutations
+ Modules: 子模块

## Store

数据仓库，用于存储数据，并提供获取数据、修改数据和监听数据变化的接口。

每个 Vue 应用中仅需要一个 Store 实例，作为全局顶级的数据仓库。

```js
// src/store/index.js
import {
  createStore,
} from 'vuex';

const store = createStore({
  state() {
    return {
      // JWT token
      token: '',
      userData: null,
    };
  },
  getters: {
    hasLogin: (state) => !!(state.token && state.userData),
  },
  mutations: {
    clear(state) {
      state.token = '';
      state.userData = null;
    },
  },
});

export default store;
```

配置选项：

+ state
+ getters
+ mutations
+ actions
+ modules
+ plugins
+ strict
+ devtools

## State

Store 中存储的数据在特定时刻（初始化，及修改前后）的值。

在 `createStore()` 中声明的为初始数据，在 `getters`/`mutations` 方法中提供的 `state` 参数为当前数据。

### 访问数据

1\. store.state

可以通过 `store.state` 直接访问 Store 实例当前的数据。

2\. this.$store

首先，在 Vue 应用中使用 Store 实例：

```js
// main.js
import store from './store/index';

const app = createApp(App);

app.use(store);

app.mount('#app');
```

然后，可以在组件内使用 `this.$store` 访问 Store 实例：

```js
// components/page-header.vue
mounted() {
  const {
    token,
    userData,
  } = this.$store.state;

  this.token = token;
  this.userData = userData;
},
```

但这种方式获得的数据并不是响应式的。

3\. 响应式数据

为了获得响应式的数据，需要用到组件的 computed 属性：

```js
import {
  mapState,
} from 'vuex';

computed: {
  // 1. 直接返回 this.$store.state 中的数据
  token() {
    return this.$store.state.token;
  },
  // 2. 使用 mapState 生成计算属性
  ...mapState({
    userData: (state) => state.userData,
  }),
},
```

## Getters

获取数据的另一种方法，类似于组件的 computed 属性，可以完成自动计算并返回结果。

```js
getters: {
  hasLogin: (state) => !!(state.token && state.userData),
  userId: (state) => {
    return (state.userData && state.userData.id)
      ? state.userData.id
      : null;
  },
},
```

Getters 有两个可选参数：

+ state: 当前的 state 数据
+ getters: Store 中的 getters 对象

Getters 也可以返回方法：

```js
getters: {
  hasUserType: (state) => (type) => {
    const {
      userTypes,
    } = state.userData;
    return userTypes
        && userTypes.indexOf(type) >= 0;
  },
},
```

### 访问 Getters

Store 中的 Getters 都会出现在 store.getters 对象中：

```js
computed: {
  // 1. 通过 store.getters 直接访问
  hasLogin() {
    return this.$store.getters.hasLogin;
  },
  // 2. 访问 Getters 返回的方法
  isAdmin() {
    return this.$store.getters.hasUserType('admin');
  },
  // 3. 通过 mapGetters 生成计算属性
  ...mapGetters([
    'userId', // store.getters.userId
  ]),
  // 4. 通过 mapGetters 指定别名
  ...mapGetters([
    userIdAlias: 'userId',
  ]),
},
```

## Mutations

Mutations 是修改 Store 中数据的唯一方法。

```js
mutations: {
  setToken(state, data) {
    state.token = data.token;
  },
  setUserData(state, data) {
    state.userData = data;
  },
  clear(state) {
    state.token = '';
    state.userData = null;
  },
},
```

Mutations 方法有两个可选参数：

+ state: 当前的 state
+ payload: 通过 store.commit 提交的数据

Mutations 按方法名称进行匹配，方法必须是同步的。

### 触发 Mutations

可以在组件中使用 `store.commit()` 触发 Mutations，对数据进行更改：

```js
// components/page-user.vue
methods: {
  setUserData() {
    // 1. commit(type, payload?) 形式
    this.$store.commit('setUserData', {
      id: 222,
      name: 'nobody',
      userTypes: [
        'user',
      ],
    });
  },
  setToken() {
    // 2. commit(data) 形式，type 放在 data 中
    this.$store.commit({
      type: 'setToken',
      token: 'new-token',
    });
  },
  // 3. 使用 mapMutations 生成方法
  ...mapMutations([
    'clear',
  ]),
},
```

## Actions

Actions 用于执行某个动作，并提交 Mutations。其中可以包含异步操作或其他副作用，但建议尽量避免这种操作。

Actions 中不能直接修改 State。

```js
actions: {
  login(context, data) {
    const {
      commit,
    } = context;
    const {
      username,
      password,
    } = data;

    AuthAPI.login(username, password)
      .then((res) => {
        const {
          token,
          userData,
        } = res.data;

        commit('setToken', {
          token,
        });
        commit('setUserData', userData);
      });
  },
  logout({ commit }) {
    commit('clear');
  },
},
```

Actions 方法有两个可选参数：

+ context: Store 的部分功能
  + state: store.state
  + getters: store.getters
  + commit: store.commit
  + dispatch: store.dispatch
+ payload: 通过 store.dispatch 提交的数据

### 触发 Actions

类似于 `store.commit()`，可以在组件中使用 `store.dispatch()` 触发 Actions：

```js
import {
  mapActions,
} from 'vuex';

methods: {
  login() {
    // 1. dispatch('type', payload?) 形式
    this.$store.dispatch('login', {
      username: 'random',
      password: 'itsnotsafe',
    });
  },
  // 2. 使用 mapActions 生成方法
  ...mapActions([
    'logout',
  ]),
},
```

## Mudules

某些项目中，Store 模块的数据和逻辑可能会很多很复杂，导致代码难以维护。此时，可以将 Store 分为多个子模块。

每个子模块都可以包含 state/getters 等配置选项，甚至可以有下一级子模块。

```js
// user.js - 登录状态、用户信息
export default {
  state: () => ({}),
  getters: {},
  // ...
};

// menu.js - 菜单栏、导航
export default {
  state: () => ({}),
  getters: {},
  // ...
};

// index.js - 主模块
import userModule from './user';
import menuModule from './menu';

const store = createStore({
  // ...
  modules: {
    user: userModule,
    menu: menuModule,
  },
});
```

子模块中的特殊之处：

+ getters/mutations 的首个参数 `state` 均为本模块的当前数据
+ getters 会有第三个参数 `rootState`，代表跟模块的数据
+ actions 的首个参数 `context` 会额外提供 `rootState`/`rootGetters`，代表跟模块的数据

### 访问和使用

+ 'State': `store.state.menu.*`
+ 'Getters': `store.getters.*`
+ 'Mutations': `store.commit('type')`
+ 'Actions': `store.dispatch('type')`

### 命名空间

为了更清晰地区分不同子模块中的数据和方法名称，可以为子模块开启命名空间：

```js
// menu.js
export default {
  // 开启命名空间
  namespaced: true,
};
```

开启命名空间后，State 之外的名称需要包含模块名：

+ 'Getters': `store.getters['menu/name']`
+ 'Mutations': `store.commit('menu/type')`
+ 'Actions': `store.dispatch('menu/type')`

mapActions 等方法也需要进行调整：

```js
// 1. 指定完整名称
mapActions([
  switchTo: 'menu/switchTo',
])
// 2. 指定前缀
mapActions('menu', [
  switchTo,
])
// 3. 使用 createNamespacedHelpers 指定模块
import {
  createNamespacedHelpers,
} from 'vuex';

const {
  mapActions,
} = createNamespacedHelpers('menu');
mapActions([
  switchTo,
])
```

### 动态注册模块

可以在应用中按需注册新的模块：

```js
store.registerModule('moduleName', {});
```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/15.vuex>

在线预览: <https://codesandbox.io/s/vra-vue-15-vuex-tkzb6>

## 继续阅读

+ 上一节: [状态管理](../state-management.md)
+ 下一节: [Redux](../react/redux.md)
