<template>
  <div class="weibo">
    <el-button type="text" @click="addWeiboServer"><h3>点我看今日热搜</h3></el-button>
    <ol>
      <li v-for="p in newsList" :key="p.id">
        <a :href="p.urls" target="_blank"> {{ p.name }}</a>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      name: "",
      urls:""
    };
  },
  computed: {
    newsList() {
      return this.$store.state.personAbout.newsList;
    },
  },
  methods: {
    addWeiboServer() {
      this.$store.dispatch("personAbout/addWeiboServer");
    },
  },
};
</script>

<style scoped>
h3{
  text-indent: 1em;
}
.el-button{
padding: 0;
height: 0;
}
a{
   text-align: left;
   text-decoration: none;
}
.weibo {
  width: 475px;
  background-color: #fff;
  opacity: 0.8;
}
</style>