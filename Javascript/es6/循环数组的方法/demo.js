const arr=[1,2,3,4,5];
// 传统方式
for(let i = 0; i < arr.length; i++){
    if(arr[i]===2){
        // continue;
    }
    // console.log(arr[i]);
}


// forEach
arr.forEach(function(item){
    if(item===2){
        // continue;
    }
    // console.log(item);
})

// 和forEach的区别是forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。
// map
arr.map((item)=>{
    console.log(item)
})

// every
arr.every(function(item){
    // console.log(item);
    return true;
})

// for in
for(let v in arr){
    // console.log(arr[v]);
}

// for of
for(let v of arr){
    // console.log(v);
}