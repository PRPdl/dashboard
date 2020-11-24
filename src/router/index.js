/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login';
import dashboard from '../views/Dashboard';
import home from '../views/Home';
import store from '../store';


Vue.use(VueRouter)

const mode = 'history';

const routes = [

  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/test',
    name: 'test',
    component: ()=> import('../views/test.vue'),
  },
  
  
  {
    path: '/',
    redirect:'/dashboard',
    name: 'home',
    component: home,
    beforeEnter: (to, from, next) => {
      if(!isAuthenticated()) {
          return next({name: 'login'});
      }
      return next();
  },
  
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard,
      },
      {
        path: 'project',
        name: 'Project',
        component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
      },
      
    ]
  },
  
  {
    path: '*',
    name: 'err404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Err404.vue')
  },
  
]

function isAuthenticated(){
  return (store.state.userProfile.name) ? true : false
}


const router = new VueRouter({
  mode,
  routes,

});


export default router
