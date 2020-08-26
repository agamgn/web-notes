Function.prototype.Bind = function (obj) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    //创建中介函数
    var fn_ = function () {};
    var bound = function () {
        var params = Array.prototype.slice.call(arguments);
        //通过constructor判断调用方式，为true this指向实例，否则为obj
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
       
    };
    fn_.prototype = fn.prototype;
    bound.prototype = new fn_();
    return bound;
};

var obj = {
    z: 1
};

function fn() {
    console.log(this.z);
};

var bound = fn.Bind(obj);

bound()




// 1、可以修改函数this指向。
// 2、bind返回一个绑定了this的新函数boundFcuntion，例子中我们用bound表示。
// 3、支持函数柯里化，我们在返回bound函数时已传递了部分参数2，在调用时bound补全了剩余参数。
// 4、boundFunction的this无法再被修改，使用call、apply也不行。