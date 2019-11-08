import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
	      path:'',
				component: home,
				meta: []
				}
      ]
    }
  ]
})
