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
  <button type="button" name="button" class="button_open-new-item" :class="{newItemIsOpen: newItemIsOpen}" @click="newItemIsOpen = !newItemIsOpen">
    <span>+</span>
  </button>
  <addNewItem v-if="newItemIsOpen" @closeNewItem="newItemIsOpen = !newItemIsOpen" />
</div>
</template>

<script>
// @ is an alias to /src
import listItem from '@/components/listItem'
import addNewItem from '@/components/addNewItem'

import { db } from '@/firebase'
var itemsRef = db.ref('items')

export default {
  data: () => ({
    newItemIsOpen: false
  }),
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
    .button_open-new-item {
      font-size: 20px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 60px;
      border-radius: 30px;
      border: none;
      position: fixed;
      bottom: 30px;
      z-index: 10;
      left: 50%;
      transform: translateX(-50%);
      transition: all ease .4s;
      &:focus {
        outline: none;
      }
      &.newItemIsOpen {
        transform: translateX(-50%) rotate(45deg);
        transform-origin: center;
      }
    }
  }
</style>
