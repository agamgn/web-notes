// 父类
function Parent(name,age){
    this.name=name;
    this.age=age;
    this.play = [1, 2, 3];
    this.setName = function (name) { this.name = name };
}
Parent.prototype.getName = function () {
    console.log("parent name:", this.name);
}
function Child(name,age){
    Parent.call(this,name,age);
}

// 核心代码
Child.prototype=Object.create(Parent.prototype);
Child.prototype.constructor=Child;//核心代码
var child1=new Child("agam",18);
var child2=new Child("agamgn",18);
console.log(child1)//Child { name: 'agam', age: 18, play: [ 1, 2, 3 ], setName: [Function] }
child1.setName("Tom")
console.log(child1)//Child { name: 'Tom', age: 18, play: [ 1, 2, 3 ], setName: [Function] }
console.log(child2)//Child {name: 'agamgn',age: 18, play: [ 1, 2, 3 ],setName: [Function] }
