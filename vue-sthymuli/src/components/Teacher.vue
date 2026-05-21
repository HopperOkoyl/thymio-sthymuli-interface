<script lang="ts">
// import Button from './Button.vue';
  // enum classes {
  //   CS,
  //   Maths,
  //   Music,
  //   Biology,
  //   Physics
  // }

  export default {
    // components: {
    //   Button
    // },
    // emits: ['buttonClicked'],
    methods: {
      // forwardClick() {
      //   this.$emit('buttonClicked')
      // },
      showActivities(topic: string) {
        this.currentPage = topic
      }
      //in @buttonClicked: currentPage = classTopic.topic"
    },
    data() {
      return {
        classes: [
          { topic: "Computer Science", value: 0 },
          { topic: "Maths", value: 1 },
          { topic: "Music", value: 2 },
          { topic: "Biology", value: 3 },
          { topic: "Physics", value: 4}
        ],
        currentPage: "topic choice"
      }
    }
  }
</script>

<template>
  <div>
    <p>{{ currentPage }}</p>
    <div v-if="currentPage === 'topic choice'" class="container">
      <ul class="allTopics">
        <li v-for="classTopic in classes" :key="classTopic.topic">
          <RouterLink :to="{ name: 'TeacherClass', params: { topicId: classTopic.topic } }" class="allTopics" :class="'classTopic-' + classTopic.value"> {{ classTopic.topic }} </RouterLink>
          <!-- <button @click="currentPage = classTopic.topic" :class="'classTopic-' + classTopic.value">{{classTopic.topic}}</button> -->
        </li>
      </ul>
    </div>
    <div v-if="currentPage === 'Computer Science'"><p>CS chosen</p></div>
  </div>
</template>


<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    position: relative;
    pointer-events: auto;
    /* background-color: black; */ /* TODO: check what is the ~padding on the left*/
  }
  a.allTopics { /*RouterLink is rendered as a (link), it's not a valid html element!*/
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    position: absolute;
    display: flex; /* or block, or inline-block */
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    color: inherit;
  }
  a.allTopics:visited {
    color: inherit;
  }
  ul.allTopics {
  list-style: none;
  padding: 0;
  margin: 0;
  }
  .classTopic-0 {
    top: 10vh;
    left: 10vw;
    background-color: lightblue;
  }
  .classTopic-1 {
    top: 50vh;
    left: 20vw;
    background-color: beige;
  }
  .classTopic-2 {
    top: 20vh;
    left: 35vw;
    background-color: aquamarine;
  }
  .classTopic-3 {
    top: 45vh;
    left: 75vw;
    background-color: lightcoral;
  }
  .classTopic-4 {
    top: 10vh;
    left: 55vw;
    background-color: lightslategray;
  }
</style>