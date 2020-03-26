// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function creatArray<T>(lentth:number,value:T):Array<T>{
    let result:T[]=[];
    for(let i=0;i<lentth;i++){
        result[i]=value;
    }
    return result;
}

console.log(creatArray<string>(3,"x"));


// 多个参数的泛型
function swap<T,U>(tuple:[T,U]): [U, T]{
    return [tuple[1],tuple[0]];
}

swap([7,"seven"]);

// 泛型约束，使用接口
interface Lengthwise{
    length:number;
}
// 使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状
function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
}



// 含有泛型的接口来定义函数
interface creatArrayFunc{
    <T>(length:number,value:T):Array<T>;
}
// 可以把泛型参数提到接口名上
interface creatArrayFunc2<T>{
    (lentth:number,value:T):Array<T>;
}
let creatArraydemo2:creatArrayFunc2<any>;

let creatArraydemo:creatArrayFunc;
creatArraydemo=function<T>(length:number,value:T):Array<T>{
    let result:T[]=[];
    for(let i=0;i<length;i++){
        result[i]=value;
    }
    return result;
}
creatArraydemo(3,"x");



// 泛型类
class GenericNumber<T>{
    zeroValue:T;
    // ts中的=>表示的是？https://segmentfault.com/q/1010000005650681
    add:(x:T,y:T)=>T;
}
let myGenericNumber=new GenericNumber<number>();
myGenericNumber.zeroValue=0;
myGenericNumber.add=function(x,y){return x+y;};


// 泛型参数的默认类型
function createArraydemo2<T=string>(lentth:number,value:T):Array<T>{
    let result:T[]=[];
    for(let i=0;i<length;i++){
        result[i]=value;
    }
    return result;
}