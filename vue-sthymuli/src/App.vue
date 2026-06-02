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
        // Popup
        show: false,
        isConnected: false,
      }
    },
    //TODO: Adding router for navigation
    methods: {
      toggleConnectionWindow() {
        console.log("Toggling connection window")
        this.show = !this.show
        if (!this.show) {
          console.log("Popup was closed, if popup was waiting for connection ('loading' state), should go back to 'disconnected' state")
        }
      },
    },
  }
</script>

<template>
  <div class="screen">
    <ConnectionStatus id="connection-status" @toggleConnectionWindow="toggleConnectionWindow()" :connectionStatus="isConnected"></ConnectionStatus>
    <main>
      <dialog id="connection-popup"
        :open="show"
      >
        <div class="popup-topbar"><button class="closeButton" @click="toggleConnectionWindow()">&#x2715;</button></div>
        <!-- <ThymioConnection v-if="show"></ThymioConnection> -->
        <ThymioConnection :popupState="show" @isThymioConnected="(newStatus) => isConnected = newStatus"></ThymioConnection>
      </dialog>
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <div v-if="show" @click="toggleConnectionWindow();console.log('Connection window closed by clicking on blur.')" class="blur"></div>
      <div>
        <button id="back-button" v-if="$route.name !== 'Home'" @click="$router.back()">Back</button>
      </div>
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
  display: flex;
  flex-direction: column;
  height: 100%;
}
#connection-popup {
  z-index: 2;
  border-style:solid;
  border-width: 1px;
  border-radius: 2vmin;/*4% / 5%;*/
  box-shadow: none;
  align-items: center;
  text-align: center;
  width: 40%;
  /* height: 60%; */
}
.blur {
  position: fixed;
  top:0;
  left:0;
  height: 100vh;
  width:100vw;
  z-index: 1;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.65);
}
main {
  height: 100%;
  flex: 19 19 19;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#connection-status {
  flex: 1 1 1;
}

.popup-topbar {
  text-align: right;
}
.closeButton {
  border-style: none;
}

.closeButton:not(:hover) {
  background-color: inherit;
}

/* #back-button {
} */
</style>