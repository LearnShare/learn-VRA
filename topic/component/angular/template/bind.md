# 属性绑定

## [prop]=""

上一节的例子中，我们已经了解了绑定 `innerHTML` 属性的方法：

```html
<p
    [innerHTML]="htmlContent"></p>
```

这里讲的属性绑定，是指对 [DOM 元素属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Element#properties)（properties）的绑定，而非 [HTML 标签属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes)（attributes）。

`[prop]=""` 中的属性名应当是是有效的 DOM 元素属性，或组件自定义的输入属性。属性值可以是组件属性、表达式或模板的局部变量。

下面两种方式的结果是一致的，但第二种更加直观：

```html
<img
    src="{{ imgUrl }}">
<img
    [src]="imgUrl">
```

**注意**：插值的方式仅适用于字符串数据。

## [attr.attr-name]=""

部分 HTML 标签属性并没有对应的 DOM 元素属性（如 aria-* 属性和 SVG 元素属性），这时候需要借助新的语法绑定标签属性：

```html
<button
    [attr.aria-label]="submitButtonLabel">Submit</button>
```

如果绑定的值是 `null` 或 `undefined`，那么该属性将不会出现在渲染出的 HTML 中。

要格外注意 attributes 和 properties 属性名的差异，如 `colspan` 和 `colSpan`。

## [class]="" | [class.key]=""

`[class]=""` 和 `[class.key]=""` 用于绑定 `class` 属性，参考 [样式]。

## [style]="" | [style.key]=""

`[style]=""` 和 `[style.key]=""` 用于绑定 `style` 属性，参考 [样式]。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/03.template>

在线预览: <https://codesandbox.io/s/vra-angular-03-template-nhqlb>

## 继续阅读

+ 上一节:
+ 下一节:
