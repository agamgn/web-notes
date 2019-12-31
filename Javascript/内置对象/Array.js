//Array对象属性
//constructor 返回对创建此对象的数组函数的引用。
console.log("\n1.constructor返回对创建此对象的数组函数的引用:");
console.log(Array.constructor);
// length 设置或返回数组中元素的数目
console.log("\n2.length设置或返回数组中元素的数目:");
console.log(Array.length);
// prototype 使您有能力向对象添加属性和方法。

// Array对象方法
// concat(array1,arrayn)连接两个或更多的数组，并返回结果。
var concat1=["agam"];
console.log("\n3.concat(array1,arrayn)连接两个或更多的数组，并返回结果:");
var result=concat1.concat(["gn"]);
console.log(result);

// join(string)把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
console.log("\n4.join(string)将数组中元素合并为字符串。元素通过指定的分隔符进行分隔:")
var joins=["agam","gn"];
var result=joins.join("#");
console.log(result);

// pop() 	删除并返回数组的最后一个元素
console.log("\n5:pop()删除并返回数组的最后一个元素:")
var pops=[1,2,3,4,5];
console.log("删除前："+pops);
console.log("删除的元素："+pops.pop());
console.log("删除后："+pops);
// push(value)向数组的末尾添加一个或更多元素，并返回新的长度
console.log("\n6:push(value)向数组的末尾添加一个或更多元素，并返回新的长度:")
var push=[1,2,3,4,5];
console.log("添加前："+pops);
console.log("添加返回新长度："+pops.push(6));
console.log("添加后："+pops);

// reverse()颠倒数组中元素的顺序。
console.log("\n7:reverse()颠倒数组中元素的顺序:")
var reverses=[1,2,3,4,5];
console.log("颠倒前："+reverses);
console.log("颠倒："+reverses.reverse());
console.log("直接在本元素上修改"+reverses);

// shift()删除并返回数组的第一个元素
console.log("\n8:shift()删除并返回数组的第一个元素:");
var shift=[1,2,3,4,5];
console.log("删除前："+shift);
console.log("返回的元素"+shift.shift());
console.log("删除后"+shift);


// slice(start, end)从某个已有的数组返回选定的元素
// 返回一个新的数组，包含从 start 到 end （不包括该元素）
console.log("\n9:slice(start, end)从某个已有的数组返回选定的元素，都可以为负数");
var slice=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log("选定前的元素："+slice);
var newslice=slice.slice(1,15);
console.log("选定后的元素"+newslice);


// sort(compare Function)对数组的元素进行排序
// 假如不是字符串类型则转换成字符串再排序,返回排序后的数组
console.log("\n10:sort(compare Function)对数组的元素进行排序:");
var sorts=[1,8,5,6,1,3,5,15,16,2,4,9,10];
console.log("排序前的元素："+sorts);
console.log("排序后的元素："+sorts.sort());
console.log("直接在本元素上修改"+sorts);



//splice(index,howmany,item1,.....,itemX)删除元素，并向数组添加新元素
// index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany:要删除的项目数量
// item1, ..., itemX	可选。向数组添加的新项目。
console.log("\n11:splice(index,howmany,item1,.....,itemX)删除元素，并向数组添加新元素:");
var splices=[1,2,3,4,5,6,7,8];
console.log("原元素："+splices);
console.log("使用splice元素："+splices.splice(2,2,"88","99"));
console.log("直接在本元素上修改"+splices);

// toSource()返回该对象的源代码。
console.log("\n12:toSource()返回该对象的源代码");
console.log("\n只有 Gecko 核心的浏览器（比如 Firefox）支持该方法,通常由 JavaScript 在后台自动调用");



// toString()将数组一切元素返回一个字符串,其间用逗号分隔.
console.log("\n13:toString()将数组一切元素返回一个字符串,其间用逗号分隔");
var toString=[1,2,3,4,5,6,7,8];
console.log("原元素："+toString);
var newtoString=toString.toString()
console.log("使用toString："+newtoString);



// toLocaleString()把数组转换为本地数组，并返回结果。
console.log("\n14:toLocaleString()使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串");

// unshift(value)向数组的开头添加一个或更多元素，并返回新的长度。
console.log("\n15:unshift(value)向数组的开头添加一个或更多元素，并返回新的长度");
var unshifts=[1,2,3,4,5,6,7,8];
console.log("原元素："+unshifts);
console.log("使用toString："+unshifts.unshift(99,88));
console.log("使用toString后："+unshifts);

// valueOf()返回数组对象的原始值
console.log("\n16:valueOf()返回数组对象的原始值,通常由 JavaScript 在后台自动调用");
var valueOfs=[1,2,3,4,5,6,7,8];
console.log("原元素："+valueOfs);
console.log("使用toString："+valueOfs.values());