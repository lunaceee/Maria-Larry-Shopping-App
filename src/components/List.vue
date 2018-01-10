<template>
  <div id='list'>
    <div class="" v-if="itemsInBasket > 0">
      <div  v-for="item in items" :key="item.key">
        <div class="item" v-if="item.amount > 0">
          <div class="">
            <span>{{item.name}}</span>
          </div>
          <div class="right-align">
            <span>{{ item.amount }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-else>
      No items in the basket
    </div>
  </div>
</template>
<script>
import { firebaseApp } from '@/firebase'
const db = firebaseApp.database()
var itemsRef = db.ref('items')
export default {
  name: 'list',
  data: () => ({
    items: []
  }),
  computed: {
    itemsInBasket: function itemsInBasket () {
      let item = ''
      let nOfItems = ''
      for (item of this.items) {
        if (item.amount > 0) {
          nOfItems++
        }
      }
      return nOfItems
    }
  },
  created () {
    this.$bindAsArray('items', itemsRef)
  }
}
</script>
<style media="screen" lang="scss">

.item {
    margin: 8px;
    border-radius: 8px;
    position: relative;
    background: #2b2b2b;
    height: 48px;
    font-size: 14px;
    border-bottom: #181818 solid 1px;
    padding-left: 8px;
    transition: transform ease-out .2s;
    &.draggable {
      transition: background ease .2s;
      &.toRemove {
        background: #EC5F4A;
      }
    }
    span {
      float: left;
      padding-left: 8px;
      line-height: 48px;
      background: transparent;
      border: none;
      height: 32px;
      width: 32px;
      display: inline-block;
    }
    .right-align {
      position: absolute;
      right: 0;
    }
}
</style>
