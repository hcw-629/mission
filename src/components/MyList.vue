<template>
  <ul class="todo-main">
   <transition-group
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__zoomIn"
    leave-active-class="animate__zoomOut"
  >
    <MyItem 
    v-for="todo of todos" 
    :key="todo.id" 
    :todo='todo' 
    />
   </transition-group>
  </ul>
  
</template>

<script>
import 'animate.css'
import MyItem from "./MyItem";
export default {
  name: "MyList",
    
  components: {
    MyItem,
  },
  props:['todos'],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  background-color: skyblue;
  opacity: 0.9;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
