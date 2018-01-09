<template>
<div id="app" v-bind:class="[$route.params.category, $route.name]">
  <nav-menu v-show="$route.meta.requiresAuth"></nav-menu>
  <router-view class="app-body"></router-view>
  <bottom-nav v-show="$route.meta.requiresAuth"></bottom-nav>
</div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import BottomNavigation from './components/BottomNavigation'
// import firebase from 'firebase'

// import { user } from '@/firebase'
// const currentUser = firebase.auth().currentUser

export default {
  data: () => ({
    newItems: [],
    newItem: '',
    user: []
  }),
  name: 'app',
  components: {
    'nav-menu': NavigationMenu,
    'bottom-nav': BottomNavigation
  },
  computed: {
    currentUser: function currentUser () {
      return
    }
  },
  mounted () {
    // do something after mounting vue instance
    console.log()
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    overflow: hidden;
}
</style>
