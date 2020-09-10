/**
 * what:一个工厂能提供一个创建对象的公共接口
 * how:使用子类来决定一个变量成员应该为哪个具体的类的实例.
 * 场景：处理大量具有相同属性的小对象，需要依赖具体环境创建不同实例
*/

// 简单工厂模式
function AnimalFactory(type, name) {
    switch(type) {
      case 'Cat':
        return new Cat(name);
      case 'Dog':
        return new Dog(name);
    }
  }

// 复杂工厂模式
var Factory = function(type, name) {
    // 避免该类被直接形如Factory()调用产生无法预期的bug
    if (this instanceof Factory) {
      return new this[type](name);
    } else {
      return new Factory(type, name);
    }
  }
  Factory.prototype =  {
    Dog: (function() {
      function Dog(name) {
        this.name = name;
        this.type = 'dog';
      }
      Dog.prototype.getName = function() {
        return this.name;
      }
      return Dog;
    })(),
    Cat: (function() {
      function Cat(name) {
        this.name = name;
        this.type = 'cat';
      }
      Cat.prototype.getName = function() {
        return this.name;
      }
      return Cat;
    })()
  };