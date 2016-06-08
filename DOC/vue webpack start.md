# vue + webpack 起手式

##1.  基本目录架构

建立专属目录与 `package.json`

```
$ mkdir [project]
$ cd [project]
$ npm init -y```
```

创建简单的 `vue` 范例

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>vue.js</title>
  </head>
  <body>
      <h3>{{ message }}</h3>
    <script src="dist/build.js"></script>
  </body>
</html>
```

注意：
>1. 使用的 `dist/build.js` 这个文件在编译前是不存在。
>2. `{{ message }}`` 这个语法由 `vue.js` 处理

建立 `src` 目录与 `src/main.js` 文件

```
import Vue from 'vue'

new Vue({
  el: 'body',
  data: {
      message: "Hello Vue"
  }
})
```