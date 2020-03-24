// 本章和ES6中的差不多
var vars=8;
console.log(vars);


let lets=5;
lets=6;
console.log(lets);


const numList=9;
console.log(numList);

// 解构
let input=[1,2];
let [first,second]=input;
console.log(first);
console.log(second);

// 函数声明
type C={a:string,b?:number}
function f({a,b}:C):void{
    
}

function f2({ a, b = 0 } = { a: "" }): void {
    // ...
}

// 展开操作符
let first2=[1,2];
let second2=[3,4];
let bothPlus=[0,...first2,...second2];
console.log(bothPlus);


