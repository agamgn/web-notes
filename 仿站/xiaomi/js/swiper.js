// 同步点
 var index = 0;
 //获取小圆点的父元素ul
 var zeroPoint = document.querySelector(".zeroPoint");
 //所有图片
 var imgLis = document.querySelectorAll(".img-wrap li");
 //小圆点
 let lis = zeroPoint.querySelectorAll("li");


 //小圆点点击事件
 zeroPoint.addEventListener("click", function (event) {
     let target = event.target;
     for (let [n, li] of lis.entries()) {
         if (li === target) {
             index = n;
             target.className = "hover";
         } else {
             li.className = li.className.replace("hover", "");
         }
     }
     setPicture();
 });
 //左箭头
 var leftArrow = document.querySelector("#leftArrow");
 leftArrow.addEventListener("click", function (event) {
     index--;
     if (index < 0) {
         index = 4;
     }
     setZero();
     setPicture();
 });

 //右箭头
 var rightArrow = document.querySelector("#rightArrow");
 rightArrow.addEventListener("click", function (event) {
     index++;
     if (index > 4) {
         index = 0;
     }
     setZero();
     setPicture();
 });


//  设置图片
 function setPicture() {
    
     for (let i = 0, length = imgLis.length; i < length; i++) {
         if (i === index) {
             imgLis[i].style.display = "block";
             imgLis[i].style.animation = "fadeIn 4s";
         } else {
             imgLis[i].style.animation = "fadeout 0s";
             imgLis[i].style.display = "none"
         }
     }
 }

//  设置远点
 function setZero() {
     for (let [n, li] of lis.entries()) {
         if (n === index) {
             li.className = "hover";
         } else {
             li.className = li.className.replace("hover", "");
         }
     }
 }

//  自动轮播
 setInterval(function () {
     index++;
     if (index > 4) {
         index = 0;
     }
     setZero();
     setPicture();
 }, 5000);