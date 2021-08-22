//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou 组件
import Mylogin from '../components/Mylogin'
import About from '../components/About'
import Home from '../components/Home'
import Homepages from '../components/Homepages'

//创建router实例对象，去管理一组一组的路由规则
 const router=new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			redirect:'/login'
		},
		{
		path:'/login',
		component:Mylogin
		},
		{
			path:'/homepages',
			component:Homepages,
			children:[
				{
					name:'abouts',
					path:'about',
					component:About
				},
				{
					name:'homes',
					path:'home',
					component:Home
				}
			]
		},
	]
})
router.beforeEach((to,from,next)=>{
	if(to.path==='/login') return next()
	const tokens=window.localStorage.getItem('token')
	if(!tokens) return next('/login')
	next()
})
export default router