let Person = {
    name: 'agamgn',
    say() {
        console.log(this)
        console.log(`我叫${this.name}`)
    }
}
// 先看代码执行效果
Person.say() //我叫agamgn
Person1 = {
    name: 'agamgn1'
}
// 我们尝试用原生方法call来实现this指向Person1
Person.say.call(Person1) //我叫agamgn1




Function.prototype.MyCall = function (context) {
    //context就是demo中的Person1
    // 必须此时调用MyCall的函数是say方法，那么我们只需要在context上扩展一个say方法指向调用MyCall的say方法这样this
    console.log(this)
    context.say = this //Mycall里边的this就是我们虚拟的say方法
    context.say()
}
// 测试
Person.say.MyCall(Person1)//我叫agamgn1



// 没有参数时
Function.prototype.MyCall = function (context) {
    // 如果没有参数我们参考call的处理方式
    context = context || window
    //context就是demo中的Person1
    // 必须此时调用MyCall的函数是say方法，那么我们只需要在context上扩展一个say方法指向调用MyCall的say方法这样this
    context.say = this //Mycall里边的this就是我们虚拟的say方法
    context.say()
}

Person.say.MyCall()


//多参数和执行完删除自定义方法删除掉
Function.prototype.myCall1 = function (context) {
    // 如果没有传或传的值为空对象 context指向window
    context = context || window
    let fn = Symbol()
    context[fn] = this //给context添加一个方法 指向this
    // 处理参数 去除第一个参数this 其它传入fn函数
    let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
    context[fn](...arg) //执行fn
    delete context[fn] //删除方法
}

//测试
Person.say.call(Person1, 18)//我叫agamgn1我今年18




// 实现apply
Function.prototype.myApply = function (context) {
    // 如果没有传或传的值为空对象 context指向window
    if (typeof context === "undefined" || context === null) {
        context = window
    }
    let fn = mySymbol(context)
    context[fn] = this //给context添加一个方法 指向this
    // 处理参数 去除第一个参数this 其它传入fn函数
    let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
    context[fn](arg) //执行fn
    delete context[fn] //删除方法
}


//实现bind
Function.prototype.bind = function (context) {
    //返回一个绑定this的函数，我们需要在此保存this
    let self = this
    // 可以支持柯里化传参，保存参数
    let arg = [...arguments].slice(1)
    // 返回一个函数
    return function () {
        //同样因为支持柯里化形式传参我们需要再次获取存储参数
        let newArg = [...arguments]
        console.log(newArg)
        // 返回函数绑定this，传入两次保存的参数
        //考虑返回函数有返回值做了return
        return self.apply(context, arg.concat(newArg))
    }
}
