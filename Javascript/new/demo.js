// demo1,demo2
function Persion(name) {
    this.name = name;
    return name;
}

let persion1 = new Persion("agamgn");
console.log(persion1)//Person {name: "agamgn"}
let persion2 = Persion("agamgn");
console.log(persion2)// "agamgn"



// demo3
function TestPersion(name) {
    this.name = name;
}
TestPersion.prototype.sayName = function () {
    console.log(this.name);
}
const persion3 = new TestPersion('agamgn');
console.log(persion3.name); // 'agamgn'
persion3.sayName(); // 'agamgn'

const persion4 = TestPersion('agamgn4');
console.log(persion4.name); // Cannot read property 'name' of undefined
persion4.sayName(); // Cannot read property 'sayName' of undefined




// demo4
function TestPersion1(name) {
    this.name = name;
    return name;//返回非对象
}
function TestPersion2(name) {
    this.name = name;
    return { name: "TestPersion2" };//返回对象
}
function TestPersion3(name) {
    this.name = name;
    return null;//返回null
}
const testPersion1 = new TestPersion1('TestPersion1');
console.log(testPersion1);//TestPersion1 {name: "TestPersion1"}
const testPersion2 = new TestPersion2('agamgn');
console.log(testPersion2);//{name:"TestPersion2"}
const testPersion3 = new TestPersion3('TestPersion3');
console.log(testPersion3);//TestPersion3 {name: "TestPersion3"}



// demo5
function creatNew(Con, ...arguments) {
    const newObj = {};     //创建一个新对象；
    Object.setPrototypeOf(newObj, Con.prototype);//newObj可以访问构造函数原型链上的属性
    const result = Con.apply(newObj, arguments);//将 newObj 绑定到构造函数上，并且传入剩余的参数
    return result instanceof Object ? result : newObj;//根据构造函数返回值返回
}
function Person(name) {
    this.name = name;
}
var p = creatNew(Person, 'agamgn');
