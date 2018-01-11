<template>
  <div id='list'>
    <div v-for="i in itemsGroups" :key="i.key">
      <div class="category-name"> <span>{{ i }}</span> </div>
      <div  v-for="item in items" :key="item.key">
        <div class="item" v-if="item.amount > 0 && item.category === i">
          <div class="">
            <span class="name">{{item.name}}</span>
          </div>
          <div class="right-align">
            <span>{{ item.amount }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="" v-if="itemsInBasket > 0">
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
    </div> -->
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
    },
    itemsGroups: function itemsGroups () {
      let item = ''
      let categories = []
      for (item of this.items) {
        categories.push(item.category)
        // var list = categories[item.category]
      }
      console.log(categories)
      return Array.from(new Set(categories))
    }
  },
  created () {
    this.$bindAsArray('items', itemsRef)
  }
}
</script>
<style media="screen" lang="scss">
.category-name {
  text-align: center;
  margin: 0 auto;
  display: block;
  position: relative;
  max-width: 35rem;
  z-index: 1;
  span {
    background-color: #181818;
    padding: .5rem;
  }
  &:after {
    left: 0;
    z-index: -1;
    top: .5rem;
    position: absolute;
    content: '';
    width: 100%;
    border-bottom: 1px #fff solid;
  }
}
.item {
    .vtouch {
        height: 100%;
    }
    margin: 8px auto;
    max-width: 35rem;
    border-radius: 8px;
    position: relative;
    background: #2b2b2b;
    height: 48px;
    font-size: 14px;
    border-bottom: #181818 solid 1px;
    padding-left: 8px;
    transition: transform ease-out 0.2s;
    box-shadow: 0 1px 14px 0 rgba(0,0,0,0.10);
    &.draggable {
        transition: background ease 0.2s;
        &.toRemove {
            background: #EC5F4A;
            &::after {
                position: absolute;
                right: -32px;
                top: 0;
                line-height: 48px;
                font-size: 28px;
                font-family: "FontAwesome";
                content: "\f2ed";
            }
        }
    }
    span {
        height: 32px;
        width: 32px;
        display: inline-block;
        text-align: center;
    }
    input {
        color: #fff;
        float: left;
        padding-left: 8px;
        line-height: 48px;
        width: 100%;
        background: transparent;
        border: none;
    }
}
</style>
