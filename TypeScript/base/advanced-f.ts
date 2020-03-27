// https://zhuanlan.zhihu.com/p/108856165























// 多态的this类型
class BasicCalculator{
    public constructor(protected value:number=0){}

    public currentValue():number{
        return this.value;
    }

    public add(operand:number){
        this.value+=operand;
        return this;
    }

    public subtract(operand:number){
        this.value-=operand;
        return this;
    }

    public multiply(operand:number){
        return this;
    }
    public divide(operand:number){
        this.value /= operand;
        return this;
    }
}

let v=new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
console.log(v)


class ScientificCalculator extends BasicCalculator{
    public constructor(value=0) {
        super(value);
    }
    public square(){
        this.value=this.value**2;
        return this;
    }

    public sin(){
        this.value=Math.sin(this.value);
        return this;
    }
}

// 如果在ScientificCalculator的实例上调用属于 BasicCalculator的方法，将会报错。
let v2=new ScientificCalculator(0.5)
        .square()
        .divide(2)
        .sin()
        .currentValue();

console.log(v2)