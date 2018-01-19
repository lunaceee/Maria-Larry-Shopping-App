<template lang="html">
  <div class="">
    <list-item v-for="item in items" :item="item" :key="item.key" :name="item.name" :category="item.category" :amount="item.amount"/>
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
  methods: {
    test () {
      console.log(this)
    }
  },
  components: {
    ListItem
  }
}
</script>

<style lang="css">
</style>
