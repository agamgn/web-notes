function unique(arr){
    var res = [];
    var obj = {};
    for(var i=0; i<arr.length; i++){
       if( !obj[arr[i]] ){
            obj[arr[i]] = 1;
            res.push(arr[i]);
        }
    } 
 return res;
}
var arr = [1,2,2,3,5,3,6,5];
var res = unique(arr)
console.log(res );