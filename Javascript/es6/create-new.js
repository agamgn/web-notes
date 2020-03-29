// Object.create
let persion={
    name:"agamgn",
    friends:["aga","mgn"]
};
let onePersion=Object.create(persion);
console.log("onePersion:",onePersion);//onePersion: {}
console.log("Object.getPrototypeOf(onePersion):",Object.getPrototypeOf(onePersion));//Object.getPrototypeOf(onePersion): { name: 'agamgn', friends: [ 'aga', 'mgn' ] }
onePersion.name="jack";
onePersion.friends.push("Nick");
console.log("onePersion:",onePersion);//onePersion.name: jack
console.log("Object.getPrototypeOf(onePersion):",Object.getPrototypeOf(onePersion));//Object.getPrototypeOf(onePersion): { name: 'agamgn', friends: [ 'aga', 'mgn', 'Nick' ] }
console.log("onePersion.name:",onePersion.name);//onePersion.name: jack
console.log("onePersion.friends:",onePersion.friends);//onePersion.friends: [ 'aga', 'mgn', 'Nick' ]

console.log("-----------------------------------------------------------");
// new Object()
let persion2={
    name:"agamgn",
    friends:["aga","mgn"]
};
let newPersion=new Object(persion2);
console.log("newPersion:",newPersion);//newPersion: { name: 'agamgn', friends: [ 'aga', 'mgn' ] }
console.log("Object.getPrototypeOf(newPersion):",Object.getPrototypeOf(newPersion));//Object.getPrototypeOf(newPersion): {}
newPersion.name="jack";
newPersion.friends.push("Nick");
console.log("newPersion:",newPersion);//onePersion: { name: 'jack' }
console.log("Object.getPrototypeOf(newPersion):",Object.getPrototypeOf(newPersion));//Object.getPrototypeOf(onePersion): { name: 'agamgn', friends: [ 'aga', 'mgn', 'Nick' ] }
console.log("newPersion.name:",newPersion.name);//onePersion.name: jack
console.log("newPersion.friends:",newPersion.friends);//onePersion.friends: [ 'aga', 'mgn', 'Nick' ]

