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
  <div v-for="room in challengesRooms">
    <button>{{ room.name }}</button>
  </div>
</template>