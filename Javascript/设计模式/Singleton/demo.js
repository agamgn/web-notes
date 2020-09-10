/**
 * what:保证一个类仅有一个实例，并且提供一个访问它的全局访问点
 * how:使用一个变量存储类实例对象（值初始为 null/undefined ）。进行类实例化时，判断类实例对象是否存在，存在则返回该实例，不存在则创建类实例后返回。多次调用类生成实例方法，返回同一个实例对象。
 * 场景：全局遮罩层,购物车 (一个用户只有一个购物车),全局状态管理store等
*/

// es5基础班
let Singleton = function (name) {
    this.name = name;
}
Singleton.instance = null;//初始化一个变量
Singleton.getInstance = function (name) {
    // 判断这个变量是否已经被赋值，如果没有就使之为构造函数的实例化对象
    // 如果已经被赋值了就直接返回
    if(!this.instance){
        this.instance=new Singleton(name);
    }
    return this.instance
}
//es6
class Singleton{
    constructor(name){
        this.name=name;
        this.instance=null;
    }
    static getInstance(name){
        if(!this.instance){
            this.instance=new Singleton(name);
        }
        return this.instance;
    }
}


// 惰性单例
let Singleton=function(fn){
    let instance;
    return function(){
        return instance || (instance=fn.apply(this,arguments))
    }
}