<template lang="html">
  <div class="categories">

      <router-link  class="category" v-for="category in categories" :key="category.key" :to="{path: category.url}">{{ category.url }}
      </router-link>
  </div>
</template>

<script>
import {
  firebaseApp
} from '@/firebase'
const db = firebaseApp.database()
var categories = db.ref('categories')

export default {
  name: 'nav-menu',
  data: () => ({
    categories: [],
    category: '',
    newCategory: '',
    newCategoryShow: false
  }),
  methods: {
    addCategory (newCategory) {
      categories.push({
        url: this.newCategory
      })
      this.newCategory = ''
    },
    deleteCategory (category) {
      categories.child(category['.key']).remove()
    }
  },
  created () {
    this.$bindAsArray('categories', categories)
  }
}
</script>

<style lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .category {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all ease .2s;
    &:hover {
      background: #fff;
        color: #181818;
    }
    a {
      color: #fff;
    }
  }
}
</style>
