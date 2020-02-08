let arr = [1, 1, 2, 5, 3, 4, 5, 2, 5, 5, 6, 1, 3];
let res = arr.reduce((acc, val) => {
    if (acc.indexOf(val) < 0) {
        acc.push(val);
    }
    return acc;
},[]);
console.log(res);//[ 1, 2, 5, 3, 4, 6 ]