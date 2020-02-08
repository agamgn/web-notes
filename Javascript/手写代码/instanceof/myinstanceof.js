function myinstanceof(target,origin){
    // 非object直接false
    if(typeof target !== 'object' || origin === null) return false;
    // 获取原型对象
    let proto=Object.getPrototypeOf(target);
    while(true){
        if(proto==null) return false;
        if(proto==origin.prototype) return true;
        proto=Object.getPrototypeOf(proto);
    }

}

// 验证
function C(){} 
var o = new C();
console.log(myinstanceof(o,C));//true
