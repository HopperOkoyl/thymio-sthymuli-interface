<script lang="ts">
</script>

<template>
  <div class="image-fullscreen-container Sandbox block">
    <div class="wrapper">
      <img src="../assets/Final-iteration-of-Sthymulis-VPL3-interface.png" alt="Classical sandbox placeholder" />
    </div>
  </div>
</template>


<style scoped>
/* .image-fullscreen-container { display:flex; align-items:center; justify-content:center; height:100vh; }
.image-fullscreen-container img{ max-width: 95vw; max-height: 95vh; width: 120%; height: auto; object-fit: contain; display: flex; align-items: center; pointer-events: none; } */
.wrapper {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 1.767;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}  
img {
    /* flex: 1 1 auto; */
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 1.767;
  }
</style>