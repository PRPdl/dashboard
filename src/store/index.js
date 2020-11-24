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
   info: {}
   },
  

  getters: {
    
  },

  actions: {
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
