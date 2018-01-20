<template>
<div class="">
  <div id="nav-menu" class="navigation">
    <router-link :to="{ path: 'categories'}">All Categories</router-link>
    <router-link class="link" v-for="category in categories" :key="category.key" :to="{path: category.url}">{{ category.url }}
    </router-link>
    <span class="deleteCategory" @click="deleteCategory(category)"></span>
  </div>
  <button class="button plus" v-show='!newCategoryShow' @click="newCategoryShow = true" type="button" name="button"></button>
  <input v-show="newCategoryShow" v-model="newCategory" type="text" name="" value="" @blur="newCategoryShow = false" @keydown.enter="addCategory(); newCategoryShow = false">
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
<style lang="scss" scoped>
.navigation {
    background: #1E1E1E;
    box-shadow: 0 1px 14px 0 rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 200px;
    .link {
        position: relative;
        &:hover {
            .deleteCategory {
                opacity: 1;
            }
        }
        .deleteCategory {
            opacity: 0;
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            cursor: pointer;
            &:after {
                content: "\f146";
                font-family: "FontAwesome";
            }
        }
    }
    a {
        color: #fff;
        padding: 10px 20px;
        border-left: 1px solid #181818;
        text-transform: capitalize;
        &:last-child {
            border-right: 1px solid #181818;
        }
        &.router-link-exact-active {
            background: #fff;
            color: #181818;
            + .deleteCategory {
                color: #181818;
            }
        }

    }
    input {
        margin: 10px 20px;
    }
}

.plus {
    padding: 0;
    margin: 0 auto;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
        content: "+";
    }
}
</style>
