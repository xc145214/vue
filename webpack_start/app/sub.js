/**
 * Created by xc on 2016/6/8.
 */

//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2he world";
    return element;
}

module.exports = generateText;

