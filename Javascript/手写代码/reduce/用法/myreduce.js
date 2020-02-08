Array.prototype.myreduce = function (cb, prev) {
    for (let i = 0; i < this.length; i++) {
        if (!prev) {
            prev = cb(this[i], this[i + 1])
            i++;
        } else {
            prev = cb(prev, this[i])
        }
    }
    return prev
} 
let arr = [1, 2, 3];
let res = arr.myreduce((acc,val)=>acc+val,1);
console.log(res);//6

const str = 'jshdjsihh';
    const obj = str.split('').myreduce((pre,item) => {
        pre[item] ? pre[item] ++ : pre[item] = 1;
        return pre;
    },{})
console.log(obj) // {j: 2, s: 2, h: 3, d: 1, i: 1}









// 参考版本
function each(param, callback) {
    if (param instanceof Array) {
        for (var i = 0; i < param.length; i++) {
            callback(param[i], i, param);
        }
    } else if (Object.prototype.toString.call(param) === '[object Object]') {
        for (var val in param) {
            callback(param[val], val, param);
        }
    } else {
        throw new TypeError('each 参数错误！');
    }
}

function reduce2(param, callback, initVal) {
    var hasInitVal = initVal !== void 0;
    var acc = hasInitVal ? initVal : param[0];
    each(hasInitVal ? param : Array.prototype.slice.call(param, 1), function (v, k, o) {
        acc = callback(acc, v, k, o);
    });
    return acc;
}
var b = reduce2([1, 2, 3], function (init, value) {
    return init + value //自定义一个加法规则
})
