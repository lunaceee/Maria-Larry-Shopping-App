<template lang="html">
<li class="item">
  <div class="float-left">
    {{name}}
  </div>
  <div class="float-right">
    <button type="button" name="button" @click="emitRemove()"> 🗑 </button>
    <button v-if="isHomePage" @click="emitMinus()"> - </button>
    <span>{{amount}}</span>
    <button v-if="isHomePage" @click="emitPlus()"> + </button>
  </div>
</li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: false
    }
  },
  computed: {
    isHomePage: function isHomePage() {
      return this.$route.path === '/basket'
    }
  },
  methods: {
    emitMinus(event) {
      this.$emit('emitMinus')
    },
    emitPlus(event) {
      this.$emit('emitPlus')
    },
    emitRemove(event) {
      this.$emit('emitRemove')
    }
  }
}
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border: 1px #2c3e50 solid;
  border-radius: 5px;
  margin: .5rem;
  padding: .5rem;
  .float {
    &-right {
      justify-content: flex-end;
    }
    &-left {
      justify-content: flex-start;
    }
  }
  button {
    height: 24px;
    line-height: 20px;
  }
}
</style>
