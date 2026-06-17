<script lang="ts">
  export default {
    // emits: ['buttonClicked'],
    methods: {
      // forwardClick() {
      //   this.$emit('buttonClicked')
      // },
      // showActivities(topic: string) {
      //   this.currentPage = topic
      // }
      //in @buttonClicked: currentPage = classTopic.topic"
    },
    data() {
      return {
        challengesRooms: [
          { name: "Computer Science", value: 0 },
          { name: "French", value: 1 },
          { name: "German", value: 2 },
          { name: "Spanish", value: 3 },
          { name: "Biology", value: 4}
        ],
        currentPage: "topic choice"
      }
    }
  }
</script>

<template>
  <div class="external-container">
    <div class="Challenges">
      <div class="room" v-for="room in challengesRooms">
        <button>{{ room.name }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .external-container {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .room {
    height: 100%;
    width: 100%;
  }
</style>