import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login';
import dashboard from '../views/Dashboard';



Vue.use(VueRouter)

const mode = 'history';

const routes = [

  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
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
