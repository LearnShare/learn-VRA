# 非 props 属性

在 Angular 中，非 props 属性都将应用到组件根元素上：

single-root.component.ts:

```ts
import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-single-root',
  templateUrl: './single-root.component.html',
})
export class SingleRootComponent {
  @Input() attrA = '';
}
```

single-root.component.html:

```html
<div class="single-root">single-root</div>
```

demo-attrs.component.html:

```html
<app-single-root
    attrA="A"
    attrB="B"
    id="x"
    class="y"
    style="color: red;"></app-single-root>
```

渲染出的 HTML：

```html
<app-single-root
    attra="A"
    attrb="B"
    id="x"
    class="y"
    style="color: red;"
    ng-reflect-attr-a="A">
    <div class="single-root">single-root</div>
</app-single-root>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/09.attrs>

在线预览: <https://codesandbox.io/s/vra-angular-09-attrs-ckykq>

## 继续阅读

+ 上一节: [跨组件数据传递](../readme.md)
+ 下一节: [内容投影](./ng-content.md)
