/* eslint-disable no-unused-vars */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from './fb'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

let app

fb.auth.onAuthStateChanged(user => {
if(!app) {
app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

}

if(user) {
  store.dispatch('fetchUserProfile', user)
}

})