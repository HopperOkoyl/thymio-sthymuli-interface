<script lang="ts">
  export default {
    emits: ['buttonClicked'],
    methods: {
      handleClick() {
        this.$emit('buttonClicked')
      }
    },
    data() {},
    props: {
      name: String
    }
  }
</script>

<template>
  <button @click="handleClick()">{{ name }}</button>
</template>