//String对象属性
//constructor 返回对创建此对象的数组函数的引用。
console.log("\n1.constructor返回对创建此对象的数组函数的引用:");
console.log(String.constructor);
// length 返回数组中元素的数目
console.log("\n2.length返回数组中元素的数目:");
console.log(String.length);
// prototype 使您有能力向对象添加属性和方法。




// String对象方法
// anchor("name")	创建 HTML 锚。
console.log("\n3.anchor(name)创建HTML锚:");
console.log("string".anchor("name"));

// big()用大号字体显示字符串。
console.log("\n4.big()用大号字体显示字符串:");
console.log("agamgn".big());

// blink()显示闪动字符串。
console.log("\n5.blink()显示闪动字符串:");
console.log("agamgn".blink());

// bold()使用粗体显示字符串。
console.log("\n6.bold()使用粗体显示字符串:");
console.log("agamgn".bold());

// charAt()返回在指定位置的字符。
console.log("\n7.charAt()返回在指定位置的字符");
console.log("agamgn".charAt(1));

// charCodeAt()返回在指定的位置的字符的 Unicode 编码。
console.log("\n8.charCodeAt()返回在指定的位置的字符的Unicode编码:");
console.log("agamgn".charCodeAt(1));

// concat()连接字符串。
console.log("\n9.concat()连接字符串");
console.log("agam".concat("gn"));

// fixed()以打字机文本显示字符串。
console.log("\n10.fixed()以打字机文本显示字符串:");
console.log("agamgn".fixed());

// fontcolor(color)使用指定的颜色来显示字符串。
console.log("\n11.fontcolor(color)使用指定的颜色来显示字符串:");
console.log("agamgn".fontcolor("#f58421"));

// fontsize(size)使用指定的尺寸来显示字符串。
console.log("\n12.fontsize(size)使用指定的尺寸来显示字符串:");
console.log("agamgn".fontsize(16));

// fromCharCode(num1, num2, …, numN)从字符编码创建一个字符串。
console.log("\n13.fromCharCode(num1, num2, …, numN)从字符编码创建一个字符串:");
console.log(String.fromCharCode(72,69,76,76,79))

// indexOf(searchString, startIndex)返回字符串中第一个呈现指定字符串的位置
console.log("\n14.indexOf()返回字符串中第一个呈现指定字符串的位置:");
console.log("agamgn".indexOf('g'));

// italics()使用斜体显示字符串。
console.log("\n15.italics()使用斜体显示字符串:");
console.log("agamgn".italics());

// lastIndexOf(searchvalue,fromindex)从后向前搜索字符串。
console.log("\n16.lastIndexOf(searchvalue,fromindex)从后向前搜索字符串:");
console.log("agamgn".lastIndexOf("g"));

// link()将字符串显示为链接。
console.log("\n17.link()将字符串显示为链接:");
console.log("agamgn".link("http://www.baidu.com"));

// localeCompare()用本地特定的顺序来比较两个字符串。
console.log("\n18.localeCompare()用本地特定的顺序来比较两个字符串:");
console.log("agamgn".localeCompare());

// match(regex)找到一个或多个正则表达式的匹配。
console.log("\n19.match(regex)找到一个或多个正则表达式的匹配:");
console.log("agamgn".match("am"));

// replace(regex, newString)将字符串中的某些字符替代成其它字符
console.log("\n20.replace(regex, newString)将字符串中的某些字符替代成其它字符:");
console.log("agamgn".replace("am","ma"));

// search(regex)检索与正则表达式相匹配的值。
console.log("\n21.search(regex)检索与正则表达式相匹配的值:");
console.log("agamgn".search("am"));

// slice(startIndex, endIndex)提取字符串的片断，并在新的字符串中返回被提取的部分。
// 一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
console.log("\n22.slice(startIndex, endIndex)提取字符串的片断，并在新的字符串中返回被提取的部分:");
console.log("agamgn".slice(1,4));

// small()使用小字号来显示字符串。
console.log("\n23.small()使用小字号来显示字符串:");
console.log("agamgn".small());

// split(delimiter)把字符串分割为字符串数组。
// delimiter 字符串或正则表达式，从该参数指定的地方分割
console.log("\n24.split(delimiter)把字符串分割为字符串数组:");
console.log("agamgn".split(""));
console.log("agamgn".split(" "));

// strike()使用删除线来显示字符串。
console.log("\n25.strike()使用删除线来显示字符串:");
console.log("agamgn".strike());

// sub()把字符串显示为下标。
console.log("\n26.sub()把字符串显示为下标:");
console.log("agamgn".sub());

// substr()从起始索引号提取字符串中指定数目的字符。
// start必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
// length可选。子串中的字符数
// 重要事项：ECMAscript 没有对该方法进行标准化，因此反对使用它。
console.log("\n27.substr(start,length)从起始索引号提取字符串中指定数目的字符:");
console.log("agamgn".substr(1,4));

// substring(start,stop)提取字符串中两个指定的索引号之间的字符。
// start必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
// stop	可选。一个非负的整数
console.log("\n28.substring(start,stop)提取字符串中两个指定的索引号之间的字符:");
console.log("agamgn".substring(1,4));

// sup()把字符串显示为上标。
console.log("\n29.sup()把字符串显示为上标:");
console.log("agamgn".sup());

// toLocaleLowerCase()把字符串转换为小写。
console.log("\n30.toLocaleLowerCase()把字符串转换为小写:");
console.log("AGAMGN".toLocaleLowerCase());

// toLocaleUpperCase()把字符串转换为大写。
console.log("\n31.toLocaleUpperCase()把字符串转换为大写:");
console.log("agamgn".toLocaleUpperCase());

// toLowerCase()把字符串转换为小写。
console.log("\n32.toLowerCase()把字符串转换为小写:");
console.log("AGAMGN".toLowerCase());

// toUpperCase()把字符串转换为大写。
console.log("\n33.toUpperCase()把字符串转换为大写:");
console.log("agamgn".toUpperCase());

// toSource()代表对象的源代码。


// toString()返回字符串。
console.log("\n35.toString()返回字符串:");
console.log("agamgn".toString());

// valueOf()返回某个字符串对象的原始值。
console.log("\n36.valueOf()返回某个字符串对象的原始值:");
console.log("agamgn".valueOf());




// String 类定义的方法都不能改变字符串的内容。像 String.toUpperCase() 这样的方法，返回的是全新的字符串，而不是修改原始字符串。