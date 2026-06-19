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
        firstFloor: [
          { name: "Computer Science", iconUrl: 'src/assets/computer.png', value: 0 },
          { name: "Biology", iconUrl: 'src/assets/leave.png', value: 4},
        ],
        secondFloor: [
          { name: "French", iconUrl: 'src/assets/french.png', value: 1 },
          { name: "German", iconUrl: 'src/assets/german.png', value: 2 },
          { name: "Spanish", iconUrl: 'src/assets/spanish.png', value: 3 },
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
        <div class="inside">
          <div class="floor" v-for="floor in [firstFloor, secondFloor]">
            <RouterLink :to="{name: 'ProgressPath', params: {roomID: room.name}}" class="room no-button" v-for="room in floor">
              <img :src="room.iconUrl"></img>
            </RouterLink>
          </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/noun-empty-house-5431675.svg);
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
  }
  .inside {
    position:relative;
    top: 15%;
    left: 0.05%;
    height: 65%;
    /* width: calc(45% / 65); */
    aspect-ratio: 1.08;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  .floor {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    min-width: 0;
    min-height: 0;
  }
  .room {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
  }
  .no-button {
    min-height: 0;
    min-width: 0;
    line-height: 0;
  }
  .room img {
    display:block;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    max-height: 100%;
    max-width: 100%;
    width: 20px;
    height: auto;
    object-fit: contain;
    margin: 10%;
  }
</style>