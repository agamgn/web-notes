// call
Function.prototype.call2 = function (context) {
    // 把传入的第一个参数作为 call 函数内部的一个临时对象 context
    //  在这里的 this 对象指向的是调用call()函数的函数对象。如 fn1.call(fn2)；在执行 call 函数时，call 函数内部的this指向的
    // 是fn1

    // 是否为null或者undefined
    var context = context || window;
    // 将函数设为对象的属性,相当于context来调用本该在call之前函数拥有的属性
    context.fn = this;
    console.log(context)
    // 参数处理
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    // 执行该函数,eval函数的作用
    var result = eval('context.fn(' + args +')');
    //删除该函数
    delete context.fn
    return result;
}


// 执行步骤
// 1、将函数设为对象的属性
// 2、执行该函数
// 3、删除该函数


// 来源
// var foo={value:1}
// function bar(){console.log(this.value)}
// bar.call(foo)
// // 改
// var foo={
//     value:1,
//     bar:function(){console.log(this.value)}
// }
// // 第一步  fn 是对象的属性名，反正最后也要删除它，所以起成什么都无所谓。
// foo.fn = bar
// // 第二步
// foo.fn()
// // 第三步
// delete foo.fn


// https://www.cnblogs.com/donghezi/p/9742778.html