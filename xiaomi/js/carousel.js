// 1.获取轮播图容器
let wrapper = $('carousel-box');
// 2.获取图片列表
let img = wrapper.querySelectorAll('#img-list img');
// 3.获取圆点按钮
let count = wrapper.querySelectorAll('#count a');
// 4.获取左右控制按钮
let control = wrapper.querySelectorAll('.controls-direction a');

// 索引
let index = 0;
// 自动播放定时器
let player = null;
// 透明度定时器
let alphar = null;

// 将第一张图片透明度设置为1
img[0].style.opacity = '1';

// 图片切换
const changeImg = i => {
  index = i;
  // 透明度
  let alpha = 0;
  for (let i = 0; i < img.length; i++) {
    count[i].classList.remove('current');
    img[i].style.opacity = '0';
  }
  count[index].classList.add('current');
  clearInterval(alphar);

  alphar = setInterval(() => {
    img[index].style.opacity = alpha;
    alpha += 0.03;
    alpha >= 1 && (alpha = 1);   // 假前真后
  }, 20)
}

// 遍历小圆点, 控制第几张图片的显示
for (let i = 0; i < img.length; i++) {
  count[i].addEventListener('click', () => {
    changeImg(i);
  });
}

// 自动播放
let autoPlay = index => {
  index = index;
  player = setInterval(() => {
    index++;
    if (index >= img.length) {
      index = 0;
    }
    changeImg(index);
  }, 3000);
};
autoPlay(index);

// 鼠标移入轮播容器时清除定时器, 图片暂停播放
wrapper.onmouseover = () => {
  clearInterval(player);
};

// 鼠标移出轮播容器时, 图片继续播放
wrapper.onmouseout = () => {
  autoPlay(index);
};

// 控制图片上一张
control[0].addEventListener('click', () => {
  index -= 1;
  if (index < 0) {
    index = img.length - 1;
  }
  changeImg(index);
});

// 控制图片下一张
control[1].addEventListener('click', () => {
  index += 1;
  if (index >= img.length) {
    index = 0;
  }
  changeImg(index);
});