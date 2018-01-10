<template>
  <div id="bottom-nav">
    <div class="mobile-bottom-bar">
      <router-link active-class class="footer-link" to="/list">List</router-link>
      <router-link active-class class="footer-link" to="/">
        <img class="icon" src="./../assets/home.svg" alt="">
        <span class='footer-text'>To Buy</span>
      </router-link>
      <router-link active-class class="footer-link" to="/settings">Settings</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottom-nav',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.icon {
    height: 24px;
    width: 24px;
    display: inline;
    vertical-align: middle;
}
.footer-link {
  text-decoration: none;
}

$primary-color: rgba(#2B2B2B, 1);
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
