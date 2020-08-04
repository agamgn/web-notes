 let res = []
const fn = (source)=>{   
    source.forEach(el=>{
        res.push(el)
        el.children && el.children.length>0 ? fn(el.children) : ""
    })
}