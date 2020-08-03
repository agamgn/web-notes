function unique(arr) {
    let newArr = [];
    arr.forEach(a => {
        if (newArr.indexOf(a) === -1) {
            newArr.push(a);
        }
    });
    return newArr;
}

let arr = [1, 2, 3, 4, "5", "5", 4, 5, {}, {}];
console.log(unique(arr));
//[ 1, 2, 3, 4, '5', 5, {}, {} ]