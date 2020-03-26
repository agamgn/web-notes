class Animal{
    public name;
    private age;
    protected year=888;
    public constructor(name){
        this.name=name;
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
        //console.log(this.age);//再累中是不被允许访问的
        console.log(this.year);
    }
}
let a=new Animal("ganin");
console.log(a.name);
a.name="tom";
console.log(a.name);
// console.log(a.age);


// readonly只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
class Animal2{
    readonly name;
    public constructor(name){
        this.name=name;
    }
}

let a1=new Animal2("jack");
console.log(a1.name);
// a1.name="TOM";



// 抽象类是不允许被实例化,必须被子类实现
abstract class Animal3{
    // 不写类型的话直接猜测为any型
    public name;
    public constructor(name) {
        this.name=name;
    }
    public abstract sayHi();
}
class Cat2 extends Animal3{
    public sayHi() {
       console.log("say hello");
    }
    
}

let cat=new Cat2("jacy");
console.log(cat);


// 类型的类型
class Animal4{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    sayHi():string{
        return `My name is ${this.name}`;
    }

}

let a4:Animal4=new Animal4("jack");
console.log(a4.sayHi());


// 类与接口
interface Alarm{
    alert():void;
}
class Door{}
class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log("SecurityDoor");
    }
}
class Car implements Alarm{
    alert(){
        console.log("Car");
    }
}


// 接口继承接口
interface Alarm2{
    alert():void
}
interface LightableAlarm extends Alarm2{
    lingthon():void;
    lingthoff():void;
}