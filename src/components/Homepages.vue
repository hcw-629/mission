<template>
  <div id="root">
    
    <video-background :src="bgImg" style="max-height: 100%; height: 100vh">
      <el-button class="logout" type="danger" @click="logout">退出登录</el-button>
      <h2 style="color: white; margin-left: 10px">
        Hello welcome!&nbsp;&nbsp;来制定每日计划吧！
      </h2>
      
      <h2 class="timer" key="1">现在是北京时间：{{ this.datetime }}</h2>
      <el-calendar v-model="value"> </el-calendar>
       <Weibo />
      <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__zoomIn"
      >
        <!-- appear 实现页面刚展示出来的时候，入场效果 -->
      </transition-group>
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader @addTodo="addTodo" />
          <MyList :todos="todos" />
          <MyFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllTodo="clearAllTodo"
          />
        </div>
      </div>
      <MySoul />
    </video-background>
  </div>
</template>
<script>
import "animate.css";
import pubsub from "pubsub-js";
import MyHeader from "./MyHeader";
import MyList from "./MyList";
import MyFooter from "./MyFooter";
import MySoul from "./MySoul";
import Weibo from "./Weibo";

export default {
  name: "Homepages",
  components: {
    MyHeader,
    MyList,
    MyFooter,
    MySoul,
    Weibo
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      timer: "",
      datetime: "",
      bgImg: require("@/./assets/videos/tufu.mp4"),
      value: new Date(),
    };
  },
  methods: {
    logout(){
       this.$router.replace({path: '/login'});
       localStorage.removeItem("token");
    },
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
    //删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
    /* 每秒定时刷新 */
    this.timer = setInterval(() => {
      this.datetime = this.dayjs().format("YYYY-MM-DD HH:mm:ss");
      console.log(this.datetime);
    }, 1000);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("updateTodo");
    pubsub.unsubscribe(this.pubId);
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style>

/*base*/
.logout{
  float: right;
}

#root {
  position: relative;
}
.el-calendar {
  width: 480px;
  position: absolute;
  float: left;
  opacity: 0.8;
  left: 10px;
}
.el-calendar-table .el-calendar-day {
    height: 30px;
}
body {
  background: #fff;
}
.timer {
  text-align: left;
  color: skyblue;
  margin-left: 10px;
  font-size: 27px;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  opacity: 0.8;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

