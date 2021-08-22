//人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
	namespaced:true,
	actions:{
		addPersonServer(context){
			axios.get('https://international.v1.hitokoto.cn/').then(
				response => {
					context.commit('ADD_PERSON',{id:nanoid(),name:response.data.hitokoto})
				},
				error => {
					alert(error.message)
				}
			)
		},
		addWeiboServer(context){
			axios.get('http://localhost:8080/demo/api/resou/v1/weibo?size=20').then(
				response => {
					console.log(response.data.data)
					const data = response.data.data;
					
					for (let i = 0; i < 20; i++) {
						context.commit('ADD_NEWS',{id:nanoid(),name:data[i].keyword,urls:data[i].url})
					}
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations:{
		ADD_PERSON(state,value){
			console.log('mutations中的ADD_PERSON被调用了')
			state.personList.splice(0,1,value)
		},
		ADD_NEWS(state,value){
			console.log('mutations中的ADD_PERSON被调用了')
			state.newsList.splice(19,1,value)
		}
	},
	state:{
		personList:[
			
		],
		newsList:[
			
		]
	},
	getters:{
		
	},
}