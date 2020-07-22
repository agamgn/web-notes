<template>
  <div class="main">
      <div class="main-a" v-for="(item,index) in datas" :key="index">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>