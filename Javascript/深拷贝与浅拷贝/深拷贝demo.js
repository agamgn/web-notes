// 递归调用浅拷贝
function deepCopy(obj) {
    var newobj = Array.isArray(obj) ? [] : {};//创建对象
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) { //避免循环到原型上面会被遍历到的属性
            if (obj[i] && typeof obj[i] === "object") {//如果子属性为引用数据类型，递归复制
                newobj[i] = deepCopy(obj[i]);
            }
            else {
                newobj[i] = obj[i];
            }
        }
    }
    return newobj;
}

var obj1 = {
    arr: [1, 2, 3],
    key: {
        id: 11
    },
    func: function () {
        console.log("agamgn")
    }
}
var obj2 = deepCopy(obj1);
obj1.arr.push(4);
console.log(obj1.arr) // [1, 2, 3, 4]
console.log(obj2.arr) // [1, 2, 3]
console.log(obj1.key)//{id:11}
console.log(obj2.key)//{id:11}
console.log(obj1.key === obj2.key) // false
console.log(obj1.func === obj2.func) // true




// 利用JSON序列化实现一个深拷贝
function deepCopy(source) {
    return JSON.parse(JSON.stringify(source));
}
var o1 = {
    arr: [1, 2, 3],
    obj: {
        key: 'agamgn'
    },
    func: function () {
        return 1;
    }
};
var o2 = deepCopy(o1);
console.log(o2); // => {arr: [1,2,3], obj: {key: 'agamgn'}}