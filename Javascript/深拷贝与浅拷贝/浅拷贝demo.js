// for...in只循环第一层
function shallowCopy(obj) {
    var newobj = Array.isArray(obj) ? [] : {};//创建对象
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) { //避免循环到原型上面会被遍历到的属性
            newobj[i] = obj[i];
        }
    }
    return newobj;
}

var obj1 = {
    a: 1,
    b: {
        c: 3
    }
}
var obj2 = shallowCopy(obj1);
obj2.a = 3;
obj2.b.c = 4;
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.b.c); // 4
console.log(obj2.b.c); // 4



// ES6的Object.assign
var obj3 = {
    name: "agamgn",
    age: 18
}

var copyobj = Object.assign({}, obj3);
copyobj.name = "ngmaga";
console.log(copyobj) // {name: 'agamgn', age:: 18}
console.log(obj3)    // {name: 'ngmaga', age:: 18}


// ES6扩展运算符
var obj4 = {
    name: "agamgn",
    age: 18
}
var copyobj = { ...obj4 }
copyobj.name = 'ngmaga'
console.log(copyobj)// {name: 'ngmaga', age:: 18}
console.log(obj4)// {name: 'agamgn', age:: 18}