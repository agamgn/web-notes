// bind
// 改变this的例子
function a() {
    console.log(this);//输出宿主环境的全局变量
}

function b() { }
var c = { name: "agamgn" };
// 不传，或者传null,undefined， 函数中的this指向宿主环境的全局对象
console.log(a.call());//输出宿主环境的全局变量
// 传递另一个函数的函数名，函数中的this指向这个函数的引用
console.log(a.call(b));//[Function: b]
// 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
console.log(a.call(1));//[Number: 1]
// 传递一个对象，函数中的this指向这个对象
console.log(a.call(c));//指向Object { name: 'agamgn' }

// 改变上下文通用例子
function add(x, y) {
    console.log(x + y);
}
function reduce(x, y) {
    console.log(x - y);
}
add.call(reduce, 3, 2);//5
// console.log(window.add(3, 2) === a.call(b, 3, 2));//true



// 例子2
var obj1 = {
    num: 10,
    fn: function (n) {
        console.log(this.num + n);
    }
}
var obj2 = {
    num: 20,
    fn: function (n) {
        console.log(this.num + n);
    }
}
obj1.fn.call(obj2, 10); //30



// apply
var obj1 = {
    num: 10,
    fn: function (n) {
        console.log(this.num + n);
    }
}
var obj2 = {
    num: 20,
    fn: function (n) {
        console.log(this.num + n);
    }
}
obj1.fn.apply(obj2, [10]); //30


// apply和bind相比效率问题
function x(a, b) { }
var a = [1, 2, 3];
console.time("call");
for (var i = 0; i < 1000000; i++) {
    x.call(this, 1, 2, 3);
}
console.timeEnd("call");

console.time("apply");
for (var j = 0; j < 1000000; j++) {
    x.apply(this, a);
}
console.timeEnd("apply");


// bind
var bar = function () {
    console.log(this.x);
}
var foo = {
    x: 3
}
var func = bar.bind(foo);
func();//3

