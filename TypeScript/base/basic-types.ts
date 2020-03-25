// boolean
let idDone:boolean=false;
console.log(idDone);
// 数字
let decLiteral:number=6;
let hexLiteral:number=0xf00d;
console.log(decLiteral);
console.log(hexLiteral);
// 字符串
let names:string="agamgn";
names='ganin';
console.log(names);
// 模版字符串
let name_temp:string=`agamgn`;
let age:number=18;
let sentence:string=`Hello,my name is ${names}.
Ill be ${age+1} years old netx month.`;
console.log(sentence);
// 数组
let list:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];
console.log(list);
console.log(list2);
// 元组
let x:[string,number];
x=['hello',10];
// x=[10,"hellp"];error
console.log(x);
console.log(x[0].substr(1));
// 其实是可以转换为js的
// x[3] = 'world';
// console.log(x);

// 枚举
enum Color{Red,Green,Blue}
let c:Color=Color.Green;
console.log(c);
enum Color1{Red=1,Green,Blue}
let c1:Color1=Color1.Green;
console.log(c1[1]);


// Any任意类型
let notSure:any=4;
notSure="maybe a string instead";
notSure=false;
// Any和Object的区别
let str:any="agamgn";
console.log(str.substr(1));
let prettySure:Object="ganin";
// console.log(prettySure.substr(1));


// Void没有类型
function warnUser():void{
    console.log("this is my warning message");
}

let unusable:void=undefined;
console.log(unusable);
warnUser();

// Null和Undefined
let u:undefined=undefined;
let n:null=null;


// never永不存在的值
function error(message:string):never{
    throw new Error(message);
}
error("never");
// 腿短的返回值为never
function fail(){
    return error("something failer")
}
fail();

// Object非原始类型
declare function create(o: object | null): void;


// 类型断言：没有人比我了解,<>或者as
let someValue:any="this is a string";
let strLength:number=(<string>someValue).length;
let strLength1:number=(someValue as string).length;
console.log(strLength);
console.log(strLength1);

// https://www.tslang.cn/docs/handbook/basic-types.html




// 联合类型
let myFavor:string|number;
myFavor="even";
myFavor=8;

function getLength(something:string|number):string{
    // return something.length;只能访问此联合类型的所有类型里共有的属性或方法：
    return something.toString();
}



// 数组类型：「类型 + 方括号」
let fib:number[]=[1,2,3,4,5];

// 数组泛型
let fibs:Array<number>=[1,1,1,1,1,2];


// 用接口表示数组
interface numberArray{
    [index:number]:number;
}

let fib2:numberArray=[1,4,5,7,6,5];

// 类数组（Array-like Object）不是数组类型,不能用普通的数组的方式来描述，而应该用接口
// function sum() {
//     let args: number[] = arguments;
// }
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// any 在数组中的应用

let list1:any[]=["agamgn",123,{"a":"b"}];