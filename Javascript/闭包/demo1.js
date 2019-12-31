var count = 10;
function fn() {
    var count = 0;
    return function fn2() {
        count++;
        console.log(count);
    }
}
var f = fn();
f();
f();
console.log(count)

fn()();
fn()();
