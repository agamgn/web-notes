console.log(1)
setTimeout(function() {
  //settimeout1
  console.log(2)
}, 0);
const intervalId = setInterval(function() {
  //setinterval1
  console.log(3)
}, 0)
setTimeout(function() {
  //settimeout2
  console.log(10)
  new Promise(function(resolve) {
    //promise1
    console.log(11)
    resolve()
  })
  .then(function() {
    console.log(12)
  })
  .then(function() {
    console.log(13)
    clearInterval(intervalId)
  })
}, 0);

//promise2
Promise.resolve()
  .then(function() {
    console.log(7)
  })
  .then(function() {
    console.log(8)
  })
console.log(9)