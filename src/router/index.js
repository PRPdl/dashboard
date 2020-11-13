import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login';
import home from '../views/Home';


Vue.use(VueRouter)

const mode = 'history';

const routes = [

  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'err404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Err404.vue')
  }
]

const router = new VueRouter({
  mode,
  routes
})

export default router
