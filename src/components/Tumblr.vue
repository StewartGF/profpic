<template>
  <div>
    <h3>Tumblr view</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getUserData", {});
  }
};
</script>

<style lang="scss" scoped>
</style>