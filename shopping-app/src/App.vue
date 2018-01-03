<template>
<div id="app" v-bind:class="[$route.params.category, $route.name]">
  <nav-menu></nav-menu>
  <router-view class="app-body"></router-view>
  <bottom-nav></bottom-nav>
</div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import BottomNavigation from './components/BottomNavigation'

export default {
  data: () => ({
    newItems: [],
    newItem: ''
  }),
  name: 'app',
  components: {
    'nav-menu': NavigationMenu,
    'bottom-nav': BottomNavigation
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    overflow: hidden;
    &.daily {
     background-color: rgba(0,0,0 ,0.05);
    }
    &.weekly, &.list {
     background-color: rgba(0,0,0 ,0.10);
    }
    &.monthly {
     background-color: rgba(0,0,0 ,0.15);
    }
}
.app-body {
  margin-top: 100px;
}
.list #nav-menu {
  display: none;
}
#nav-menu {
  > div {
      display: flex;
      flex-wrap: wrap;
  }
  position: fixed;
  box-shadow: 0 0 20px 0px rgba(0,0,0,0.15);
  margin-bottom: 16px;
    a {
        height: calc((100vh - 3.778rem) / 3);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        color: #fff;
        font-weight: bold;
        font-size: 2rem;
        text-decoration: none;
        transition: all linear 0.2s;
        background: #DFE2E8;
        &:nth-child(1) {
            background-color: rgba(0,0,0 ,0.05);
        }
        &:nth-child(2) {
            background-color: rgba(0,0,0 ,0.1);
        }
        &:nth-child(3) {
            background-color: rgba(0,0,0 ,0.15);
        }
    }

}
#app.category {
    #nav-menu a {
        width: calc(100vw / 3);
        height: 80px;
        font-size: 1.5rem;
        position: relative;
        &.router-link-exact-active:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0px;
          width: 100%;
          height: 2px;
          background: #96989F;
        }
    }
}
</style>
