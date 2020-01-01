var obj = {};    //普通对象
console.log(obj.prototype);  //undefined
console.log(obj.constructor) // Object() { [native code] }


function func() { };  //函数对象
console.log(func.prototype); // {...}
console.log(func.constructor); //Function() { [native code] }
console.log(func.prototype.constructor); //func() { }




function People(name) {
    this.name = name;
}

People.prototype.age = 18;

let People1 = new People("agam");
let People2 = new People("gn");
console.log(People1.name + "今年:" + People1.age);// agam今年:18
console.log(People2.name + "今年:" + People2.age);// gn今年:18
People1.age = 20;
console.log(People1.name + "今年:" + People1.age);// agam今年:20
console.log(People2.name + "今年:" + People2.age);// gn今年:18
People.prototype.age = 22;
console.log(People1.name + "今年:" + People1.age);// agam今年:22
console.log(People2.name + "今年:" + People2.age);// gn今年:22



var func = function (name) {
    this.name = name;
    this.get = function () {
        return this.name;
    };
}

func.prototype = {
    set: function (newName) {
        this.name = newName;
    }
}

var afunc = new func("agam");
console.log(afunc.prototype); //undefined 普通对象没有原型
console.log(afunc.get()); // agam
afunc.set("agamgn");
console.log(afunc.get()); //agamgn
console.log(afunc.__proto__); //{ set: [Function: set] }
console.log(func.prototype); //{ set: [Function: set] }
console.log(func.__proto__); // [Function]




function func() { }
let newObj = new func(); //构造调用func，返回一个新对象
const newObj__proto__ = Object.getPrototypeOf(newObj) // 获取newObj的原型对象
console.log(newObj__proto__ === func.prototype) // true 验证newObj的原型指向func
const func__proto__ = Object.getPrototypeOf(func.prototype) // 获取func.prototype的原型
console.log(func__proto__ === Object.prototype) // true func.prototype的原型是Object.prototype



let testfunc = function () { }
let funcObj = new testfunc();
console.log(funcObj instanceof testfunc);//true testfunc.prototype在funcObj的原型链上
console.log(funcObj instanceof Function); // false Function.prototype 不在funcObj的原型链上
console.log(funcObj instanceof Object); // true Object.prototype在funcObj的原型链上


let test = function () { }
let testObject = new test();
console.log(test.prototype.isPrototypeOf(testObject)); // true test.prototype在testObject的原型链上
console.log(Object.prototype.isPrototypeOf(testObject)); // true Object.prototype在testObject的原型链上




console.log(Object.getPrototypeOf(Object.prototype));// null




let stringtest = '由String函数构造出来的'
let stringPrototype = Object.getPrototypeOf(stringtest) // 字符串的原型
console.log(stringPrototype === String.prototype) // true 字符串的原型是String对象
Object.getPrototypeOf(stringPrototype) === Object.prototype // true String对象的原型是Object对象
