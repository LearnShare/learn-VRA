# Create React App

<https://create-react-app.dev/>

## 关于 Create React App

Create React App 是 React 的官方开发工具，它提供的主要功能：

+ React 项目的创建、执行、测试和编译
+ 基于 Webpack 的构建流程

## 安装 Create React App

如果你希望通过 npx 运行和创建项目，可以直接进入下一小节。

```bash
npm install -g create-react-app
```

安装完成后，可以通过如下命令验证安装结果：

```bash
create-react-app -V

# 或
# create-react-app --version
```

更多命令：

```bash
# 查看环境信息
create-react-app --info

# 查看帮助
create-react-app -h

# 创建项目
create-react-app project-name

# 使用模板创建项目
create-react-app project-name --template template-name
```

## 创建项目

默认使用 [cra-template](https://github.com/facebook/create-react-app/tree/main/packages/cra-template) 作为模板。

### npx 方式

关于 npx: <https://docs.npmjs.com/cli/v7/commands/npx>

```bash
npx create-react-app project-name
```

### 本地安装方式

```bash
create-react-app project-name
```

## 运行和预览

```bash
cd vra-react

npm start
```

在浏览器中访问 <http://localhost:3000/> 即可。

## 继续阅读

+ 上一节: [hello-world](./readme.md)
+ 下一节: [项目结构](./vra-react.md)
