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
        show: false,

        // Popup
        visible: false,
      }
    },
    //TODO: Adding router for navigation
    methods: {
      toggleConnectionWindow() {
        console.log("show connection window (to be implemented)")
        this.show = !this.show
      },

      // Popup
      // toggleModal() {
      //   this.visible = !this.visible;
      // },
    },

    // Popup
    // props: {
    //   classes: {
    //     type: String,
    //     default: "",
    //   },
    // },
  }
</script>

<template>
  <div class="screen">
    <ConnectionStatus @showConnectionWindow="toggleConnectionWindow()"></ConnectionStatus>
    <!-- <button @click="toggleModal()">{{visible ? "hide" : "show"}} popup</button> -->
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <main>
      <dialog
        :open="show"
      >
        <button class="closeButton" @click="toggleConnectionWindow()">close</button>
        <p>Test</p>
        <!-- <ThymioConnection v-if="show"></ThymioConnection> -->
        <ThymioConnection></ThymioConnection>
      </dialog>
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
.screen, main, dialog {
  background-color: inherit;
  color: inherit;
}
.screen {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  height: 100%;
}
dialog {
  border-style:solid;
  border-width: 1px;
  border-radius: 15%;
  box-shadow: none;
  align-items: center;
  /* width: 0.9vw;
  height: 0.9vh; */
}
main {
  height: 100%;
}

/* .closeButton {
} */
</style>