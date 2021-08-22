import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import VueRouter from 'vue-router'
import router from './router/routes.js'
import './plugins/elements.js'
//引入store
import store from './store'
import VideoBackground from 'vue-responsive-video-background-player'
 Vue.component('video-background', VideoBackground);
import dayjs from "dayjs"
Vue.prototype.dayjs = dayjs; //可以全局使用dayjs

Vue.config.productionTip = false
Vue.use(VueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
	store,
	router:router,
})
