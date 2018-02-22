<template lang="html">
<div class="">
  <input type="text" name="" v-model="addNewItem" @keydown.enter="addItem">
</div>
</template>

<script>
import { db } from '@/firebase'
var itemsRef = db.ref('items')

export default {
  data: () => ({
    addNewItem: ''
  }),
  methods: {
    addItem (item) {
      itemsRef.push({
        name: this.addNewItem,
        category: 'Uncategorized',
        amount: 0
      })
      this.addNewItem = ''
    }
  }
}
</script>

<style lang="css">
</style>
