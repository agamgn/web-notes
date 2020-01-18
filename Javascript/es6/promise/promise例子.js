// Promise的立即执行性
let p = new Promise((resolve, reject) => {
    console.log("1");
    resolve("2");
    console.log("3");
});
console.log("4");

p.then((value) => {
    console.log(value);
})
console.log(5)
// 1
// 3
// 4
// 5
// 2




// Promise 三种状态
let p1 = new Promise((resolve, reject) => {
    resolve(1);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 500);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3);
    }, 500);
})
console.log(p1);//Promise { 1 }
console.log(p2);//Promise { <pending> }
console.log(p3);//Promise { <pending> }

setTimeout(function () {
    console.log(p2);
}, 1000);//Promise { <resolved> 2 }
setTimeout(function () {
    console.log(p3);
}, 1000);//Promise { <rejected> 3 }
p1.then(function (value) {
    console.log(value);
});//1
p2.then(function (value) {
    console.log(value);
});//2
p3.catch(function (err) {
    console.log(err);
});//3





//   Promise 状态的不可逆性
let p1 = new Promise((resolve, reject) => {
    resolve("p1成功");
    resolve("p1又成功");
});
let p2 = new Promise((resolve, reject) => {
    resolve("p2成功");
    reject("reject");
});
p1.then((value) => {
    console.log(value);
})
p2.then((value) => {
    console.log(value);
})



// 链式调用
Promise.resolve(1)
    .then((res) => {
        console.log(res);
        return 2
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(3)
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
        return 4
    })


// Promise then() 回调异步性
var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1");
        resolve("success");
    }, 1000)
});

p.then(function (value) {
    console.log(value);
});
p.then(function (value) {
    console.log(value);
});


// 异常
Promise.resolve()
    .then(() => {
        return new Error('error!!!')
    })
    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
//then:  Error: error!!!
// at Promise.resolve.then


Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)