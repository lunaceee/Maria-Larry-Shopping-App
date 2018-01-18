<template lang="html">
  <section>
    <div class="" v-for="item in items" :key="item.key">
    {{item.name}}
    </div>
  </section>
</template>

<script>
import {
  firebaseApp
} from '@/firebase'
const db = firebaseApp.database()
var categories = db.ref('items')

export default {
  name: 'nav-menu',
  data: () => ({
    items: []
  }),
  created () {
    this.$bindAsArray('items', categories)
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
        transition: all ease 0.2s;
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
