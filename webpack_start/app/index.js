/**
 * Created by xc on 2016/6/8.
 */
/**
 * css
 */
require('./main.scss');

/**
 * 第三方依赖。
 * @type {jQuery|exports|module.exports}
 */
var $ = require('jquery');
var moment = require('moment');

var sub = require('./sub');

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(sub());
$('body').append('<p>look at me! now is ' + moment().format() + '</p>');


