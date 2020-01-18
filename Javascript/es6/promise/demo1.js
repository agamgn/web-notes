let p = new Promise((resolve, reject) => {
    var flag = Math.random();
    setTimeout(() => {
        console.log(flag);
        if (flag > 0.5) {
            console.log("执行完成");
            resolve("成功");
        } else {
            console.log("执行完成");
            reject("失败");
        }
    }, 2000);
})
p.then((resule) => {
    console.log(resule);
}, (err) => {
    console.log(err);
})

p.then((resule) => {
    console.log(resule);
}).catch((err) => {
    console.log(err);
})



// Promise all
let p1 = new Promise(function (resolve, reject) { console.log("p1"); resolve("成功1"); });
let p2 = new Promise(function (resolve, reject) { console.log("p2"); resolve("成功1"); });
let p3 = new Promise(function (resolve, reject) { console.log("p3"); resolve("成功2"); });
let pall = Promise.all([p1, p2, p3]);

pall.then(function () {
    // 三个都成功则成功  
    console.log("全部成功");
}, function () {
    // 只要有失败，则失败 
    console.log("失败");
})


//Promise race
let arr = [1, 2, 3].map(
    (value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, value * 1000);
        });
    }
)

console.log(arr)
let prace = Promise.race(arr)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });


// Promise.resolve
let resolve1=[null,0,"hello",{then:function(){console.log("resolve1")}}];
resolve1.map((value)=>{
    return Promise.resolve(value);

});
console.log(resolve1)