class Point{
    #x;
    #y;
    z;
    constructor(x,y,z){
        this.#x=x;
        this.#y=y;
        this.z=z;
    }
    getx(){
        return this.#x;
    }
    gety(){
        return this.#y;
    }

}

p=new Point(1,2,3);
console.log(p.z);
console.log(p.getx())
console.log(p.y);