<script lang="ts">
  export default {
    inheritAttrs: true,
    emits: ['buttonClicked'],
    methods: {
      handleClick() {
        console.log('Button clicked, emitting buttonClicked');
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
  <button @click="handleClick()" :class="$attrs.class">{{ name }}</button>
</template>