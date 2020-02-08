function C(){} 
function D(){} 

var o = new C();
console.log(o instanceof C);//true
console.log(o instanceof D);//false
console.log(o instanceof Object);//true
C.prototype={};
let o2=new C();
console.log(o2 instanceof C);//true
console.log(o instanceof C);//false,C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上