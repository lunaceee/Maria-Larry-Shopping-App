<template lang="html">
  <section>
    <list-item v-for="item in items" :item="item" :key="item.key" :name="item.name" :category="item.category" :amount="item.amount"/>
  </section>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import {
  firebaseApp
} from '@/firebase'
const db = firebaseApp.database()
var categories = db.ref('items')

export default {
  name: 'nav-menu',
  data: () => ({
    items: []
  }),
  created () {
    this.$bindAsArray('items', categories)
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss">

</style>
