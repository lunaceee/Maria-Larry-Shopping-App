// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store/store'
// import firebaseApp from '@/firebase'
import firebase from 'firebase'
import 'normalize.css'

Vue.config.productionTip = false
/* eslint-disable no-new */

var VueTouch = require('vue-touch/dist/vue-touch.js')
Vue.use(VueTouch, {name: 'v-touch'})

let app
// firebaseApp()
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      // store,
      template: '<App/>',
      components: { App },
      router
    })
  }
})

// import '@/assets/fontawesome/js/fontawesome-all.js'
// import '@fortawesome/fontawesome'
