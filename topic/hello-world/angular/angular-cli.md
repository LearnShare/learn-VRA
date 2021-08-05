# Angular CLI

+ <https://angular.io/cli>
+ <https://angular.cn/cli>

## 关于 @angular/cli

Angular CLI (`@angular/cli`) 是 Angular 的官方开发工具，它提供的主要功能：

+ Angular 项目的创建、执行、测试和编译
+ 基于 Webpack 的构建流程
+ 可通过插件扩展功能
+ 丰富的自定义配置选项

## 安装 @vue/cli

```bash
npm install -g @angular/cli
```

安装完成后，可以通过如下命令验证安装结果：

```bash
ng v

# 或
# ng version
```

更多命令：

```bash
# 查看帮助
ng help

# 子命令帮助
ng [command] --help

# 创建项目
ng new project-name

# 交互式创建项目
ng new project-name --interactive

# 快速生成/修改文件
ng generate component hello-world

# 更新项目依赖
ng update
```

## 创建项目

在工作目录执行以下命令，进入交互式创建流程：

**注意**：创建项目前，请确保 vra-angular 目录为空，或不存在。

```bash
ng new vra-angular --interactive
```

按步骤选择配置：

1. 是否添加路由功能
  + y √
  + N
2. 选择使用 CSS 的方式
  + CSS
  + SCSS √
  + Sass
  + Less

## 运行和预览

```bash
cd vra-angular

npm start
```

在浏览器中访问 <http://localhost:4200/> 即可。

## 继续阅读

+ 上一节: [hello-world](../readme.md)
+ 下一节: [项目结构](./vra-angular.md)