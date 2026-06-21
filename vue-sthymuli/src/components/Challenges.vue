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
        thirdFLoor: [
          { name: "Italian", iconUrl: 'src/assets/italian.png', value: 5},
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
        <div class="wrapper">
          <div class="inside">
            <div class="floor" v-for="floor in [firstFloor, secondFloor, thirdFLoor]">
              <RouterLink :to="{name: 'ProgressPath', params: {roomID: room.name}}" class="room no-button" v-for="room in floor">
                <img :src="room.iconUrl"></img>
              </RouterLink>
            </div>
            <!-- <div class="floor">
              <div v-for="i in 3" class="placeholder-room"></div>
            </div> -->
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
    max-height: 100%;
    max-width: 100%;
  }
  .house {
    flex: 1 1 auto;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/noun-empty-house-5431675.svg);
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
  }
  .wrapper {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    max-width: 63.5%;
    max-height: 85%;
    aspect-ratio: 0.82;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .inside {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    /* position:relative; */
    /* top: 6%;
    left: 0.07%; */
    /* max-width: 63.5%;
    max-height: 70%; */
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 0.82;
    display: flex;
    flex-direction: column-reverse;
    justify-content: bottom;
  }
  .floor {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 30%;

  }
  .placeholder-room {
    --border-width: 2pt;

    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    height: calc(100% - var(--border-width));
    border-style: solid;
    border-width: var(--border-width);
    max-width: calc(100% / 3 - 2 * var(--border-width));
    max-height: calc(100% - 2 * var(--border-width));
    text-align: center;
    align-content: center;
  }
  .room {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    max-width: calc(100% / 3);
    justify-content: center;
    align-items: center;
  }
  .no-button {
    min-height: 0;
    min-width: 0;
    line-height: 0;
  }
  .room img {
    --margin: 10%;
    display:block;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    max-height: calc(100% - 2 * var(--margin));
    max-width: 100%;
    width: 20px;
    height: auto;
    object-fit: contain;
    margin: var(--margin);
  }
</style>