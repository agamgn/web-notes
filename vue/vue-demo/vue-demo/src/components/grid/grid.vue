<template>
  <div>
    <div class="wrapper">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <div class="wrapper2">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.wrapper {
  width: 450px;
  background-color: #f3f3f3;
  text-align: center;
  display: grid;
  /* repeat重复的 */
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: 150px 150px 150px;
}
.wrapper .item {
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  line-height: 150px;
}
.wrapper .item:first-of-type {
  background: #ef342a;
}
.wrapper .item:nth-of-type(2) {
  background: #00a0a0;
}
.wrapper .item:nth-of-type(3) {
  background: #a0a0ff;
}

/* demo2 */
.wrapper2 {
  display: grid;
  /* grid-template-columns: repeat(3,150px); */
  /* 复制的一种模式，总共4列 */
  /* grid-template-columns: repeat(2, 100px 20px); */

  /* 容纳尽可能多的单元格 */
  /* grid-template-columns: repeat(auto-fill,100px); */

  /* fr是比例关系 */
  /* grid-template-columns: 1fr 2fr 3fr; */

  /* minmax() 表示长度范围，不小于多少不大于多少*/
  /* grid-template-columns: 1fr 1fr minmax(100px, 1fr); */

  /* auto自己决定 */
  /* grid-template-columns: 100px auto auto; */

  /* 指定网格线名称    []是网格线的名称，允许一个网格线有多个名字 */
  /* grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4]; */

  /* 设置行间距 grid-gap是两者的简写 */
  /* row-gap: 20px;
  column-gap: 20px; */

  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  /* 自定义区域 */
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";

  /* 多个单元格可以合并成一个区域 m如果不想利用的就用.号隔开*/
  /* grid-template-areas:
    "a a a"
    "b b b"
    "c c c"; */
  /* grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer"; */

  /* 子元素排列的顺序 ，还可设置为row/colume dense 用于剩下项目的自动放置*/
  /* grid-auto-flow: column; */

  /* justify/align-items单元格内容的水平/垂直位置 place-items两者简写 */
  /* justify-items: center;
    align-items: center; */

  /* justify/align-content整个内容区域在容器的位置，place简写 */
  /* justify-content: space-around;
    align-content: center; */

  /* grid-auto-columns/rows设置多余出来浏览器自己创建的单元格  */
  /* grid-auto-columns: 50px;
    grid-auto-rows: 50px; */

  /*  */
}
.wrapper2 .item {
  font-size: 4em;
  text-align: center;
  border: 1px solid #e5e4e9;
}

.wrapper2 .item-1 {
  background-color: #ef342a;
  /* 指定项目的位置，指定四个边框在那根网格线上grid-column/row-start/end
  还可以指定网格线的名字，使用span表示跨越，即左右边框（上下边框）之间跨越多少个网格
  grid-column和grid-row是上述的简写
   */
  /* grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: span 2;
  grid-row-end: 4; */

  /* grid-area指定放到哪一个区域,他还是上述四个简写  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
 */
  /* grid-area: e; */

  /* justify/align-self是设置单元格内容的,是设置单独的 */
  justify-self: center;
}

.wrapper2 .item-2 {
  background-color: #f68f26;
}

.wrapper2 .item-3 {
  background-color: #4ba946;
}

.wrapper2 .item-4 {
  background-color: #0376c2;
}

.wrapper2 .item-5 {
  background-color: #c077af;
}

.wrapper2 .item-6 {
  background-color: #f8d29d;
}

.wrapper2 .item-7 {
  background-color: #b5a87f;
}

.wrapper2 .item-8 {
  background-color: #d0e4a9;
}

.wrapper2 .item-9 {
  background-color: #4dc7ec;
}
</style>