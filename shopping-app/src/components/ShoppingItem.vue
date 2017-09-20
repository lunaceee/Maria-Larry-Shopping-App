<template>
<div id='shopping-item' class='shopping-area'>
  <div class='item' v-for='item in newItems' v-bind:category='item.category' v-bind:amount='item.amount' v-if='item.category === $route.params.category'>
    <div class='name-container'>
      <input v-model="item.name" @keyup.enter="updateItem(item)" @keyup.delete="removeItem(item)" placeholder="Add New Item"/>
      <button @click="minus(item)">-</button>
      {{ item.amount }}
      <button @click="plus(item)">+</button>
    </div>
  </div>
  <input v-model="newItem" placeholder="Add New Item"/>
  <button @click="addItem">Add item</button>
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
      itemsRef.child(item['.key']).update({
        amount: ++item.amount
      })
    },
    minus (item) {
      if (item.amount > 0) {
        itemsRef.child(item['.key']).update({
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
      console.log('clicked enter')
      itemsRef.child(item['.key']).update({
        name: item.name
      })
    },
    removeItem (item) {
      itemsRef.child(item['.key']).remove()
    }
  },
  created () {
    this.$bindAsArray('newItems', itemsRef)
  }
}
</script>
<style lang='scss' scoped>
.shopping-area {
  height: 100vh;
}
.daily .shopping-area {
 background-color: rgba(13,71,161 ,.8);
}
.weekly .shopping-area {
 background-color: rgba(21,101,192 ,.8);
}
input {
  background: transparent;
  border: none;
}
</style>
