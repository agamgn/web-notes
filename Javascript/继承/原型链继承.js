// 父类
function Parent(name) {
    this.name = name;
    this.play = [1, 2, 3];
    this.setName = function (name) { this.name = name };
}

Parent.prototype.getName = function () {
    console.log("parent name:", this.name);
}
// 子类
function Child(name) {
    this.name = name;
    
}
// 核心： 将父类的实例作为子类的原型
Child.prototype = new Parent("father");
Child.prototype.constructor=Child

var child1 = new Child("son1");
child1.getName();//parent name: son1
child1.setName("ganin");
child1.getName();//parent name: ganin
var child2 = new Child("son2");
child2.getName();//parent name: son2
console.log(child2.constructor)
// 缺点

console.log(child2.play)//[ 1, 2, 3 ]
child1.play.push(4)
console.log(child2.play)//[ 1, 2, 3, 4 ]