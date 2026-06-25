<script lang="ts">
import Instructions from './Instructions.vue';

    export default {
        components: {
            Instructions,
        },
        data() {
            return {
                show: false,
                // currentID: '',
            }
        },
        methods: {
            // openActivity(activityID: string) {
            //     this.currentID = activityID;
            //     console.log(`Current ID set to: ${this.currentID}`);
            //     this.show = true;
            // },
            // closeActivity() {
            //     this.show = false;
            //     this.currentID = '';
            //     console.log(`Current ID deleted: ${this.currentID}`);
            // }
        },
        watch: {
            // $route(newVal, oldVal) {
            //     console.log(`Watched: newVal: ${newVal.name}, oldVal: ${oldVal.name}`)
            //     console.log("NewVal = Instructions: ", newVal.name == 'Instructions');
            //     this.show = newVal.name == 'Instructions';
            // },
            // show(newVal, oldVal) {
            //     console.log("show changed to: ", newVal);
            // }
        },
        // async mounted() {
        //     window.addEventListener("popstate", (e) => {
        //         // const currentUrl = window.location.pathname;
        //         // console.log("Popstate state:", e.state);
        //         // console.log("current url:", currentUrl);
        //         // console.log("Detected URL change in ProgressPath: ", currentUrl);
        //         this.currentComponent = this.$router.currentRoute.value.name!.toString();
        //         console.log("Component name: ", this.currentComponent);
        //         if (this.currentComponent == 'Instructions') {
        //             console.log("Show popup");
        //             this.show = true;
        //             console.log(this.show);
        //         }
        //     });
        // },
    }
</script>

<template>
    <div class="Challenges block">
        <RouterView></RouterView>

        <!-- <RouterView :openDialog="show"
                v-on:close="show=false; console.log('closed by child routerView')"
                v-on:open="show=true; console.log('opened by child routerView')"
            >
        </RouterView> -->

        <!-- <dialog class="instructions popup" :open="show">
            <div class="popup-topbar"><button class="closeButton" @click="$router.back()">&#x2715;</button></div>
            <RouterView
                v-on:close="show=false; console.log('closed by child routerView')"
                v-on:open="show=true; console.log('opened by child routerView')"
            >
            </RouterView> -->
            <!-- <div class="popup-topbar"><button class="closeButton" @click="closeActivity()">&#x2715;</button></div>
            <Instructions :activityID="currentID"></Instructions> -->
        <!-- </dialog> -->
        <!-- <div v-if="show" @click="$router.back(); show = false; console.log('Instructions window closed by clicking on blur.')" class="blur"></div> -->
        <!-- <div v-if="show" @click="closeActivity();console.log('Instructions window closed by clicking on blur.')" class="blur"></div> -->
        <h1>{{ $route.params.roomID }} Room</h1>
        <div class="content">
            <div class="wrapper">
                <div class="image-fullscreen path"  :id="($route.params.roomID)?.toString().trim() + '-room'">
                    <RouterLink aria-label="Activity pres" :to="{name: 'Instructions', params: {activityID: 'pres'}}" class="activity-point">
                    </RouterLink>
                    <!-- <div @click="openActivity('pres')" class="activity-point">
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.Challenges.block {
    flex-direction: column;
    align-items:center;
    
    /* Change h1-proportion only: */
    --h1-proportion: 1.5; 
    --content-proportion: calc(10 - var(--h1-proportion));
}
/* .instructions.popup {
} */
h1 {
    --proportion: var(--h1-proportion);
    --margin: calc(0.25% * var(--proportion));
    margin: 0;
    font-size: 5vmin;
    /* flex: var(--proportion) var(--proportion) auto; */
    height: fit-content;
    /* max-height: calc(var(--proportion) * 10% - 2 * var(--margin)); */
    text-align: center;
    align-content: center;
}
.content {
    /* --proportion: var(--content-proportion);
    flex: var(--proportion) var(--proportion) auto; */
    flex: 1 1 auto;
    max-height: calc(var(--proportion) * 10%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrapper {
    flex: 1 1 auto;
    aspect-ratio: 1.78;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image-fullscreen {
    aspect-ratio: 1.78;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    max-height: 100%;
    max-width: 100%;
    /* max-height: calc(100% - 2 * (var(--topbot-small)) ); */
    display: flex;
    background-image: url(../assets/Path-Model-room.svg); /* Default in case there is an issue with IDs */
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
    justify-content: left;
    align-items: start;
}

#ComputerScience-room {
    background-image: url(../assets/Path-Computer\ Science-room.svg);
}
#Biology-room {
    background-image: url(../assets/Path-Biology-room.svg);
}
#French-room {
    background-image: url(../assets/Path-French-room.svg);
}
#German-room {
    background-image: url(../assets/Path-German-room.svg);
}
#Spanish-room {
    background-image: url(../assets/Path-Spanish-room.svg);
}
#Italian-room {
    background-image: url(../assets/Path-Italian-room.svg);
}

/* @media (orientation: landscape) {
    .path-surface {
        height: 100%;
    }
}
@media (orientation: portrait) {
    .path-surface {
        width: 100%;
    }
} */
/* .path-surface {
    aspect-ratio: 1.78;
    display: flex;
    justify-content: left;
    align-items: start;
} */
.activity-point {
    --border-width: 2pt;
    position:relative;
    top: 70.5%;
    left: 25.95%;
    height: calc(17% - 2 * var(--border-width));
    aspect-ratio: 1;
    border-style: solid;
    border-color: black;
    border-radius: 50%;
    border-width: var(--border-width);
}

#ComputerScience-room .activity-point {
    position:relative;
    top: 70.5%;
    left: 25.9%;
}
#Biology-room .activity-point {
    position:relative;
    top: 49.95%;
    left: 20.1%;
}
#French-room .activity-point {
    position:relative;
    top: 70.5%;
    left: 25.9%;
}
#German-room .activity-point {
    position:relative;
    top: 70.5%;
    left: 25.9%;
}
#Spanish-room .activity-point {
    position:relative;
    top: 70.5%;
    left: 25.9%;
}
/* .image-fullscreen { display:flex; align-items:center; justify-content:center; height:100vh; }
.image-fullscreen img{ max-width: 95vw; max-height: 95vh; width: 120%; height: auto; object-fit: contain; display: flex; align-items: center; pointer-events: none; } */
</style>