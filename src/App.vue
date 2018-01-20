<template>
<div id="app" v-bind:class="[$route.params.category, $route.name]">
  <header>
    <nav-menu></nav-menu>
    <router-link :to="{ path: '/'}"><h1 class="title">Shopping App</h1></router-link>
  </header>
  <main>
    <router-view class="app-body"></router-view>
  </main>
  <footer>
    <bottom-nav v-show="$route.meta.requiresAuth"></bottom-nav>
  </footer>
</div>
</template>

<script>
import CategoriesMenu from './components/CategoriesMenu'
import BottomNavigation from './components/BottomNavigation'

export default {
  name: 'app',
  components: {
    'nav-menu': CategoriesMenu,
    'bottom-nav': BottomNavigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=greek');
@import './assets/scss/app';
#app {
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    background: #181818;
    position: fixed;
    height: 100%;
    width: 100%;
}
header, footer {
  position: fixed;
  height: 60px;
  background: #2b2b2b;
  box-shadow: 0 10px 10px rgba(#000, 0.1);
  z-index: 10;
  position: relative;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  display: flex;
  color: #fff;
}
.title {
  text-align: center;
  margin: 0;
  line-height: 60px;
}
main {
  overflow: hidden;
  height: calc(100vh - 120px);
  z-index: 9;
}
.app-body {
  height: 100%;
  overflow: auto;
}

</style>
