import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import(/* webpackChunkName: "about" */ './views/test1.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import(/* webpackChunkName: "about" */ './views/todolist.vue')
    }
    // Chưa khai báo route này làm sao nó hiển thị được cái route /User
  ]
})
