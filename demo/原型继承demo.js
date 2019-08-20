function Elem(id){
    this.elem=document.getElementById(id)
}

Elem.prototype.html=function(val) {
    var elem=this.elem
    if(val){
        elem.innerHTML=val
        return this   //链式操作,就是直接可以在后面使用.号链接   
    }else{
        return elem.innerHTML
    }
}

Elem.prototype.on=function(type,fn){
    var elem=this.elem
    elem.addEventListener(type,fn)
}

var div1=new Elem("div1")
div1.html("<p>agamgn</p>").on('click',function(){
    alert("ckicked")
})