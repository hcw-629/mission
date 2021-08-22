<template>
	<div id="addSoul">
		<center>
      <el-button type="text"  @click="addPersonServer">来一句激励自己的话吧！</el-button>
		<!-- <button class="btn btn-danger" @click="addPersonServer">每日鸡汤</button> -->
		<ol>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ol>
		</center>
	</div>
</template>

<script>
	export default {
		name:'MySoul',
		data() {
			return {
				name:'',
			}
		},
        computed:{
			personList(){
				return this.$store.state.personAbout.personList
			},
		},
		methods: {
			addPersonServer(){
				this.$store.dispatch('personAbout/addPersonServer')
			}
		},
	}
</script>
<style scoped>
.el-button{
  font-size: 18px;
  font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
   font-weight: bold;
}
#addSoul{
   color: skyblue;
   position: absolute;
   width: 480px;
   left: 10px;
   top: 464px;
   font-size: 20px;
   font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
   font-weight: bold;
   background-color: #fff;
   opacity: 0.8;
   
}
ol{
	list-style: none;
  margin: 0 auto;
  text-indent: -40px;
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
</style>
