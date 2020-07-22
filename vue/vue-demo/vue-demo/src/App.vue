<template>
  <div id="app" style="height:100%">
     <!-- <button @click="method1">page1</button>
      <button @click="method2">page2</button>
      
      <animal>
        <div slot="one">one</div>
        <div slot="two">two</div>

      </animal> -->
    <router-view></router-view>
    <!-- <router-view></router-view>
    <router-view class="view one" name="a"></router-view>
    <router-view class="view two" name="b"></router-view> -->
  </div>
</template>

<script>
import animal from "./components/animal"
export default {
  name: 'App',
  components:{
    animal
  },
  methods:{
    method1(){
      this.$router.push("/page1");
    },
    method2(){
      this.$router.push("/page2");
    }
  }
}
</script>

<style>
 #app{
   
 }
</style>
