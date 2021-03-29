<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="(state, i) in states"
        :key="i"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{ state }}
      </span>
    </span>
    <span
      class="clear"
      @click="clearAllCompleted"
    >Clear Completed </span>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      states: ["all", "active", "completed"],
    };
  },
  props: {
    filter: {
      type: String,
      require: true,
    },
    todos: {
      type: Array,
      require: true
    }
  },
  components: {},
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(item => !item.completed).length;
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state);
    },
    clearAllCompleted() {
      this.$emit('clearAll');
    },
  },
};
</script>

<style  lang="less" scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 14px;
  font-smoothing: antialiased;
}
.left,
.clear,
.tabs {
  padding: 0 10px;
}

.left .clear {
  width: 150px;
}

.left {
  text-align: center;
}

.clear {
  text-align: right;
  cursor: pointer;
}

.tabs {
  width: 200px;
  display: flex;
  justify-content: space-between;
  * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);
    &.actived {
      border-color: rgba(175, 47, 47, 0.4);
      border-radius: 5px;
    }
  }
}
</style>
