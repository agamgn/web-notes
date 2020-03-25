// 函数声明
function sum(x:number):number{
    return x;
}
// 函数表达式
let func=function(x:number):number{
    return x;
}
// 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的
//  func，是通过赋值操作进行类型推论而推断出来的
// 如果需要我们手动给 func 添加类型
let func2: (x: number) => number = function (x: number): number {
    return x;
};
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型
// 需要用括号括起来，右边是输出类型。





// 用接口定义函数的形状
interface SearchFunc{
    (source:string):boolean;
}

let myFunc:SearchFunc;
myFunc=function(source:string){
    return false;
}
console.log(myFunc("a"));

// 可选参数,可选参数后面不允许再出现必需参数了
function buildName(firstName:string,lastName?:string){
    if(lastName){
        return firstName+" "+lastName;
    }else{
        return firstName;
    }
}
let tomcat=buildName("agamn","gn");
let tom=buildName("agam");
console.log(tomcat);
console.log(tom);

// 参数默认值
function buildname2(firstName:string,lastName:string="cat"){
    return firstName+" "+lastName;
}
let tomcat1=buildname2("tom","cat");
let tom1=buildname2("Tom");
console.log(tomcat1);
console.log(tom1);


// 重载,前几次都是函数定义，最后一次是函数实现
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x:number|string):number|string{
    if(typeof x==="number"){
        return Number(x.toString().split("").reverse().join(""));
    }else if(typeof x === "string"){
        return x.split("").reverse().join("");
    }
}


// 类型别名,使用 type 创建类型别名。
// 类型别名常用于联合类型
type Name=string;
type NameResolve=()=>string;
type NameOrResolver=Name|NameResolve;
function getName(n:NameOrResolver):Name{
    if(typeof n === "string"){
        return n;
    }else{
        return n();
    }
}

// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
// 类型别名与字符串字面量类型都是使用 type 进行定义
type EventNames="click"|"scroll"|"move";
function handleEvent(ele:Element,event:EventNames){

}
handleEvent(document.getElementById('hello'), 'scroll');  // 没问题

