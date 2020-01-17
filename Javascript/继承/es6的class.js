class Parent{
    constructor(name){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
}

let p=new Parent("ganin");
console.log(p);//Parent { name: 'ganin' }

class Child extends Parent{
    constructor(name,age){
        super(name);//通过supper调用父类的构造方法
        this.age=age;
    }
    get(){
        console.log(this.name,this.age)
    }
}
let s=new Child("tom",18);
console.log(s)//Child { name: 'tom', age: 18 }
