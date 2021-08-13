# 样式

## 内联样式

```jsx
this.state = {
  // 1. inline style
  styleObject: {
    fontSize: '16px',
    color: '#AAF',
  },
};

<p
    style={{
      fontSize: '16px',
    }}>inline style object</p>
<p
    style={styleObject}>style object from data</p>
```

**注意**：`style` 属性并不支持字符串形式的 CSS 代码，如 `font-size: 16px;`。

## 使用 class 关联样式

```jsx
// 2. style with class
import classNames from 'classnames';

infoStyle: {
  info: true,
  warning: true,
},

<h2>2. style with class</h2>
<p
    className="error">error message</p>
<p
    className={classNames(infoStyle)}>warning message</p>
<button className="btn btn-primary">Bootstrap</button>
```

## 使用其他语言

+ [SASS/SCSS](../../hello-world/react/vra-react-scss.md)

Create React App 创建的项目无法直接支持 Less 或 Stylus，但有许多实现方案：

1. `eject` 导出相关配置之后，手动配置 Webpack。但导出配置会影响后续升级和维护
2. 使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) 覆盖相关配置，或配合 [customize-cra](https://github.com/arackaf/customize-cra) 提供的相关功能
3. [CRACO](https://github.com/gsoft-inc/craco)

## CSS Modules

```jsx
import darkStyles from '../css/dark.module.scss';

<h2>3. css modules</h2>
<p
    className={darkStyles.dark}>dark</p>
```

## 最终代码

Github: <https://github.com/LearnShare/vra-react/tree/06.style>

在线预览: <https://codesandbox.io/s/vra-react-06-style-ev2vs>

## 继续阅读

+ 上一节: [表单](./form.md)
+ 下一节:
