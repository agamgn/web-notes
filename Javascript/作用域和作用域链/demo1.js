function func1() {
    var name = "agamgn";
    console.log(name);
}

var info = "web";
function func2() {
    console.log(info);
}

console.log(name);//name is not defined
console.log(info);//web
func1();//agamgn
func2();//web