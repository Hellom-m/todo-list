<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    />
    <label>{{ todo.content }}</label>
    <button
      class="destroy"
      @click="destroy"
    ></button>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {};
  },
  components: {},
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  mounted() {
  },
  methods: {
    destroy() {
      this.$emit('delTodo', this.todo.id);
    },
  },
};
</script>

<style  lang="less" scoped>
.todo-item {
  box-sizing: border-box;
  position: relative;
  background: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  &:hover {
    .destroy:after {
      content: "x";
    }
  }

  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }

  .toggle {
    text-align: center;
    width: 50px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    outline: none;
    -webkit-appearance: none; /*去除默认样式*/
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;

    &:after {
      content: url("../assets/images/unChecked.svg");
    }

    &:checked:after {
      content: url("../assets/images/checked.svg");
    }
  }

  .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
  }
}
</style>
