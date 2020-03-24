var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 本章和ES6中的差不多
var vars = 8;
console.log(vars);
var lets = 5;
lets = 6;
console.log(lets);
var numList = 9;
console.log(numList);
// 解构
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
function f(_a) {
    var a = _a.a, b = _a.b;
}
function f2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
// 展开操作符
var first2 = [1, 2];
var second2 = [3, 4];
var bothPlus = __spreadArrays([0], first2, second2);
console.log(bothPlus);
