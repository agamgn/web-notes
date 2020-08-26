Function.prototype.Apply=function(obj,arr){

    var obj=obj||window;
    obj.fn=this
    if(!arr){
        obj.fn();
    }else{
        var args = [];
        // 注意这里的i从0开始
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]");
        };
        eval("obj.fn(" + args + ")"); // 执行fn
    }
    delete obj.fn;
}