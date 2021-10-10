import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },/*component注册全局组件。components注册局部组件，注册后只能在当页调用。*/
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行或强制跳转
  // next() 放行    next('/login')  强制跳转

  if(to.path === '/login')  next()
  // 获取token
  const tokenStr = sessionStorage.getItem('token')
  if(!tokenStr) next('/login')
  next()
})

export default router
