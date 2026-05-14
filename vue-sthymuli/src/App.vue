<script lang="ts">
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
  // import MainMenuButton from './components/Button.vue';
  import InterfaceActivity from './components/3dInterfaceActivity.vue';
  import TeacherClassSelection from './components/TeacherClassSelection.vue';
  import Home from './components/Home.vue';
  import Teacher from './components/Teacher.vue';
  import Challenges from './components/Challenges.vue';
  import Sandbox from './components/Sandbox.vue';
  enum MenuNames {
    Home = 'Home',
    Teacher = 'Teacher',
    Challenges = 'Challenges',
    Sandbox = 'Sandbox',
  }

  export default {
    components: {
      // MainMenuButton,
      InterfaceActivity,
      TeacherClassSelection,
      Home,
      Teacher,
      Challenges,
      Sandbox
    },
    data() {
      return {
        // menuNames: Object.values(MenuNames),
        MenuNames,
        // MenuNames: [
        //   {pageName: "Home", value: 0 },
        //   {pageName: "Teacher", value: 1 },
        //   {pageName: "Challenges", value: 2 },
        //   {pageName: "Sandbox", value: 3 }
        // ],
        currentMenu: MenuNames.Home,//"Home",//MenuNames.Home,
        previousMenu: MenuNames.Home//"Home"//MenuNames.Home
      }
    },
    //TODO: Adding router for navigation
    // methods: {
    //   goBack() {
    //     this.$router.back();
    //   }
    // },
    computed: {
      allMenus() {
        return Object.values(MenuNames)
      },
      secondaryMenus() {
        return this.allMenus.filter(m => m !== MenuNames.Home)
      }
    }
  }
</script>

<template>
  <header>
    <button v-if="currentMenu !== MenuNames.Home" @click="currentMenu = previousMenu">Back</button>
    <div v-if="currentMenu === MenuNames.Home" class=MainMenu>
      <ul class="nav"><li v-for="name in secondaryMenus"><button @click="previousMenu = currentMenu; currentMenu = name">{{ name }}</button></li></ul>
    </div>
  </header>
  <main>
    <component v-if="currentMenu !== MenuNames.Home" :is="currentMenu"/>
<!--     <InterfaceActivity/>
    <TeacherClassSelection/> -->
  </main>
</template>

<style>
  .nav {
  /* border-style: solid;
  border: solid 3 px;
  border-color: black; */
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  text-align: center;
  }
  .nav li {
      display: inline-block;
      /* border: solid 1px; */
      /* border-radius: 30%; */
      /* background-color: lightgray; */
      /* border-color: whitesmoke; */
      padding: 20px;
  }
  .nav li:hover {
      position: relative;
      background-color: whitesmoke;
      border-radius: 10%;
  }
  .dropdown {
      position: relative;
      display: inline-block;
      padding: 20px;
  }
  .dropdown-content {
      position: absolute;
      display: none;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }
  .dropdown-content p {
      display: block;
      /* background-color: lightgray; */
      background-color: white;
      padding: 12px 16px;
      text-decoration: none;
      margin: 0px;
  }
  .dropdown:hover .dropdown-content {
      display: block;
  }
  .dropdown:hover {
      background-color: whitesmoke;
  }
  .dropdown-content p:hover {
      background-color: whitesmoke;
  }
  /* New interface style end */
</style>