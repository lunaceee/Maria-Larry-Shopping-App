import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import {firebaseApp} from './firebase'
import firebase from 'firebase'
import * as firebaseCSS from 'firebaseui/dist/firebaseui.css'

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      firebaseCSS,
      render: h => h(App)
    }).$mount('#app')
  }
});
