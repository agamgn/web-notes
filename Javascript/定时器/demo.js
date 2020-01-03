var start = new Date();
var end = 0;
setTimeout(function () {
    console.log(new Date() - start);
}, 500);
while (new Date() - start <= 1000) { }



var start = new Date();
var end = 0;
setInterval(() => {
    console.log(new Date() - start);
}, 500);
while (new Date() - start <= 1000) { }