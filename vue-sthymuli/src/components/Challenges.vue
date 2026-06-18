<script lang="ts">
  import emptyHouse from '../assets/noun-empty-house-5431675.svg'
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
        currentPage: "topic choice",
        emptyHouse,
      }
    }
  }
</script>

<template>
  <div class="external-container">
    <div class="Challenges block">
      <div class="house">
        <div class="room" v-for="room in challengesRooms">
          <button>{{ room.name }}</button>
        </div>
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
  .house {
    flex: 1 1 auto;
    background-image: url(../assets/noun-empty-house-5431675.svg);/* v-bind('emptyHouse');*/
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
  }
  .room {
    /* height: 100%;
    width: 100%; */
  }
</style>