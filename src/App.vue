<template>
<div id="app">
  <header>
    <nav-menu></nav-menu>
    <router-link :to="{ path: '/'}" class="title"><h1>Shopping App</h1></router-link>
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
    user-select: none;
    * {
      font-family: 'Comfortaa', sans-serif;
    }
}
header, footer {
  position: fixed;
  height: 60px;
  background: #2b2b2b;
  box-shadow: 0 10px 10px rgba(#000, 0.1);
  z-index: 99;
  position: relative;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
}
.title {
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  h1 {
    margin: 0;
    color: #fff;
  }
}
main {
  position: fixed;
  top: 0;
  overflow: hidden;
  height: calc(100% - 120px);
  width: 100%;
  margin: 60px 0;
  z-index: 9;
}
.app-body {
  height: 100%;
  overflow: auto;
}

</style>
