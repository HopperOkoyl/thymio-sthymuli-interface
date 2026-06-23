<script lang="ts">
  import { createRouter } from 'vue-router'
  import InterfaceActivity from './components/3dInterfaceActivity.vue';
  import Teacher from './components/Teacher.vue';
  import Challenges from './components/Challenges.vue';
  import Sandbox from './components/Sandbox.vue';
  import ThymioConnection from './components/ThymioConnection.vue';
  import ConnectionStatus from './components/ConnectionStatus.vue';
  import settingsIconDrawing from './assets/noun-settings-6846720.svg';
  import settingsIconSimple from './assets/noun-setting-simple-4547794.svg';
  import flagFR from './assets/FlagFR.png';
  import flagES from './assets/FlagES.png';
  import flagDE1 from './assets/FlagDE1.png';
  import flagDE2 from './assets/FlagDE2.png';
  import flagIT from './assets/FlagIT.png';
  import flagEN from './assets/FlagEN.png';
  import dropDownArrow from './assets/drop-down-arrow.png';
  import home from './assets/noun-house-6718391.svg';

  export default {
    components: {
      // MainMenuButton,
      InterfaceActivity,
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
        settingsIconDrawing,
        settingsIconSimple,
        flagFR,
        flagES,
        flagDE: flagDE1, //flagDE2
        flagEN,
        flagIT,
        dropDownArrow,
        home,
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
    <div id="top-bar">
      <div class="top-bar-section left-secion">
        <ConnectionStatus class="top-bar-elem" @toggleConnectionWindow="toggleConnectionWindow()" :connectionStatus="isConnected"></ConnectionStatus>
        <button class="no-button top-bar-elem" id="back-button" v-if="$route.name !== 'Home'" @click="$router.back()">Back</button>
      </div>
      <div class="top-bar-section empty"></div>
      <div class="top-bar-section right-section">
        <div id="top-bar-right">
          <div id="home" class="top-bar-elem">
            <button class="no-button"><RouterLink :to="{name: 'Home'}"><img class="icon-image" :src="home" alt="Home"></RouterLink></button>
          </div>
          <div id="language" class="top-bar-elem">
            <button class="back no-button"><img class="icon-image smaller" :src="dropDownArrow" alt="Drop down arrow"></img><img class="icon-image" :src="flagEN" alt="Flag"></img></button>
          </div>
          <div id="settings" class="top-bar-elem">
            <button class="no-button"><img class="icon-image larger" :src="settingsIconSimple" alt="Gear"></img><p>Settings</p></button>
          </div>
        </div>
      </div>
    </div>
    <main>
      <dialog class="connection popup"
        :open="show"
      >
        <div class="popup-topbar"><button class="closeButton" @click="toggleConnectionWindow()">&#x2715;</button></div>
        <!-- <ThymioConnection v-if="show"></ThymioConnection> -->
        <ThymioConnection :popupState="show" @isThymioConnected="(newStatus) => isConnected = newStatus"></ThymioConnection>
      </dialog>
      <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
      <div v-if="show" @click="toggleConnectionWindow();console.log('Connection window closed by clicking on blur.')" class="blur"></div>
      <!--<div>
        <button id="back-button" v-if="$route.name !== 'Home'" @click="$router.back()">Back</button>
      </div>-->
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
.screen, main {
  background-color: inherit;
  color: inherit;
}
.screen {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;

  --top-bar-proportion: 1;
  --main-proportion: calc(10 - var(--top-bar-proportion));
}
main {
  --proportion: var(--main-proportion);
  flex: var(--proportion) var(--proportion) auto;
  max-height: calc(10% * var(--proportion));
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0 5%; */
}




/* Popup */

.popup-topbar {
  text-align: right;
}
.closeButton {
  border-style: none;
}
.closeButton:not(:hover) {
  background-color: inherit;
}
.popup {
  color: inherit;
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




/* Top bar */

#top-bar {
  --proportion: var(--top-bar-proportion);
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex: var(--proportion) var(--proportion) auto;
  /* min-width: 5%; */
}
.top-bar-section {
  display: flex;
}
.top-bar-section.empty {
  flex: 1 1 auto;
}
.top-bar-section.right-section {
  min-width: 25%;
}
#top-bar-right {
  display:flex;
  flex: 1 1 auto;
  justify-content: right;
}
.top-bar-section.left-secion {
  min-width: 25%;
  justify-content: left;
  align-items: center;
}
.top-bar-elem {
  display: flex;
  /* flex: 1 1 auto; */
  justify-content: center;
  align-items: center;
}
#back-button {
  /* border: black;
  border-radius: 50%;
  border-style: solid;
  border-width:medium; */
  max-height:40px;
  aspect-ratio: 1;
  margin: 1%;
  padding: 4%;
}

/* #language, #settings {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */


/* .icon-image.larger {
  height: 2em;
} */
.icon-image.smaller {
  height: 1.5em;
}

</style>

<style scoped>
.no-button {
  /* flex: 1 1 auto; */
  padding: 0 10px;
  display:flex;
  justify-content: center;
  align-items: center;
}
.no-button p {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>