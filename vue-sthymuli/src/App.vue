<script lang="ts">
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
  import MainMenuButton from './components/MainMenuButton.vue';
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
      MainMenuButton,
      InterfaceActivity,
      TeacherClassSelection,
      Home,
      Teacher,
      Challenges,
      Sandbox
    },
    data() {
      return {
        menuNames: MenuNames,
        currentMenu: MenuNames.Home,
        previousMenu: MenuNames.Home
      }
    }
  }
</script>

<template>
  <header>
    <MainMenuButton v-if="currentMenu !== menuNames.Home" @buttonClicked="currentMenu = previousMenu" :name="'Back'"></MainMenuButton>
    <div v-if="currentMenu === menuNames.Home" class=MainMenu>
      <ul class="nav"><li v-for="name in menuNames"><MainMenuButton @buttonClicked="previousMenu = currentMenu; currentMenu = name" :name="name"/></li></ul>
    </div>
  </header>
  <main>
    <component :is="currentMenu"/>
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