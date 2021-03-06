/**
 * Created by xc on 2016/6/8.
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    //启用source-map 方便排错
    devtool: 'eval-source-map',

    //devServer配置：
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        process:true,
        //配置端口
        //proxy: {
        //    '/api/*': {
        //        target: 'http://localhost:5000',
        //        secure: false
        //    }
        //}

    },

    //sass、css 等loader 处理顺序从右往左。
    module:{
        //jsHint预处理
        preLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'// 图片大于40K会启动base64转码
            }
        ]
    },

    //custom jshint options
    // any jshint option http://www.jshint.com/docs/options/
    jshint: {
        "esnext": true
    },

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World app'
        })
    ],
};