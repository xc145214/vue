/**
 * Created by xc on 2016/6/8.
 */

var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};