// 通过id获取元素
const $ = id => document.getElementById(id);


// 搜索框效果
$("search-text").onfocus = function () {
  addClass("search-text", "border-color");
  addClass("search-btn", "border-color");
  show("hot-words", false);
  show("search-list", true);
};

$("search-text").onblur = function () {
  removeClass("search-text", "border-color");
  removeClass("search-btn", "border-color");
  show("hot-words", true);
  show("search-list", false);
};

//   为指定id的元素添加类
let addClass = (id, className) => {
  $(id).classList.add(className);
};
//   为指定id的元素移除类
let removeClass = (id, className) => {
  $(id).classList.remove(className);
};
//   通过id控制元素的隐藏与显示
let show = (id, flag) => {
  if (flag === true) {
    $(id).style.display = "block";
  } else {
    $(id).style.display = "none";
  }
};