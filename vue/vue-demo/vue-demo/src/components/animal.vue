<template>
  <div>
    <button @click="toggle">toggle</button>
    <transition>
        
      <p v-show="isNum"><slot name="one"></slot></p>
    </transition>
    <transition name="my">
      <p v-show="isNum">
          <slot name="two"></slot>
      </p>
    </transition>
    <transition enter-active-class="rotateOutDownLeft" leave-active-class ="rotateOutDownRight">
      <p v-show="isNum" class="animated">小鸟3</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNum: true
    };
  },
  methods: {
    toggle() {
      this.isNum = !this.isNum;
    }
  }
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.55s ease;
}
.my-enter,
.my-leave-to {
  opacity: 0;
  transform: translatey(80px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.55s ease;
}
</style>