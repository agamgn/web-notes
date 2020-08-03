function unique(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
var arr = [1,2,2,3,5,3,6,5];
var newArr = unique(arr);
console.log(newArr);//[ 1, 2, 3, 6, 5 ]