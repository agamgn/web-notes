<template>
  <div>
    <div>{{name}}</div>
    <div>
      <p>created：进行ajax请求异步数据的获取、初始化数据</p>
      <p>mounted：挂载元素内dom节点的获取</p>
      <p>nextTick：针对单一事件更新数据后立即操作dom</p>
      <p>updated：任何数据的更新，如果要做统一的业务逻辑处理</p>
      <p>watch：监听具体数据变化，并做相应的处理</p>
    </div>
    <ul>
        <li>beforeCreate:el,data,message,进行初始化，都不能使用</li>
        <li>create:数据已经和 data 属性进行绑定。但此时尚未挂载，el 还不可用</li>
        <li>beforeMount:</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "test"
    };
  },
  beforeCreate() {
    console.group("-----beforeCreate-----");
    console.log("%c%s", "color:red", "el      :" + this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  created() {
    console.group("-----created-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  beforeMount() {
    console.group("-----beforeMount-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  mounted() {
    console.group("-----mounted-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  beforeUpdate() {
    console.group("-----beforeUpdate-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  updated() {
    console.group("-----updated-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  beforeDestroy() {
    console.group("-----beforeDestroy-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  },
  destroyed() {
    console.group("-----destroyed-----");
    console.log("%c%s", "color:red", "el:     :" + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data    :" + this.$data);
    console.log("%c%s", "color:red", "message :" + this.message);
  }
};
</script>
<style>
</style>