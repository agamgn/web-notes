function extend<T,U>(f:T,s:U):T&U{
    let result=<T&U>{};
    for(let id in f){
        (<any>result)[id]=f[id];
    }

    for(let id in s){
        if(!result.hasOwnProperty(id)){
            (<any>result)[id]=(<any>s)[id];
        }
    }

    return result;
}