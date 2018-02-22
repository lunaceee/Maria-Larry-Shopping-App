<template lang="html">
  <div>
    <ul>
      <listItem v-for="item in checkOutItems"
      :name="item.name"
      :amount='item.amount'
      :key="item.key"
      />
    </ul>
  </div>
</template>

<script>
import { db } from '@/firebase'
var itemsRef = db.ref('items').orderByChild("amount").startAt(1)
import listItem from '@/components/listItem'

export default {
  components: {
    listItem
  },
  created() {
    this.$bindAsArray('checkOutItems', itemsRef)
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
