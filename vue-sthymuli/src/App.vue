<script lang="ts">
import { createRouter } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
  // import MainMenuButton from './components/Button.vue';
  import InterfaceActivity from './components/3dInterfaceActivity.vue';
  import TeacherClassSelection from './components/TeacherClassSelection.vue';
  import Teacher from './components/Teacher.vue';
  import Challenges from './components/Challenges.vue';
  import Sandbox from './components/Sandbox.vue';
  import ThymioConnection from './components/ThymioConnection.vue';
  import ConnectionStatus from './components/ConnectionStatus.vue';
  // enum MenuNames {
  //   Home = 'Home',
  //   Teacher = 'Teacher',
  //   Challenges = 'Challenges',
  //   Sandbox = 'Sandbox',
  // }

  export default {
    components: {
      // MainMenuButton,
      InterfaceActivity,
      TeacherClassSelection,
      Teacher,
      Challenges,
      Sandbox,
      ThymioConnection,
      ConnectionStatus
    },
    data() {
      return {
        show: false
        // menuNames: Object.values(MenuNames),
        // MenuNames,
        // MenuNames: [
        //   {pageName: "Home", value: 0 },
        //   {pageName: "Teacher", value: 1 },
        //   {pageName: "Challenges", value: 2 },
        //   {pageName: "Sandbox", value: 3 }
        // ],
        // currentMenu: MenuNames.Home,//"Home",//MenuNames.Home,
        // previousMenu: MenuNames.Home//"Home"//MenuNames.Home
      }
    },
    //TODO: Adding router for navigation
    methods: {
      toggleConnectionWindow() {
        console.log("show connection window (to be implemented)")
        this.show = !this.show
      }
    //   goBack() {
    //     this.$router.back();
    //   }
    // },
    // computed: {
    //   allMenus() {
    //     return Object.values(MenuNames)
    //   },
    //   secondaryMenus() {
    //     return this.allMenus.filter(m => m !== MenuNames.Home)
    //   }
    }
  }
</script>

<template>
  <div>
    <ConnectionStatus @showConnectionWindow="toggleConnectionWindow()"></ConnectionStatus>
    <ThymioConnection v-if="show"></ThymioConnection>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <main>
      <button v-if="$route.name !== 'Home'" @click="$router.back()">Back</button>
      <RouterView />
    </main>
  </div>
</template>

<!-- <template>
  <div>
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <header>
      <ThymioConnection></ThymioConnection>
      <button v-if="currentMenu !== MenuNames.Home" @click="currentMenu = previousMenu">Back</button>
      <div v-if="currentMenu === MenuNames.Home" class=MainMenu>
        <ul class="nav"><li v-for="name in secondaryMenus" :key="name"><button @click="previousMenu = currentMenu; currentMenu = name">{{ name }}</button></li></ul>
      </div>
    </header>
    <main>
      <RouterView />
      <component v-if="currentMenu !== MenuNames.Home" :is="currentMenu"/> -->
  <!--     <InterfaceActivity/>
      <TeacherClassSelection/> -->
    <!-- </main>
  </div>
</template> -->

<style>
</style>