# NgRx

参考资料：

+ [Wikipedia: Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
+ [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
+ [Wikipedia: Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern)
+ [TC39: Observable](https://tc39.es/proposal-observable/)
+ [Angular Guide: 可观察对象](https://angular.cn/guide/observables)
+ [RxJS](https://rxjs.dev/)
+ [Learn RxJS](https://www.learnrxjs.io/)
+ [NgRx](https://ngrx.io/)

## 响应式编程、可观察对象和 RxJS

响应式编程（Reactive programming）的一种软件开发领域的开发方式，它可以概括为“处理异步数据流的开发方式”：

>Reactive programming is programming with asynchronous data streams.  
>The introduction to Reactive Programming you've been missing (by @andrestaltz)

可观察对象（Observable）是响应式编程的一种设计模式，RxJS 是一个实现这种模式的 JS 库。

### Observable/RxJS 核心概念

+ `Observable`: 可观察对象，包含了一系列数据或事件，会在不同时间向观察者提交数据或事件
+ `Observer`/`Subscriber`: 观察者/订阅者，包含多个回调方法，用于处理可观察对象提交的数据或事件
+ `Subcribe`/`Unsubcribe`: 观察者可以订阅/取消订阅可观察对象
+ `Operators`: 基于已有对象或数据创建新的可观察对象

与其他模式的比较：

+ Event/Listener - 执行/发生时机:
  + 不论是否有事件处理方法，事件可能都会发生
  + Observable 仅在被观察者订阅后，才会执行并向后者提交数据或事件
+ Promise - 执行，数据和状态更新:
  + 无法被终止，且仅能获取执行结果（成功或失败）
  + Observable 可以随之被终止，以及通过 next/error 随时提供数据和状态跟新
+ Generator - 获取数据的方式:
  + 必须从调用方发起调用和获取数据
  + Observable 会主动向观察者提供数据和状态更新

### 定义 Observable

```js
import {
  Observable,
} from 'rxjs';

const dataStream = new Observable(observer => {
  setInterval(() => {
    observer.next(Date.now());
  }, 1000);
});
```

observer 参数提供了三个方法，用于向观察者传递数据/事件：

+ next(data?): 传递数据，可以在需要时调用
+ error(error?): 传递错误信息，可以在需要时调用
+ complete(): 结束订阅，仅能执行一次

RxJS 还提供了许多其他创建可观察对象的方法：

+ from(any): 从数组、类数组对象、Promise、可迭代对象或类可观察对象创建
+ of(...args): 从参数创建
+ fromEvent(target, event): 从目标的指定事件创建
+ interval(time): 创建定时更新的可观察对象

### 订阅和 Observer

```js
dataStream.subscribe({
  next: (data) => console.log(data),
});
```

`Observable.subscribe(observer)` 用于订阅 Observable 的数据更新，其参数称为观察者或订阅者：

```js
// 1. 仅提供 next 回调
dataStream.subscribe(data => {});

// 2. 可提供 next/error/complete 回调
dataStream.subscribe({
  // 必须的
  next: (data) => {},
  // 可选的
  error: (error) => {},
  // 可选的
  complete: () => {},
});
```

多个被订阅的 Observable 均独立执行，并无关联。

`subscribe()` 方法会返回订阅对象，可以调用其 `unsubscribe()` 方法主动结束订阅。

我们可以手动处理 Observable 的返回值，在其中做一些清理操作（如结束定时器，或结束网络请求）：

```js
const dataStream = new Observable(observer => {
  const timer = setInterval(() => {
    observer.next(Date.now());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
});

const sub = dataStream.subscribe({
  next: (data) => console.log( data),
});

setTimeout(() => {
  sub.unsubscribe();
}, 5000);
```

订阅结束后，可观察对象将无法向该观察者继续发送数据和状态更新。

## NgRx

NgRx 可以为 Angular 提供状态管理功能，它的核心就是 RxJS。

核心概念：

+ Actions
+ Reducers
+ Selectors

### Actions

Actions 类似于事件，它是一个包含 `type` 属性的普通对象，其他属性代表了事件提供的额外数据。

#### createAction()

`createAction()` 用于创建 “Action Creator”：

```ts
// store.actions.ts
import {
  createAction,
  props,
} from '@ngrx/store';

// 1. 仅包含类型
const clear = createAction('clear');
// 2. 需要包含额外数据
const setToken = createAction('setToken', props<{ token: string }>());
// 3. 以方法作为额外参数
const setToken = createAction('setToken', (data) => data.token);
```

#### dispatch()

`store.dispatch()` 用于触发 Action 并提供额外的数据：

```ts
// *.component.ts
import {
  clear,
  setToken,
} from '../store/store.actions';

// 1. 无额外参数
store.dispatch(clear());
// 2. 包含额外参数
store.dispatch(setToken({
  token: '123',
}));
```

### Reducers

Reducers 用于根据 Action 处理数据更新。

#### 定义

```ts
// store.module.ts
import {
  createReducer,
  on,
  Action,
} from '@ngrx/store';

// 1. 引入 Actions
import {
  setToken,
  clear,
} from './store.actions';

// 2. 定义 State interface
export interface UserState {
  token: string;
}

// 3. 编写初始 State
export const initialState: UserState = {
  token: 'initial-token',
};

// 4. 编写 Reducer 逻辑
export const userReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({
    ...state,
    token,
  })),
  on(clear, (state) => ({
    ...state,
    token: '',
  })),
);
```

#### 注册 Store 模块

```ts
// app.module.ts
import {
  StoreModule,
} from '@ngrx/store';

import {
  userReducer,
} from './store/store.module';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

### Selectors

Selectors 用于从 Store 中获取数据：

```ts
// store.selectors.ts
import {
  createSelector,
} from '@ngrx/store';

import {
  UserState,
  AppState,
} from './store.module';

const selectUserState = (state: AppState) => state.user;

export const selectToken = createSelector(
  selectUserState,
  (state: UserState) => state.token,
);
```

#### store.select()

`store.select()` 用于从 Store 中获取数据：

```ts
// page-header.component.ts
import {
  Store,
} from '@ngrx/store';

import {
  selectToken,
} from '../../store/store.selectors';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  token$ = this.store.select(selectToken);

  constructor(private store: Store) {}
}
```

```html
<li>token: {{ token$ | async }}</li>
```

`async` 是 Angular 提供的管道功能，它可以自动订阅 Observable，并及时更新对应的值。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/13.ngrx>

在线预览: <https://codesandbox.io/s/vra-angular-13-ngrx-dksso>

## 继续阅读

+ 上一节: [Redux](../react/redux.md)
+ 下一节:
