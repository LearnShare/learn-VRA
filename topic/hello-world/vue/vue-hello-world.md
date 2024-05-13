# Hello World

## 编写最小化的 Hello World

在上一节完成的代码基础上进行修改：

1. 精简 components/hello-world.vue
  ```vue
  <template>
    <h1>{{ msg }}</h1>
  </template>

  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
  };
  </script>
  ```
2. 修改 src/app.vue
  ```vue
  <template>
    <hello-world msg="Hello World from Vue" />
  </template>

  <script>
  import HelloWorld from '@/components/hello-world.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
  };
  </script>
  ```
3. 精简 src/main.js
  ```js
  import { createApp } from 'vue'

  import App from './app.vue'

  const app = createApp(App)

  app.mount('#app')
  ```
4. 删除不相关的文件和目录
  ```
  public/
  src/components/ (hello-world.vue 以外的文件)
  src/assets/
  src/router/
  src/store/
  src/views/
  ```

## 最终代码

Github: <https://github.com/LearnShare/vra-vue/tree/01.hello-world>

## 继续阅读

+ 上一节: [项目结构](./vra-vue.md)
+ 下一节: [Create React App](../react/create-react-app.md)
