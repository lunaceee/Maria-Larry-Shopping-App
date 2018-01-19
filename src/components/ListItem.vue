<template lang="html">
  <div>
    <div class="item" @click="modal = true">
      {{thisItem.name}}
      <div class="modal-container" v-if="modal">
        <div class="modal">
          <div class="modal-header">
            <input type="text" class="name" :placeholder="thisItem.name" v-model="thisItem.name" >
            </input>
          </div>
          <div class="modal-description">
            <textarea rows="5" type="text" name="" value="" :placeholder="defaultDescription" v-model="thisItem.description"/>
          </div>
          <div class="modal-body">
            <div class="category">
              <v-select v-model="selected" :options="categoryNames"></v-select>
            </div>
            <div class="amount">
              amount: {{thisItem.amount}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-overlay" v-if="modal" @click="modal = false, updateItem(thisItem)"/>
  </div>
</template>

<script>
import {
  firebaseApp
} from '@/firebase'
const db = firebaseApp.database()
var items = db.ref('items')
var categories = db.ref('categories')

export default {
  data: () => ({
    modal: false,
    thisItem: [],
    thisCategories: [],
    selected: null
  }),
  props: {
    item: {
    }
  },
  computed: {
    defaultDescription: function defaultDescription () {
      if (this.thisItem.description) {
        return this.thisItem.description
      } else {
        return 'description...'
      }
    },
    categoryNames: function categoryNames () {
      let categories = []
      for (let i = 0; i < this.thisCategories.length; i++) {
        categories.push(this.thisCategories[i].url)
      }
      return categories
    }
  },
  methods: {
    updateItem (item) {
      items.child(item['.key'])
        .update({
          name: item.name,
          description: item.description,
          category: this.selected
        })
    }
  },
  mounted () {
    // do something after mounting vue instance
    this.$bindAsObject('thisItem', items.child(this.item['.key']))
  },
  created () {
    this.$bindAsArray('thisCategories', categories)
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 10px 20px;
  margin: 8px auto;
  max-width: 35rem;
  border-radius: 8px;
  background: #2b2b2b;
  border: 1px #2b2b2b solid;
  &:focus, &:active {
    border: 1px #7e7e7e solid;
  }
  .v-select .selected-tag {
    color: #fff;
  }
}

.modal-overlay {
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(#fff, 0.35);
  box-shadow: 0 .5rem .5rem rbga(#000, 0.8)
}
.modal-container {
  position: fixed;
  z-index: 10;
  max-width: 35rem;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modal {
    background: #2b2b2b;
    max-width: 35rem;
    width: 100%;
    border-radius: .25rem;
    input, textarea {
      padding: 1rem;
      font-family: 'Comfortaa', sans-serif;
      color: #fff;
      border: none;
      background: rgba(#000, 0);
      width: 100%;
      background: #2b2b2b;
      &:focus {
        background: rgba(#fff, 0.05);
        outline: none;
      }
    }
    input {
      font-size: 1.5rem;
    }
    .modal-description {
      opacity: 0.6;
    }
    .modal-header, .modal-description {
      overflow: hidden;
      border-bottom: 1px rgba(#000, 0.2) solid;
    }
    .modal-body {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      .category {
        span {
          background: rgba(#fff, 0.1);
          padding: .25rem .5rem;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
