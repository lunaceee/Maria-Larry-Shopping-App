<template lang="html">
<div class="newItem">
  <div class="newItem_container">
    <input type="text" ref="NewItem" name="" v-model="addNewItem" @keydown.esc="closeNewItem()" @keydown.enter="addItem(), closeNewItem()" autofocus placeholder="Start here...">
    <button type="button" name="button" @click="addItem(), closeNewItem()">Add new item</button>
  </div>
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
    addItem (item, event) {
      itemsRef.push({
        name: this.addNewItem,
        category: 'Uncategorized',
        amount: 0
      })
      this.addNewItem = ''
    },
    closeNewItem(event) {
      this.$emit('closeNewItem')
    }
  },
  mounted() {
    //do something after mounting vue instance
    console.log(this.$refs.NewItem)
    this.$refs.NewItem.focus()
  }
}
</script>

<style lang="scss">
.newItem {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  background: rgba(#000, 0.8);
  z-index: 9;
  * {
    display: block;
  }
  &_container {
    background: #000;
    padding: 1rem;
  }
  input {
    min-width: 300px;
    font-size: 1rem;
    padding: 1rem;
  }
  button {
    cursor: pointer;
    background: #000;
    border: 2px solid #fff;
    color: #fff;
    width: 100%;
    margin: 1rem 0;
    padding: .75rem 1rem;
    font-size: 1rem;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
}
</style>
