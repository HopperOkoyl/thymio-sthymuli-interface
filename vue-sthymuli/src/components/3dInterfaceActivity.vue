<script lang="ts">
  import SensorButton from './SensorButton.vue';
  export default {
    components: {
      SensorButton
    }
  }
</script>

<template>
  <div v-for="n in 5">
    <SensorButton :n="n"/>
  </div>
</template>