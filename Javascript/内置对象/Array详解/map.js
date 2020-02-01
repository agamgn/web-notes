var arr1=[1,4,9,16,25];
const map1=arr1.map(x=>x*2);
console.log(map1);

const map2=arr1.map(x=>{
    if(x===4){
        return x*2;
    }
})
console.log(map2);



const map3=arr1.map(x=>{
    if(x===4){
        return x*2;
    }
    return x;
})
console.log(map3);