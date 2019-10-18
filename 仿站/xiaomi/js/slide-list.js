// 滑动列表
let flashsaleList = $('flashsale-list'); // ul列表
let li = flashsaleList.getElementsByTagName('li');
let liWidth = li[0].offsetWidth;

let productBox = $('product-box').offsetWidth; // 容器
let left = $('list-left');   // 左控制按钮
let right = $('list-right');   // 右控制按钮
let speed = 992;

flashsaleList.style.width = li.length * (liWidth + 14) - 14 + 'px';

left.addEventListener('click', () => {
  let listLeft = flashsaleList.offsetLeft;
  if (listLeft + speed < 0) {
    flashsaleList.style.left = listLeft + speed + 'px';
  } else {
    flashsaleList.style.left = '0px';
  }
});

right.addEventListener('click', () => {
  let listLeft = flashsaleList.offsetLeft;
  let listWidth = flashsaleList.offsetWidth;

  if (listLeft - speed > productBox - listWidth) {
    flashsaleList.style.left = listLeft - speed + 'px';
  } else {
    flashsaleList.style.left = productBox - listWidth + 'px';
  }
});




// (function time() {
//   let format = time => time.toString().padStart(2, '0');

//   let date = new Date();
//   let hourNow = date.getHours();
//   let minuteNow = date.getMinutes();
//   let secondNow = date.getSeconds();
//   let timePlay = null;

//   let hourGoal = parseInt(document.getElementById('goal-time').innerText);

//   let hourCount = format(hourGoal - hourNow - 1);
//   let minuteCount = format(59 - minuteNow);
//   let secondCount = format(60 - secondNow);

//   if (hourCount > 0) {
//     $('hint').innerText = '距离本场开始还有'
//     $('hour').innerText = hourCount;
//     $('minute').innerText = minuteCount;
//     $('second').innerText = secondCount;
//   } else if (hourCount < 1 && hourCount >= 0) {
//     $('hint').innerText = '距离本场开始还有'
//     $('hour').innerText = hourCount;
//     $('minute').innerText = minuteCount;
//     $('second').innerText = secondCount;
//   } else {
//     $('hint').innerText = '本场已结束'
//     $('hour').innerText = '00';
//     $('minute').innerText = '00';
//     $('second').innerText = '00';
//     clearInterval(timePlay)
//   }
//   timePlay = setInterval(time, 1000);
// })();
