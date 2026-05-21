<script lang="ts">
  // import SensorButton from './SensorButton.vue';
  export default {
    components: {
      // SensorButton
    }
  }
</script>

<template>
  <div>
    <div v-for="n in 5" :key="n">
      <button>Computer Science</button>
    </div>
  </div>
</template>