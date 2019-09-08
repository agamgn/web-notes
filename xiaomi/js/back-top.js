// 回到顶部
let backT = $('back-top');
let clienH = document.documentElement.clientHeight;
let backTimer = null;

document.addEventListener('scroll', () => {
  let scroll = document.documentElement.scrollTop;
  if (scroll > clienH) {
    backT.style.visibility = 'visible';
  } else {
    backT.style.visibility = 'hidden';
  }
});

backT.addEventListener('click', () => {
  backTimer = setInterval(() => {
    let scroll = document.documentElement.scrollTop;
    document.documentElement.scrollTop -= 50;

    if (scroll <= 0) {
      clearInterval(backTimer);
    }
  }, 10);
});
