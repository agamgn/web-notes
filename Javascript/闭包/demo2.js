for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (var i = 1; i <= 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}


var persion=function () { 
    var name="agamgn";

    function getName(){
        return name;
    }

    function setName(newName){
        name=newName;
    }
    return {
        getName,
        setName
    }

 }();

console.log( persion.name);//underfined
console.log( persion.getName());//agamgn
persion.setName("agamgn1");
console.log( persion.getName());//agamgn1



function foo(num) {
  return function(num) {
    console.log(num); 
  }
}
var f = new foo(9);
f(); // undefined

var adder = function(num) {
    return function(y) {
        return num+y;
    };
};

var inc = adder(1);
var dec = adder(-1);
//inc, dec现在是两个新的函数,作用是将传入的参数值 (+/‐)1
console.log(inc(99));//100
console.log(dec(101));//100 
console.log(adder(100)(2));//102 
console.log(adder(2)(100));//102