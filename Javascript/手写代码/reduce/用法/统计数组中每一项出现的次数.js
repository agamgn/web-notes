let arr=["agamgn","agam","agamgn","a","agamgn","agam","agamgn","agn"];
let res=arr.reduce((acc,val)=>{
    if(acc[val]===undefined){
        acc[val]=1;
    }else{
        acc[val]++;
    }
    return acc;
},{})
console.log(res);//{ agamgn: 4, agam: 2, a: 1, agn: 1 }