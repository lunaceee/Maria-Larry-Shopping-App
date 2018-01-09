import Vue from 'vue'
import Router from 'vue-router'
import List from './../components/List'
import ShoppingItem from './../components/ShoppingItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/:category',
      name: 'category',
      component: ShoppingItem
    }]
})
