
async function getusers(){

}
console.log(getusers())

// let users= fetch("//api.github.com/users");

// function getusers2(){
//     let result=await Promise.resolve("成功");
//     console.log(result);
// }

async function getusers2(){
    let result=await Promise.resolve("成功");
    console.log(result);
}
getusers2()

function demo(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("成功demo")
        }, 3000);
    })
}

async function getusers3(){
    let result=await demo();
    console.log(result);
}
getusers3()

async function getusers3_2(){
    let result=await 123;
    console.log(result);
}
getusers3_2()





// base
function take(n){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(n+1000);
        }, n);
    })
}
function step1(n){
    console.log("step1:"+n);
    return take(n);
}
function step2(n){
    console.log("step2:"+n);
    return take(n);
}
function step3(n){
    console.log("step3:"+n);
    return take(n);
}
// Promis方式
function todoPromise(){
    console.log("todoPromise");
    const time1=1000;
    step1(time1)
        .then(time2=>step2(time2))
        .then(time3=>step3(time3))
        .then(result=>{
            console.log(result);
        })
}
todoPromise()
// step1:1000
// step2:2000
// step3:3000
// 4000

async function todoasync(){
    console.log("todoasync");
    const time1=1000;
    const time2=await step1(time1);
    const time3=await step2(time2);
    const result=await step3(time3)
    console.log(result);
}
todoasync()
// step1:1000
// step2:2000
// step3:3000
// 4000



// 内部阻塞
const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function fn(){
    console.time();
    await delay(1000);
    await delay(2000);
    await delay(3000);
    console.timeEnd();
    return "done";
}
fn().then(time=>console.log(time));

const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function fn2(){
    console.time();
    let delay1=delay(1000);
    let delay2=delay(2000);
    let delay3=delay(3000);
    await delay1;
    await delay2;
    await delay3;
    console.timeEnd();
    return "done";
}
fn2().then(time=>console.log(time));