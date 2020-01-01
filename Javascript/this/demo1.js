// 默认绑定
function func() {
    var a = 1
    console.log(this.a)
}
var a = 2;
func(); //2


// 隐式绑定
var name = "水果";
var thisHandler = {
  name: "蔬菜",
  fn: {
    name: "糖果",
    test: function(){
      console.log('my name:',this.name); 
    }
  }
}
var testHandler = thisHandler.fn.test;
testHandler();




//显示绑定
function foo() {
    console.log(this.a);  // 输出 1
    bar.apply({ a: 2 }, arguments);
}

function bar(b) {
    console.log(this.a + b);  // 输出 5
}

var a = 1;
foo(3);


//构造函数的调用
function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a); //2



// 箭头函数
var name = '柚子'
var thisHandler = {
    name: '芒果',
    test: () => {
        console.log('my name:', this.name, 'this:', this);
    }
}

thisHandler.test(); // my name: 柚子 this: Window
