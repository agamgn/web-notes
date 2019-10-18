// tab切换

// 获取dom节点
let getDom = (domName) => document.querySelectorAll(domName);

// 切换方法
let switchCards = (title, product) => {
  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('mouseover', () => {
      for (let i = 0; i < title.length; i++) {
        title[i].classList.remove('current');
        product[i].classList.remove('is-show');
      }
      title[i].classList.add('current');
      product[i].classList.add('is-show');
    });
  }
};

switchCards(getDom('#first-title li'), getDom('#first-product ul'));
switchCards(getDom('#second-title li'), getDom('#second-product ul'));
switchCards(getDom('#third-title li'), getDom('#third-product ul'));
switchCards(getDom('#fourth-title li'), getDom('#fourth-product ul'));
switchCards(getDom('#fifth-title li'), getDom('#fifth-product ul'));