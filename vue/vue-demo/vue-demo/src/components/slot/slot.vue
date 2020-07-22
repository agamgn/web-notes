<template>
  <div>
    <!-- <slot-child #default="slotProps">{{slotProps.user.firstName}}</slot-child> -->
    <slot-child>
      <template #default="slotProps">{{slotProps.user.firstName}}</template>
    </slot-child>
  </div>
</template>
<script>
export default {
  components: {
    "slot-child": () => import("../slot/slov-child")
  }
};
</script>
<style>
</style>

