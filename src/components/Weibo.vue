<template>
  <div class="jump">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2 class="rou">Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{name:'abouts'}"
          >
            <el-button type="primary">News</el-button></router-link
          >
          <router-link replace  class="list-group-item" active-class="active" :to="{name:'homes'}"
            ><el-button type="success">Home</el-button></router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Weibo',
};
</script>

<style scoped>

.rou {
  color: skyblue;
}
.jump {
  width: 800px;
  height: 500px;
  position: absolute;
  top: 20px;
  left: 1350px;
}
</style>