// 1.let和const
/*
重难点：
不1.允许重复声明
2.未定义就使用会报错：const命令和let命令不存在变量提升
3.暂时性死区：在代码块内使用let命令声明变量之前，该变量都不可用
*/
let lets = "let"; //声明变量
const consts = "consts"; //声明常量，声明之后必须立马赋值


// 2.解构赋值
/*
重难点：
1.匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
2.解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
3.解构默认值生效条件：属性值严格等于undefined
4.解构遵循匹配模式
5.解构不成功时变量的值等于undefined
6.undefined和null无法转为对象，因此无法进行解构
*/
// 交换变量值：
let x = 1;
let y = 2;
[x,y]=[y,x];

// 返回函数多个值
function Func(){
    return ["name","agmang"];
}
let [func1,func2]=Func();

//定义函数参数默认值
function Func2({x=1,y=2}={}){
    console.log(arguments);
}
Func2()