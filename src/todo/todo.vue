<template>
  <div>
    <section class="real-app">
      <input
        type="text"
        class="add-input"
        placeholder="接下去要做什么？"
        @keyup.enter="addTodo($event)"
      />

      <item
        @delTodo="delTodo"
        v-for="(todo,i) in filterTodos"
        :todo="todo"
        :key="i"
      ></item>
      <tabs
        :filter="filter"
        :todos="list"
        @toggle="toggle"
        @clearAll="clearAll"
      ></tabs>
    </section>
  </div>
</template>

<script>
let id = 0;
import item from "../todo/item.vue";
import tabs from "../todo/tabs.vue";
export default {
  name: "todo",
  data() {
    return {
      list: [],
      filter: "all",
    };
  },
  components: {
    item,
    tabs,
  },
  computed: {

    filterTodos() {
      if (this.filter === 'all') {
        return this.list;
      }

      const completed = this.filter === 'completed';
      return this.list.filter(item => item.completed === completed);
    }

  },
  methods: {
    // 删除当前的todo
    delTodo(id) {
      this.list.splice(this.list.findIndex(item => item.id === id), 1);
    },
    // 新增一个 todo
    addTodo(e) {
      this.list.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = '';
    },
    // 切换todo 状态
    toggle(state) {
      this.filter = state;
    },
    // 清除所有已完成的todo
    clearAll() {
      this.list = this.list.filter(item => !item.completed);
    }

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
