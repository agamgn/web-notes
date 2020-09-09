// demo1
var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

if(regEn.test(newName) || regCn.test(newName)) {
    alert("名称不能包含特殊字符.");
    return false;
}


// demo2
function checkName(val){ 
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); 
    var rs = ""; 
    for (var i = 0, l = val.length; i < val.length; i++) { 
        rs = rs + val.substr(i, 1).replace(reg, ''); 
    } 
    return rs; 
}