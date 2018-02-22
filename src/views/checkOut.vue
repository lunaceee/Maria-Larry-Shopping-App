<template lang="html">
  <div>
    <ul>
      <listItem v-for="item in checkOutItems"
      :name='item.name'
      :amount='item.amount'
      :key='item.key'
      @emitRemove='removeItem(item[".key"])'
      />
    </ul>
  </div>
</template>

<script>
import { db } from '@/firebase'
const checkOutItems = db.ref('items').orderByChild("amount").startAt(1)
import listItem from '@/components/listItem'

export default {
  components: {
    listItem
  },
  methods: {
    removeItem (key) {
      db.ref('items').child(key).update({
        amount: 0
      })
    }
  },
  created() {
    this.$bindAsArray('checkOutItems', checkOutItems)
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
