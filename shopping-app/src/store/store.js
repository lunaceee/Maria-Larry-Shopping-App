import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)
Vue.use(router)
const state = {
  count: 8,
  pagepath: '/'
}
// const getters = {
//   // pagepath: state => state.pagepath
// }
// const mutations = {
//   // newpagepath() { state.pagepath = this.$route.params.category }
// }
export default new Vuex.Store({
  state
})
