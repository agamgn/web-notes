function copy(arr){
    var obj=arr.constructor==Array?[]:{};
　　//第二种方法 var obj=arr instanceof Array?[]:{}
　　//第三种方法 var obj=Array.isArray(arr)?[]:{}
      // for...in 会把继承的属性一起遍历
　　for(var item in arr){
        if(typeof arr[item]==="object"){
            obj[item]=copy(arr[item]);
        }else{
            obj[item]=arr[item];
        }
    }
    return obj;
}
var obj={a:1,b:2,c:{d:1,e:[3,4,5]}}
var newobj=copy(obj);
obj.c.e.push(7);
console.log(obj);
console.log(newobj);