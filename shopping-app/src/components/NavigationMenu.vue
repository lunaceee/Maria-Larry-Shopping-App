<template>
<div id="nav-menu">
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

</style>
