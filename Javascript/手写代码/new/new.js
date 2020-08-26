// 当我们new一个构造器，主要有三步：
// • 创建一个空对象，将它的引用赋给 this，继承函数的原型。
// • 通过 this 将属性和方法添加至这个对象
// • 最后返回 this 指向的新对象，也就是实例（如果没有手动返回其他的对象）



// • 以构造器的prototype属性为原型，创建新对象；
// • 将this(也就是上一句中的新对象)和调用参数传给构造器，执行；
// • 如果构造器没有手动返回对象，则返回第一步创建的新对象，如果有，则舍弃掉第一步创建的新对象，返回手动return的对象。


function myNew() {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let Func = [].shift.call(arguments);
    let child = Object.create(Func.prototype);
    // 2.将this和调用参数传给构造器执行
    let result = Func.apply(child, arguments);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result === 'object' ? result : child;
}

function Animal(type) {
    this.type = type;
}
Animal.prototype.say = function () {
    console.log("say")
}
let animal = myNew(Animal, "哺乳类")
console.log(animal.type)
animal.say()