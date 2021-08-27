# 生命周期

参考内容：

+ [Angular Guide: 生命周期钩子](https://angular.cn/guide/lifecycle-hooks)

## 生命周期钩子

要在 Angular 组件中使用生命周期钩子方法，需要从 `@angular/core` 中导入响应接口，并在组件类中实现它。

生命周期钩子可以应用在组件或指令中。

方法名是接口名称前加上 `ng`，如 `OnInit` 接口对应的方法名为 `ngOnInit()`：

```ts
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  //
})
class DemoLifeCycle extends Component
    implements OnInit, AfterViewInit, OnDestory {
  ngOnInit() {
    // 组件/指令完成了数据初始化
    // 可以在这里执行计时器，或接口调用
  }

  ngAfterViewInit() {
    // 组件/指令完成了自身及内部组件的渲染
  }

  ngOnDestory() {
    // 组件/指令销毁前
    // 可以在这里清除计时器，或关闭网络连接
  }
}
```

## 继续阅读

+ 上一节: [生命周期](../react/lifecycle.md)
+ 下一节:
