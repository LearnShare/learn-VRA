# TemplateRef

TemplateRef 用于定义和引用模板片段。

```html
<ng-template
    #info>info text</ng-template>

<ng-container
    *ngTemplateOutlet="info">not show</ng-container>
```

渲染出的 HTML：

```html
info text
<!--bindings={
  "ng-reflect-ng-template-outlet": "[object Object]"
}-->
```

## 定义模板片段

`<ng-template>` 用于定义模板片段：

```html
<ng-template>not show</ng-template>

<ng-template
    #templateId>
  <span>info text</span>
</ng-template>
```

`<ng-template>` 本身并不会被渲染为 HTML，且未被引用的时候其内容也完全不会渲染。

## 引用模板片段

```html
<ng-container
    *ngTemplateOutlet="templateId">not show</ng-container>
```

`<ng-container>` 用于引用模板片段。`*ngTemplateOutlet="templateId"` 指令的值需要是模板片段的引用 ID。

`<ng-container>` 本身及内容都不会被渲染为 HTML，只有被引用的模板片段的内容会被渲染出来。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/08.ref>

在线预览: <https://codesandbox.io/s/vra-angular-08-ref-9rfgz>

## 继续阅读

+ [模板变量](./ref.md)
+ [@ViewChildren](./view-children.md)
