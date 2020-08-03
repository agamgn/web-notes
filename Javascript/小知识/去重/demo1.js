function unique(arr){
    return Array.from(new Set(arr));
}
let arr=[1,2,2,2,3,4,"5","5",5];
console.log(unique(arr))//[ 1, 2, 3, 4, '5', 5 ]
let arr2=[1,2,2,2,3,4,"5","5",5,{},{},{"1":1},{"1":1}];
console.log(unique(arr2))//[ 1, 2, 3, 4, '5', 5, {}, {}, { '1': 1 }, { '1': 1 } ]

