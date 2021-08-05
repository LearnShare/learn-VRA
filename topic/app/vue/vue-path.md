# 路径别名

+ [Webpack resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias)
+ [Github: vuejs/vue-cli](https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/base.js#L54)

## @

Vue CLI 默认提供了名为 `@` 的路径别名，并将它映射到 `src` 路径：

```js
.alias
  .set('@', api.resolve('src'))
```

因此，我们可以使用路径别名简化路径的书写，例如：

```js
// 工作文件: src/components/dialog/alert/index.vue
// 目标文件: src/components/button/index.vue

// 1. 不使用别名
import Button from '../../../button/index.vue';

// 2. 使用别名
import Button from '@/components/button/index.vue';
```

## 自定义路径别名

可以在 [Vue CLI: 项目配置文件](../../hello-world/vue/vue-cli.md#项目配置文件) 中设置自定义路径别名，简化路径的书写：

```js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        comp: resolve('src/components'),
      },
    },
  },
};
```

```js
// 简化前
import Button from '@/components/button/index.vue';
// 简化后
import Button from 'comp/button/index.vue';
```

## Code 中的自动跳转

在使用路径别名后，Code 就无法提供路径解析和点击跳转功能了，可以参考以下方案处理：

+ [Stackoverflow: Make VS code read webpack.config and recognize path with alias?](https://stackoverflow.com/questions/38044010/make-vs-code-read-webpack-config-and-recognize-path-with-alias)
+ [Code 插件: 别名路径跳转](https://marketplace.visualstudio.com/items?itemName=lihuiwang.vue-alias-skip)
