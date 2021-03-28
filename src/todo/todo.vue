<template>
  <div>
    <section class="real-app">
      <input
        type="text"
        class="add-input"
        placeholder="接下去要做什么？"
        @keyup.enter="addTodo()"
      />
      <item :todo="todo"></item>
      <tabs :filter="filter"></tabs>
    </section>
  </div>
</template>

<script>
import item from "../todo/item.vue";
import tabs from "../todo/tabs.vue";
export default {
  name: "todo",
  data() {
    return {
      todo: {
        id: 0,
        content: "this is todo",
        completed: false,
      },
      list: [],
      filter: "all",
    };
  },
  components: {
    item,
    tabs,
  },
  methods: {
    addTodo() {},
  },
};
</script>

<style  lang="less" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;

  .add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    padding: 16px 16px 16px 60px;
    font-family: inherit;
    box-sizing: border-box;
    outline: none;
    border: none;
    // border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
    // box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  }

  input::-webkit-input-placeholder {
    color: rgba(77, 77, 77, 0.3);
    font-style: oblique;
  }
}
</style>
