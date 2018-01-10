<template>
<div id="nav-menu" class="navigation">
  <div>
    <router-link active-class class="router-link" to="/daily">Daily</router-link>
    <router-link active-class class="router-link" to="/weekly">Weekly</router-link>
    <router-link active-class class="router-link" to="/monthly">Monthly</router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'nav-menu',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  .navigation {
    background: #1E1E1E;
    box-shadow: 0 1px 14px 0 rgba(0,0,0,0.10);
    > div {
      display: flex;
      justify-content: center;
    }
    a {
      color: #fff;
      padding: 20px;
      border-left: 1px solid #181818;
      &:last-child {
        border-right: 1px solid #181818;
      }
    }
  }
</style>
