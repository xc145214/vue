# vue + webpack 起手式



## 基本目录架构

### 1. 建立专属目录与 `package.json`

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

##  webpack 的配置
### 2.安裝 webpack, webpack-dev-server 與相關 loaders

```
$ npm i webpack webpack-dev-server webpack-merge css-loader style-loader file-loader url-loader babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime vue-loader vue-html-loader vue-style-loader vue-hot-reload-api vue --save-dev

# -E 參數會定版，原本會是 ^1.0.0 -> 1.0.0
# webpack: webapck 核心程式
# webpack-dev-server: 開發伺服器
# webpack-merge: 合併設定檔使用
# css-loader: 編譯匯入 css
# style-loader: 把編譯後的 css 整合進 html
# file-loader: 編譯匯入檔案類型的資源
# url-loader: 編譯匯入檔案類型的資源，把檔案轉成 base64 等
# babel-core: ES2015 babel 編譯核心
# babel-loader: 編譯匯入 ES2015 類型的檔案
# babel-plugin-transform-runtime: polyfilling
# babel-preset-es2015: es2015 語法
# babel-preset-stage-0: 開啟草稿階段的功能
# babel-runtime: babel 執行環境
# vue-loader: 編譯匯入 vue 元件檔案
# vue-html-loader: 編譯 vue 的 template 部份
# vue-style-loader: 編譯 vue 樣式部分
# vue-hot-reload-api: Hot reload API for Vue components
```

## webpack.config.js配置

```
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var T = process.env.npm_lifecycle_event

var common = {
  entry: {
    main: path.join(__dirname, 'src', 'main'),
    venders: path.join(__dirname, 'src', 'venders')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
        /* include: path.join(__dirname, 'src') */
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.posix.join(__dirname, 'public', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json', '.scss', '.css']
  },
}

if (T === 'dev' || !T) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if (T === 'build') {
  module.exports = merge(common, {})
}
```

+ [原文链接](https://segmentfault.com/a/1190000005363030)