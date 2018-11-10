<template>
  <div
    v-bar
    class="basket"
  >
    <ul>
      <li
        v-for="item in items"
        :key="item.key">
        <listItem
          :name="item.name"
          :amount="item.amount"
          :key="item.key"
          @emitMinus="minus(item);"
          @emitPlus="plus(item);"
          @emitRemove="removeItem(item);"
        />
      </li>
    </ul>
    <button
      :class="{ newItemIsOpen: newItemIsOpen }"
      type="button"
      name="button"
      class="button_open-new-item"
      @click="newItemIsOpen = !newItemIsOpen;"
    >
      <span>+</span>
    </button>
    <addNewItem
      v-if="newItemIsOpen"
      @closeNewItem="newItemIsOpen = !newItemIsOpen;"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import listItem from "@/components/listItem";
import addNewItem from "@/components/addNewItem";
import store from "../store";

import { mapGetters } from 'vuex';
import { db } from "@/firebase";

export default {
  components: {
    listItem,
    addNewItem
  },
  data: () => ({
    items: [],
    newItemIsOpen: false
  }),
  computed: {
    ...mapGetters({
      uid: 'user/uid',
      // ...
    })
  },
  created() {
    this.$bindAsArray("items", db.ref(`/${this.uid}/items`));
  },
  methods: {
    plus(item) {
      db.ref(`${this.uid}/items`)
        .child(item[".key"])
        .update({
          amount: ++item.amount
        });
    },
    minus(item) {
      if (item.amount > 0) {
        db.ref(`${this.uid}/items`)
          .child(item[".key"])
          .update({
            amount: --item.amount
          });
      }
    },
    removeItem(item) {
      db.ref(`${this.uid}/items`)
        .child(item[".key"])
        .remove();
    }
  },
};
</script>
<style media="screen" lang="scss">
.basket {
  height: calc(100vh - 120px);
  ul {
    padding: 0;
    margin: 0;
  }
  .button_open-new-item {
    font-size: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 60px;
    border-radius: 30px;
    border: none;
    position: fixed;
    bottom: 30px;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.4s;
    box-shadow: 1px 0px 10px 5px rgba(#000, 0.1);
    &:focus {
      outline: none;
    }
    &.newItemIsOpen {
      transform: translateX(-50%) rotate(45deg);
      transform-origin: center;
    }
  }
}
</style>
