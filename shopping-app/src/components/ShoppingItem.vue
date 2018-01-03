<template>
<div id='shopping-item' class='shopping-area'>

    <div class='item'
    v-for='item in newItems'
    v-bind:category='item.category'
    v-if='item.category === $route.params.category'
    >
      <v-touch class="vtouch"
      ref="swiper"
      v-on:pan="removeItemSwipe"
      v-bind:uid="(item['.key'])"
      v-bind:amount='item.amount'
      v-on:panend="removeStyle"
      v-bind:panleft-options="{ threshold: 0, pointers: 0 }"
      v-bind:panend-options="{ threshold: 0, pointers: 0 }"
      >
        <div class='name-container'>
          <input
          v-model="item.name"
          @keyup.enter="updateItem(item)"
          placeholder="Add New Item" />
        </div>
        <div class="right-align">
          <div class="button" @click="minus(item)">-</div>
          <span>{{ item.amount }}</span>
          <div class="button" @click="plus(item)">+</div>
        </div>
      </v-touch>
    </div>
    <input id="addItem" v-model="newItem" placeholder="Add New Item" />
    <div class="addItem-button" @click="addItem">Add item</div>

</div>
</template>
<script>
import { firebaseApp } from '@/firebase'
const db = firebaseApp.database()
var itemsRef = db.ref('items')

export default {
  name: 'shopping-item',

  data: () => ({
    newItems: [],
    newItem: ''
  }),
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
    addItem (item) {
      itemsRef.push({
        name: this.newItem,
        category: this.$route.params.category,
        amount: '0'
      })

      document.getElementById('addItem').reset()
    },
    updateItem (item) {
      itemsRef.child(item['.key'])
        .update({
          name: item.name
        })
    },
    removeItemSwipe (i) {
      var draggableItem = i.target.closest('.item')
      draggableItem.setAttribute('style', 'transform: translateX(' + (i.deltaX * 0.5) + 'px)')
      draggableItem.classList.add('draggable')
      if (i.deltaX < -200) {
        draggableItem.classList.add('toRemove')
      } else {
        draggableItem.classList.remove('toRemove')
      }
    },
    removeStyle (i) {
      var draggableItem = i.target.closest('.item')
      var key = i.target.closest('.vtouch').getAttribute('uid')
      var newAmount = i.target.closest('.vtouch').getAttribute('amount')
      draggableItem.setAttribute('style', '')
      draggableItem.classList.remove('draggable')

      if (i.deltaX > 30) {
        itemsRef.child(key)
          .update({
            amount: ++newAmount
          })
      }
      if (i.deltaX < -30 && newAmount > 0) {
        itemsRef.child(key)
          .update({
            amount: --newAmount
          })
      }
      if (i.deltaX < -200) {
        itemsRef.child(key).remove()
      }
    }
  },
  created () {
    this.$bindAsArray('newItems', itemsRef)
  }
}
</script>
<style lang='scss'>
.item {
    margin: 8px;
    border-radius: 8px;
    position: relative;
    background: #FEFEFE;
    height: 48px;
    font-size: 14px;
    border-bottom: #DFE2E8 solid 1px;
    padding-left: 8px;
    transition: transform ease-out .2s;
    &.draggable {
      transition: background ease .2s;
      &.toRemove {
        background: #EC5F4A;
      }
    }
    span {
      height: 32px;
      width: 32px;
      display: inline-block;
    }
    input {
      float: left;
      padding-left: 8px;
      line-height: 48px;
      background: transparent;
      border: none;
    }
}
.button {
  display: inline-block;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  background: #D7D7DE;
  height: 32px;
  width: 32px;
  line-height: 32px;
}
.right-align {
  position: absolute;
  right: 0;
}
.addItem, .addItem-button {
  border-radius: 8px;
  border: none;
  display: inline-block;
  padding: 8px;
}
.addItem-button {
  margin-left: 8px;
  background: rgba(0,0,0,0.2);
  color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all ease .4s;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
