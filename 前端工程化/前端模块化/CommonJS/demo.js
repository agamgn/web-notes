// CommonJS
let x=1;
let addx=function(value){
    return value+1;
}

// module.exports.xr=x;
// module.exports.addx=addx;
module.exports = {
    x,
    addx
}