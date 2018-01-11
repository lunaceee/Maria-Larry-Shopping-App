<template>
<div id="app" v-bind:class="[$route.params.category, $route.name]">
  <div class="container">
    <nav-menu class="navigation" v-show="$route.meta.requiresAuth"></nav-menu>
    <router-view class="app-body"></router-view>
  </div>
  <bottom-nav v-show="$route.meta.requiresAuth"></bottom-nav>
</div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import BottomNavigation from './components/BottomNavigation'

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
  mounted () {
    // do something after mounting vue instance
    console.log()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=greek');
@font-face {
  font-family: "FontAwesome";
  src: url("./assets/fontawesome/Font Awesome 5 Free-Regular-400.otf");
}
@import './assets/scss/app';

#app {
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    overflow: hidden;
    background: #181818;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
      overflow-y: auto;
    }
    @media (min-width: 768px) {
      .app-body {
        overflow-y: auto;
      }
    }
}
.container {
  @media (max-width: 768px) {
    .navigation {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      + div {
        margin-top: 65px;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    .app-body {
      width: 100%;
    }
    .navigation > div {
      min-width: 200px;
      display: flex;
      flex-direction: column;
      a {
        text-align: left;
        color: #fff;
        padding: 10px 20px;
        border-bottom: 1px solid #181818;
      }
    }
  }
}

</style>
