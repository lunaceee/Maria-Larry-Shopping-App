<template>
<div id='shopping-item' class='shopping-area'>
  <div class='item' v-for='item in newItems' v-bind:category='item.category' v-bind:amount='item.amount' v-if='item.category === $route.params.category'>
    <v-touch v-on:pan="removeItemSwipe" v-on:panend="removeStyle" v-bind:panleft-options="{ threshold: 0, pointers: 0 }" panendv-bind:panleft-options="{ threshold: 0, pointers: 0 }">
      <div class='name-container'>
        <input v-model="item.name" @keyup.enter="updateItem(item)" placeholder="Add New Item" />
      </div>
      <div class="right-align">
        <div class="button" @click="minus(item)">-</div>
        <span>{{ item.amount }}</span>
        <div class="button" @click="plus(item)">+</div>
      </div>
    </v-touch>
  </div>
  <input class="addItem" v-model="newItem" placeholder="Add New Item" />
  <div class="addItem-button" @click="addItem">Add item</div>
</div>
</template>
<script>
import Vue from 'vue'

var VueFire = require('vuefire')
var firebase = require('firebase')
Vue.use(VueFire)

const config = {
  apiKey: 'AIzaSyCs2IdLfd7mDbcPHhsOMY0u_2KZIiwriic',
  authDomain: 'shopping-app-e063d.firebaseapp.com',
  databaseURL: 'https://shopping-app-e063d.firebaseio.com',
  projectId: 'shopping-app-e063d',
  storageBucket: 'shopping-app-e063d.appspot.com',
  messagingSenderId: '167034361296'
}

const firebaseApp = firebase.initializeApp(config)
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
    },
    updateItem (item) {
      itemsRef.child(item['.key'])
        .update({
          name: item.name
        })
    },
    removeItemSwipe (i) {
      i.target.closest('.item').setAttribute('style', 'transform: translateX(' + i.deltaX + 'px)')
      console.log(i.distance)
      // itemsRef.child(item['.key']).style.transform = 'translateX(-' + i.distance + ')'
      // itemsRef.child(item['.key']).remove()
    },
    removeStyle (i) {
      i.target.closest('.item').setAttribute('style', '')
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

</style>
