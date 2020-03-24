// boolean
var idDone = false;
console.log(idDone);
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
console.log(decLiteral);
console.log(hexLiteral);
// 字符串
var names = "agamgn";
names = 'ganin';
console.log(names);
// 模版字符串
var name_temp = "agamgn";
var age = 18;
var sentence = "Hello,my name is " + names + ".\nIll be " + (age + 1) + " years old netx month.";
console.log(sentence);
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list);
console.log(list2);
// 元组
var x;
x = ['hello', 10];
// x=[10,"hellp"];error
console.log(x);
console.log(x[0].substr(1));
// 其实是可以转换为js的
// x[3] = 'world';
// console.log(x);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log(c1[1]);
// Any任意类型
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// Any和Object的区别
var str = "agamgn";
console.log(str.substr(1));
var prettySure = "ganin";
// console.log(prettySure.substr(1));
// Void没有类型
function warnUser() {
    console.log("this is my warning message");
}
var unusable = undefined;
console.log(unusable);
warnUser();
// Null和Undefined
var u = undefined;
var n = null;
// never永不存在的值
function error(message) {
    throw new Error(message);
}
error("never");
// 腿短的返回值为never
function fail() {
    return error("something failer");
}
fail();
// 类型断言：没有人比我了解,<>或者as
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length;
console.log(strLength);
console.log(strLength1);
// https://www.tslang.cn/docs/handbook/basic-types.html
