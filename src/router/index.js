import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/List'
import ShoppingItem from './../components/ShoppingItem'
import SignUp from '@/views/SignUp'
import Login from '@/views/Login'
import Settings from '@/views/Settings'
import forgotPassword from '@/views/forgotPassword'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:category',
      name: 'category',
      component: ShoppingItem,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/login'
    }]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('daily')
  else next()
})

export default router
