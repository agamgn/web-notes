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
var child1=new Child("agam",20);
var child2=new Child("tom",20);
console.log(child1.name)//agam
child1.setName("agamgn")
console.log(child1.name)//agamgn
console.log(child2.name)//tom
child1.getName();//child1.getName is not a function
