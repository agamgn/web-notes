// Number对象
// Number 对象是原始数值的包装对象。


// Number 对象属性
// constructor	返回对创建此对象的 Number 函数的引用。
console.log("1、constructor返回对创建此对象的 Number 函数的引用:");

// MAX_VALUE	可表示的最大的数。
console.log("\n2、MAX_VALUE	可表示的最大的数:");
console.log(Number.MAX_VALUE);

// MIN_VALUE	可表示的最小的数。
console.log("\n3、MIN_VALUE	可表示的最小的数:");
console.log(Number.MIN_VALUE);

// NaN	非数字值。
console.log("\n4、NaN非数字值:");
console.log(Number.NaN);

// NEGATIVE_INFINITY	负无穷大，溢出时返回该值。
console.log("\n5、NEGATIVE_INFINITY负无穷大，溢出时返回该值:");
console.log(Number.NEGATIVE_INFINITY);

// POSITIVE_INFINITY	正无穷大，溢出时返回该值。
console.log("\n6、POSITIVE_INFINITY	正无穷大，溢出时返回该值:");
console.log(Number.POSITIVE_INFINITY);

// prototype	使您有能力向对象添加属性和方法。
console.log("\n7、prototype	使您有能力向对象添加属性和方法:");




// Number 对象方法
// toString	把数字转换为字符串，使用指定的基数。
console.log("\n8、toString	把数字转换为字符串，使用指定的基数:");
console.log(Number(1337).toString());

// toLocaleString	把数字转换为字符串，使用本地数字格式顺序。
console.log("\n9、toLocaleString	把数字转换为字符串，使用本地数字格式顺序:");
console.log(Number(1024).toLocaleString());

// toFixed	把数字转换为字符串，结果的小数点后有指定位数的数字。
console.log("\n10、toFixed	把数字转换为字符串，结果的小数点后有指定位数的数字:");
console.log(Number(1024.1024).toFixed(2));

// toExponential	把对象的值转换为指数计数法。
console.log("\n11、toExponential	把对象的值转换为指数计数法:");
console.log(Number(2025255).toExponential());

// toPrecision	把数字格式化为指定的长度。
console.log("\n12、toPrecision	把数字格式化为指定的长度:");
console.log(Number(1024).toPrecision(3));

// valueOf	返回一个 Number 对象的基本数字值。
console.log("\n13、valueOf	返回一个 Number 对象的基本数字值:");
