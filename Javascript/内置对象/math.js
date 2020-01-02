//Math对象属性
/**
 * Math 对象并不像 Date 和 String 那样是对象的类
 * 因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数
 * 不是某个对象的方法。
 */
// E	返回算术常量 e，即自然对数的底数（约等于2.718）。
console.log("\n1.E返回算术常量 e，即自然对数的底数（约等于2.718）:");
console.log(Math.E);

// LN2	返回 2 的自然对数（约等于0.693）。
console.log("\n2.LN2返回 2 的自然对数（约等于0.693）:");
console.log(Math.LN2);

// LN10	返回 10 的自然对数（约等于2.302）。
console.log("\n3.LN10返回 10 的自然对数（约等于2.302）:");
console.log(Math.LN10);

// LOG2E	返回以 2 为底的 e 的对数（约等于 1.414）。
console.log("\n4.LOG2E返回以 2 为底的 e 的对数（约等于 1.414）:");
console.log(Math.LOG2E);

// LOG10E	返回以 10 为底的 e 的对数（约等于0.434）。
console.log("\n5.LOG10E返回以 10 为底的 e 的对数（约等于0.434）:");
console.log(Math.LOG10E);

// PI	返回圆周率（约等于3.14159）。
console.log("\n6.PI返回圆周率（约等于3.14159）:");
console.log(Math.PI);

// SQRT1_2	返回返回 2 的平方根的倒数（约等于 0.707）。
console.log("\n7.SQRT1_2返回返回 2 的平方根的倒数（约等于 0.707）:");
console.log(Math.SQRT1_2);

// SQRT2	返回 2 的平方根（约等于 1.414）。
console.log("\n8.SQRT2返回 2 的平方根（约等于 1.414）:");
console.log(Math.SQRT2);

// Math 对象方法

// abs(x)	返回数的绝对值。
console.log("\n9.abs(x)返回数的绝对值:");
console.log(Math.abs(-5));

// acos(x)	返回数的反余弦值。
console.log("\n10.acos(x)返回数的反余弦值:");
console.log(Math.acos(0.5));

// asin(x)	返回数的反正弦值。
console.log("\n11.asin(x)返回数的反正弦值:");
console.log(Math.asin(0.5));

// atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
console.log("\n12:atan(x)以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值");
console.log(Math.atan(0.5));

// atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
console.log("\n13.atan2(y,x)返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）:");
console.log(Math.atan2(0.5));

// ceil(x)	对数进行上舍入。
console.log("\n14.ceil(x)对数进行上舍入:");
console.log(Math.ceil(5.5));

// cos(x)	返回数的余弦。
console.log("\n15.cos(x)返回数的余弦:");
console.log(Math.cos(0.5));

// exp(x)	返回 e 的指数。
console.log("\n16.exp(x)返回 e 的指数");
console.log(Math.exp(2));

// floor(x)	对数进行下舍入。
console.log("\n17.floor(x)对数进行下舍入:");
console.log(Math.floor(5.5));

// log(x)	返回数的自然对数（底为e）。
console.log("\n18.log(x)返回数的自然对数（底为e）:");
console.log(Math.log(5));

// max(x,y)	返回 x 和 y 中的最高值。
console.log("\n19.max(x,y)返回 x 和 y 中的最高值:");
console.log(Math.max(5, 10));

// min(x,y)	返回 x 和 y 中的最低值。
console.log("\n20.min(x,y)返回 x 和 y 中的最低值:");
console.log(Math.min(5, 2));

// pow(x,y)	返回 x 的 y 次幂。
console.log("\n21.pow(x,y)返回 x 的 y 次幂:");
console.log(Math.pow(4, 2));

// random()	返回 0 ~ 1 之间的随机数。
console.log("\n22.random()返回 0 ~ 1 之间的随机数:");
console.log(Math.random());

// round(x)	把数四舍五入为最接近的整数。
console.log("\n23.round(x)把数四舍五入为最接近的整数:");
console.log(Math.round(3.5));

// sin(x)	返回数的正弦。
console.log("\n24.sin(x)返回数的正弦:");
console.log(Math.sin(0.5));

// sqrt(x)	返回数的平方根。
console.log("\n25.sqrt(x)返回数的平方根:");
console.log(Math.sqrt(9));

// tan(x)	返回角的正切。
console.log("\n26.tan(x)返回角的正切:");
console.log(Math.tan(0.5));

// toSource()	返回该对象的源代码。
// valueOf()	返回 Math 对象的原始值。