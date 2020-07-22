<template>
  <div>
    <header class="header">
      <div class="img">
        <img
          height="100"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1338595300,2119662265&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <nav>
        <li>
          <a href>导航仪1</a>
        </li>
        <li>
          <a href>导航仪12</a>
        </li>
        <li>
          <a href>导航仪13</a>
        </li>
      </nav>
    </header>

    <section>
      <div class="banner"></div>
    </section>

    <section class="content">
      <nav>
        <li>
          <a href>HOME</a>
        </li>
        <li>
          <a href>PROFILE</a>
        </li>
        <li>
          <a href>ABOUT</a>
        </li>
      </nav>
      <hr />
      <article class="one">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
       <article class="two">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
       <article class="three">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  /* 当子元素有宽度的时候，父元素可以设置最小宽度，如果有空白 */
  min-width: 1400px;
}
.header {
    
  height: 100px;
  background-color: #f3f3f3;
}
.img {
  float: left;
}
.img img {
  border-radius: 50%;
}
.header nav {
  float: right;
}
.header nav li {
  list-style: none;
  float: left;
  margin: 0 50px;
}
.banner {
  height: 200px;
  background-color: #f45f45;
}
.content {
  width: 1400px;
  margin: 30px auto 0;
}
.content nav {
  overflow: hidden;
}
/* 要对li生效，是对其父元素使用flex */
.content nav li {
  float: left;
  list-style-type: none;
  height: 50px;
  width: 150px;
  text-align: center;
  line-height: 50px;
  border: 1px solid red;
  border-radius: 30px;
}

li{
    list-style: none;
}
.one,.two{
    overflow: hidden;
}
.one ul li{
    width: 33%;
    height: 100px;
    border: orchid 1px solid;
     float: left;
}
.two ul li{    
    margin: 20px auto 0 auto;
   width: 24%;
    height: 100px;
    border: orchid 1px solid;
     float: left;
}
</style>