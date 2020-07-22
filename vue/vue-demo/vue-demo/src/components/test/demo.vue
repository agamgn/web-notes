<template>
  <div class="main">
    <!-- 左上 -->
    <div class="left-top box-left-top">
      <div class="left-top-item1 item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=204471953,2683458197&fm=26&gp=0.jpg"
          alt
        />
        <div class="mask"><span>assfafasfas</span> </div>
      </div>
      <div class="left-top-item2 item">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1000551505,2077899926&fm=26&gp=0.jpg"
          alt
        />
      </div>
    </div>
    <!-- 右上 -->
    <div class="right-top box-right-top">
      <div class="right-top-item1 item">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595345671622&di=423dd07469f045c2f04b6ea87c8db58b&imgtype=0&src=http%3A%2F%2Fwww.gexingtupian.com%2Fwp-content%2Fuploads%2F2017%2F10%2F1475980511_yKoWtndf.jpg"
          alt
        />
      </div>
      <div class="right-top-item2 item">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=174689995,61803475&fm=26&gp=0.jpg"
          alt
        />
      </div>
    </div>
    <!-- 左下 -->
    <div class="left-bottom box-left-top">
      <div class="left-bottom-item1 item">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=654294109,676703887&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <div class="left-bottom-item2 item">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595345715498&di=76ec4130dba4f7e2f38d8fc9a81da448&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff7d4b8e5093aff7691a66baf5d8693b8e8dc0f681b767-L4ZMb0_fw658"
          alt
        />
      </div>
    </div>
    <!-- 右下 -->
    <div class="right-bottom box-right-top">
      <div class="right-bottom-item1 item">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595345713188&di=5a1a55b472f0dc91d4282673dc54c365&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1267295557%2C2886783639%26fm%3D214%26gp%3D0.jpg"
          alt
        />
        <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595345715498&di=76ec4130dba4f7e2f38d8fc9a81da448&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff7d4b8e5093aff7691a66baf5d8693b8e8dc0f681b767-L4ZMb0_fw658" alt=""> -->
      </div>
      <div class="right-bottom-item2 item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1734131177,1920253025&fm=26&gp=0.jpg"
          alt
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.main {
  height: 100%;
}
.item {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}
.item img {
  width: 100%;
  height: 100%;
}
.box-left-top {
  width: 50%;
  height: 50%;
  float: left;
 
}
.box-right-top {
  width: 50%;
  height: 50%;
  float: right;
  
}
.mask{
    position: absolute;
    bottom: 0;
    height: 35px;
    line-height: 35px;
    width: 100%;
    text-align: center;
     background: rgba(97, 97, 97,0.6);
}
</style>