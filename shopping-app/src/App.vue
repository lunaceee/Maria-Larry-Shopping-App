<template>
<div id="app" v-bind:class="[$route.params.category, $route.name]">
  <nav-menu></nav-menu>
  <router-view></router-view>
  <bottom-nav></bottom-nav>
</div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import BottomNavigation from './components/BottomNavigation'

export default {
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
    > div > div {
        display: flex;
        flex-wrap: wrap;
    }
}

#nav-menu {
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
        transition: all ease 0.4s;
        &:first-child {
            background-color: rgba(13,71,161 ,1);
        }
        &:nth-child(2) {
            background-color: rgba(21,101,192 ,1);
        }
        &:nth-child(3) {
            background-color: rgba(25,118,210 ,1);
        }
        &:nth-child(4) {
            background-color: rgba(25,118,111 ,1);
        }
        &:hover {
            &:first-child {
                background-color: rgba(13,71,161 ,.8);
            }
            &:nth-child(2) {
                background-color: rgba(21,101,192 ,.8);
            }
            &:nth-child(3) {
                background-color: rgba(25,118,210 ,.8);
            }
        }
    }

}
#app.category {
    #nav-menu a {
        width: calc(100vw / 3);
        height: 80px;
        font-size: 1.5rem;
    }
}
$primary-color: rgba(13,71,161 ,1);
$mobile-bottom-bar-primary-dark: darken($primary-color, 20%);

.mobile-bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.778rem;
    background: $primary-color;
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-link {
        flex: 1 1 auto;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.907rem 1rem;

        i.fa {
            opacity: 0.8;
            vertical-align: middle;
        }
        &:active,
        &:focus {
            color: $mobile-bottom-bar-primary-dark;
        }
    }

    .footer-text {
        position: relative;
        top: 2px;
        font-weight: bold;
        font-size: rem-calc(14);
        color: #fff;
    }
}
</style>
