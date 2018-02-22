<template>
<div class="basket">
  <ul >
    <li v-for="item in basketItems">
      <listItem
      @emitMinus="minus(item)"
      @emitPlus="plus(item)"
      @emitRemove="removeItem(item)"
      :name="item.name"
      :amount="item.amount"
      :key="item.key"/>
    </li>
  </ul>
  <addNewItem/>
</div>
</template>

<script>
// @ is an alias to /src
import listItem from '@/components/listItem'
import addNewItem from '@/components/addNewItem'

import { db } from '@/firebase'
var itemsRef = db.ref('items')

export default {
  components: {
    listItem, addNewItem
  },
  methods: {
    plus (item) {
      itemsRef.child(item['.key'])
        .update({
          amount: ++item.amount
        })
    },
    minus (item) {
      if (item.amount > 0) {
        itemsRef.child(item['.key'])
          .update({
            amount: --item.amount
          })
      }
    },
    removeItem (item) {
      itemsRef.child(item['.key']).remove()
    }
  },
  created() {
    this.$bindAsArray('basketItems', itemsRef)
  }
}
</script>
<style media="screen" lang="scss">
  .basket {
    ul {
      padding: 0;
      margin: 0;
    }
  }
</style>
