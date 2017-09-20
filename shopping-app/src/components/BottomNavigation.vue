<template>
<div id="bottom-nav">
  <div class="mobile-bottom-bar">
    <router-link active-class class="footer-link" to="/">
      <button type="button" name="button">
        <img class="icon" src="./../assets/home.svg" alt="">
        <span class='footer-text'>Home</span>
      </button>
    </router-link>
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
</style>
