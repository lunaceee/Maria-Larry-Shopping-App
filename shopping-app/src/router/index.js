import Vue from 'vue'
import Router from 'vue-router'
import ShoppingItem from './../components/ShoppingItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/:category',
    name: 'category',
    component: ShoppingItem
  }]
})
