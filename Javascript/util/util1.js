// 返回其数据类型
type = para => Object.prototype.toString.call(para).slice(8, -1)

// 阶乘
factorial = num => {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count *= i;
    }
    return count;
}
function* factorial2(){
    let x=1;
    let fac=1;
    while(true){
        yield fac;
        fac=fac*++x
    }
}
// 银行卡分割
bank_filter = val => {
    val += '';
    val = val.replace(/(\s)/g, '').replace(/(\d{4})/g, '$1 ').replace(/\s*$/, '');
    return val;
}

//   深拷贝///不全https://segmentfault.com/a/1190000015455662
deepClone = source => {
    const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
    for (let keys in source) { // 遍历目标
        if (source.hasOwnProperty(keys)) {//判断属性是否来自原型链上https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
            if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);//递归
            } else { // 如果不是，就直接赋值
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}


// 获取视口尺寸
// if过多可以使用||或者&&来简化
getViewportOffset = () => {
    return {
        w: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
        h: window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
    }
}

// 数字前补零，可以使用ES6中的padStart或者padEnd,这两个还有一个用途，提示字符串格式
//"09-12".padStart(10,"YYYY-MM-DD")
padding = (num, length) => {
    for (let len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;
    }
    return num;
}

// 获取地址栏传递来的参数
getQueryString = name => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    // unescape编码函数
    if (r != null) return unescape(r[2]); return null;
}

// 获取当前页面的滚动位置
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  });
  









