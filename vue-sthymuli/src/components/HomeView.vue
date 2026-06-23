<script lang="ts">
    import { COLORS, colorPalettes, type ColorPalette } from '../constants';
    import graduationHat from '../assets/graduation-hat.png';
    import crown from '../assets/crown.png';
    import sandbox from '../assets/sandbox.png';

    export default{
        data() {
            return {
                // MenuNames
                MenuNames: [
                    { name: "Home", value: 0 },
                    { name: "Teacher", iconUrl: graduationHat, value: 1 },
                    { name: "Challenges", iconUrl: crown, value: 2 },
                    { name: "Sandbox", iconUrl: sandbox, value: 3 }
                ],
                firstColor: 'red',
                secondColor: 'blue',
                thirdColor: 'green',
                currentPalette: 1, // 1 = Pastel Palette
                colorPalettes,
            }
        },
        methods: {
            handleSpacebar(event: KeyboardEvent) {
                // console.log(`key pressed: ${event.key}`)
                if (event.key === ' ') {
                    console.log("space pressed")
                    this.currentPalette = (this.currentPalette + 1) % colorPalettes.length
                }
            }
        },
        computed: {
            // allMenus() {
            //     return Object.values(MenuNames)
            // },
            secondaryMenus() {
                    return this.MenuNames.filter(m => m.name !== "Home")
            }
        },
        async mounted() {
            window.addEventListener('keydown', this.handleSpacebar);
        }
    }
</script>

<template>
    <!-- <button @click="currentPalette = (currentPalette + 1) % colorPalettes.length">Change palette: {{ colorPalettes[currentPalette]?.name }}</button> -->
    <nav class="external-container">
        <ul class="nav-menu">
            <li v-for="menu in secondaryMenus" :key="menu.name" :class="menu.name">
                <RouterLink :to=menu.name.toLowerCase() class="router-link">
                    <h1>{{ menu.name }}</h1>
                    <img class="place-holder-images image" :src="menu.iconUrl" alt=""/>
                    <!-- <div class="place-holder-images image" :class="menu.name"></div> -->
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>


<style scoped>
    .nav-menu {
        list-style: none;
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;


        /* height: 100%;
        width: 100%; */
        display: flex;
        flex: 1 1 auto;
        justify-content: space-evenly;
        align-items: center;
        /* background-color: aqua; */
    }
    nav {
        /* height: 100%;
        width: 100%; */
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
    }

    /* Menu style */
    li.Teacher, li.Challenges, li.Sandbox {
        display: flex;
        flex-direction: column;
        border-radius: 7vmin;
        justify-content: space-evenly;
        /* flex: 1 1 auto; */ /*not compatible with space-evenly etc*/
    }
    li.Teacher, li.Sandbox {
        /* font-size:1rem; */
        width: 20%;
        height: 70%;
    }
    li.Teacher {
        background-color: color-mix(v-bind('colorPalettes[currentPalette]?.first.bg'), transparent var(--transparency));
        color: v-bind('colorPalettes[currentPalette]?.first.txt');
    }
    li.Challenges {
        padding: clamp(10px, 10%, 20px) clamp(10px, 10%, 20px);
        background-color: color-mix(v-bind('colorPalettes[currentPalette]?.second.bg'), transparent var(--transparency));
        color: v-bind('colorPalettes[currentPalette]?.second.txt');
        width: 40%;
        height: 80%;
        /* font-size:1.3rem; */
    }
    li.Sandbox {
        background-color: color-mix(v-bind('colorPalettes[currentPalette]?.third.bg'), transparent var(--transparency));
        color: v-bind('colorPalettes[currentPalette]?.third.txt');
    }
    .router-link {
        transition-duration: 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 1 auto;
        max-width: 100%;
        max-height: 100%;
    }
    h1 {
        font-size: clamp(1.5rem, 5vw, 2.5rem);
    }
    .router-link:not(:hover):not(:visited) {
        color: var(--almost-black);
    }
    .router-link:visited {
        color: var(--visited-link);
    }
    .router-link:hover {
        color: var(--almost-black);/* rgb(202, 202, 202); */
        background-color: orange;/* rgb(76, 175, 80); */
    }

    .place-holder-images {
        /* flex: 1 1 auto; */
        background-color: inherit;
        /* border-radius: 1vmin; */
        min-height: 0;
        min-width: 0;
        max-width: 90%;
        max-height: 50%;
        /* width: 100%;
        height: 100%; */
        /* height: auto;
        aspect-ratio: 1; */
        /* background-position: center;
        background-size: contain;
        background-repeat: no-repeat; */
    }
    
    /* .nav li:hover {
        position: relative;
        background-color: whitesmoke;
        border-radius: 10%;
    } */
    /* .dropdown {
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
        background-color: lightgray;
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
    } */
</style>