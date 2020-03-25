interface LabeledValue{
    label:string;
}

function printLabel(labelledObj:LabeledValue){
    console.log(labelledObj.label);
}
let myObj={size:10,label:"Size 10 Object"};
printLabel(myObj);

// 可选属性,在名字定义的后面加一个?符号
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width*config.width;
    }
    return newSquare;
}

let mySquare=createSquare({color:"black"});

// 只读属性，只能在对象刚刚创建的时候修改其值
interface Point{
    readonly x:number;
    readonly y:number;
}

let p1:Point={x:10,y:20};
// p1.x=5;error;



// ReadonlyArray<T>
let a:number[]=[1,2,3,4];
let ro:ReadonlyArray<number>=a;
// ro[0]=2;error


// 函数类型，接口描述函数类型,对函数类型进行描述
interface SearchFunc{
    (source:string,subString:String):boolean;
}
let mySearch:SearchFunc;
mySearch=function(source2:string,subString:string){
    let result=source2.search(subString);
    return result>-1;
}

// 可索引类型
interface StringArray{
    [index:number]:string;
    //它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时
    // 会得到string类型的返回值。
    // TypeScript支持两种索引签名：字符串和数字.typescript会使number转换成string
}
let myArray:StringArray;
myArray=["bob","fres"];
console.log(myArray[0]);






// 任意属性[propName:string]:any
// interface Persion{
//     name:string,
//     age?:number,//可选属性
//     [propName:string]:any

// }
// let james:Persion{
//      name:"agamgn";
     
// }



// 类类型
interface ClockInterface{
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number, m:number){};
    setTime(d:Date){
        this.currentTime=d;
    }
}


// 继承接口
interface Shape{
    color:string;
}
interface Square extends Shape{
    sideLength:number;
}
let square=<Square>{};
square.color="blue";
square.sideLength=10;
// 一个接口可以继承多个接口，创建出多个接口的合成接口。




// 混合类型


