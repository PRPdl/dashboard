/* eslint-disable no-unused-vars */

import { _ } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import fb from '../fb'
import router from '../router'
//import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
   userProfile: [],
   info: {},
   snackbar: false
   },
  

  getters: {

  },

  actions: {

    async register({dispatch},form) {
     const {user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      
     await fb.db.collection('users').doc(user.uid).set({
      name: form.name,
      email: form.email
     }).catch((error)=>{
       console.log(error.message)
     })
      router.push('/login')
    },

    async login({dispatch}, form) {
      const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      dispatch('fetchUserProfile', user)
    },

    async fetchUserProfile({commit}, user) {
      const userProfile = await fb.db.collection('users').doc(user.uid).get()

      commit('setUserProfile', userProfile.data())

      if(router.currentRoute.path === '/login')
        router.push('/')
    },

    async logout({commit}) {
      await fb.auth.signOut()

      commit('setUserProfile', {})
      router.push('/login')
    }
  },

  mutations: {
    setUserProfile(state, userData) {
      state.userProfile = userData
    }
  },

  modules: {
   // login
  },
  plugins: [createPersistedState()]
})
