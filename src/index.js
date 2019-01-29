/**
 * @file
 * @author
 * @dete
 */
// import _ from 'lodash';
import './style.css';
// import Dog from './dog.png';
import printMe from './print.js';

import {cube} from './math';

if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development model');
}
// TODO
function component() {
// let element = document.createElement('div');
    let element = document.createElement('pre');
    let btn = document.createElement('button');

    // Lodash，现在由此脚本导入
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    element.innerHTML = [
        'Hello webpack!',
        '5 cube is equal to ' + cube(5)
    ].join('\n\n');



    // 将图像添加到我们现有的 div。
    // let myDog = new Image();//注意是new的是Image
    // myDog.src = Dog;
    // element.appendChild(myDog);

    btn.innerHTML = 'Click me and console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());
// 只启动模块热替换，按钮事件还是会绑定在旧的函数上
// 为了让HRM正常工作，需要module.hot.accept更新绑定到新的printMe函数上
let element = component();// 当print.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) { // 方便print.js内部发生变化时可以告诉webpack接受更新的模块
    module.hot.accept('./print.js', function () {
        console.log('Accepting the update printMe module!');
    // printMe();
        document.body.removeChild(element);
        element = component();// 重新渲染页面后，component更新click事件处理
        document.body.appendChild(element);

    });
}
