<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
    <todo></todo>
    <item></item>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import todo from "./todo/todo.vue";
import item from "./todo/item.vue";


export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    todo,
    item,
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
