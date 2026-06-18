<script lang="ts">
</script>

<template>
  <div class="image-fullscreen-container Sandbox block">
    <img src="../assets/Final-iteration-of-Sthymulis-VPL3-interface.png" alt="Classical sandbox placeholder" />
  </div>
</template>


<style scoped>
/* TODO: make image larger for larger monitors */
/* component-only CSS */
.image-fullscreen-container { display:flex; align-items:center; justify-content:center; height:100vh; }
.image-fullscreen-container img{ max-width: 95vw; max-height: 95vh; width: 120%; height: auto; object-fit: contain; display: flex; align-items: center; pointer-events: none; /* allow clicks to reach button */ }
</style>