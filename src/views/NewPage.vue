<template lang="html">
  <div class="">
    <list-item v-for="item in items" :key="item.key" :name="item.name" :category="item.category" :amount="item.amount"/>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import {
  firebaseApp
} from '@/firebase'
const db = firebaseApp.database()
var items = db.ref('items')

export default {

  created () {
    this.$bindAsArray('items', items)
  },
  components: {
    ListItem
  },
  watch: {
    items: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  }
}
</script>

<style lang="css">
</style>
