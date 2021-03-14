<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "./todo/header.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #999;
    opacity: 0.5;
    z-index: -1;
  }
}
</style>
