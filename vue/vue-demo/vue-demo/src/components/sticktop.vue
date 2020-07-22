<template>
  <div class="main">
      <div style="width:100px;height:100px;background:red"></div>
    <ul class="ul-li">
      <li
        v-for="(item,index) in datatitle"
        class="item"
        :key="index"
        @click="switchs(item)"
      >{{item}}</li>
    </ul>

    <router-view></router-view>
    <!-- <aa></aa> -->
  </div>
</template>

<script>
// 使用路由视图和直接使用组件的区别
// import aa from "./sticktops/a"
export default {
  // components:{
  //     aa
  // },
  data() {
    return {
      datatitle: ["a", "b", "c"]
    };
  },
  methods: {
    switchs(item) {
        console.log(item)
        this.$router.push(item)
    }
  }
};
</script>

<style scoped>
.ul-li{
    position: sticky;
    top: 0;
    z-index: 100;
}
.main ul {
  display: flex;
  justify-content: center;
}
.main ul .item {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid red;
  list-style: none;
}
</style>