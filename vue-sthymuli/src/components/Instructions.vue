<script lang="ts">
    import play from '../assets/noun-play-1570735.svg';
    import crown from '../assets/small-crown.png'

    type Class = {
        id: string,
        diff: number,
    }
    type Activity = {
        name: string,
        classes: Class[],
        tags: string[],
    }

    interface DataType {
        // IDs: String[];
        activities: Activity[],
        play: string,
        crown: string,
        maxDiff: number,
    };
    export default {
        props: {
            ID: String,
        },
        data(): DataType {
            return {
                // IDs: ['pres'],
                activities: [
                    {name: 'pres', classes: [{id: 'Computer Science', diff: 2}, {id: 'Biology', diff: 4}], tags: ['Logic', 'Leaves']}
                ],
                play,
                crown,
                maxDiff: 5,
            }
        },
        watch: {
            $route(newVal, oldVal) {
                console.log(`Watched in INSTRUCTIONS: newVal: ${newVal.name}, oldVal: ${oldVal.name}`)
            },
        },
        async mounted() {
            window.addEventListener("popstate", (e) => {
                // const currentUrl = window.location.pathname;
                // console.log("Popstate state:", e.state);
                // console.log("current url:", currentUrl);
                // console.log(e.state.current)
                // console.log(e.state.current.includes('Instructions'))
                if (e.state.current.includes('Instructions')) {
                    console.log("came back to Instructions");
                }
            });
        },
    }
</script>

<template>
    <div class="external-container">
        <dialog class="instructions popup" :open="true">
            <div class="popup-topbar"><button class="closeButton" @click="$router.back()">&#x2715;</button></div>
            <div class="middle">
                <div class="left content">
                    <h1>Difficulty and class</h1>
                    <div class="left-aligned">
                        <div v-for="classTopic in activities[0]!.classes">
                            <div class="line crown">
                                <p>{{classTopic.id}}: &nbsp;</p>
                                <div>
                                    <img v-for="_ in classTopic.diff" :src="crown" alt="crown"></img>
                                    <img class="grey" v-for="_ in (maxDiff - classTopic.diff)" :src="crown" alt="grey-crown"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="line"><p>Tags: {{activities[0]!.tags.join(', ') }}</p></div>
                </div>
                <div class="separation-bar"></div>
                <div class="right content">
                    <h1>Instructions</h1>
                    <p>Activity ID: {{ $route.params.activityID }}</p>
                    <p>Instructions paragraph for activity with ID '{{ $route.params.activityID }}' before starting the activity.</p>
                </div>
            </div>
            <div class="bottom">
                <RouterLink class="router-link" :to="{name: 'Activity', params: {activityID: $route.params.activityID}}"><img class="start" :src="play" alt="play"/><p class="start">Start activity</p></RouterLink>
            </div>
        </dialog>
        <div @click="$router.back(); console.log('Instructions window closed by clicking on blur.')" class="blur"></div>
        <!-- <h1>Instructions</h1>
        <p>{{ ID }} hey</p>
        <RouterLink v-for="id in IDs" :to="{name: 'Activity', params: {activityID: 'pres'}}">Click me</RouterLink>
        <button @click="$emit('close')">close</button> -->
        <!-- <RouterLink :to="{name: 'Activity', params: {activityID: ID}}">Click me</RouterLink> -->
        <!-- <img src="" alt="" /> -->
    </div>
</template>


<style scoped>
    .external-container {
        position: fixed;
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .popup-topbar {
        display: flex;
        width: 100%;
        max-width: 100%;
        justify-content: right;
    }
    .popup {
        width: 80%;
        max-width: 80%;
        height: 70%;
        max-height: 70%;
        display: flex;
        flex-direction: column;
    }
    .middle {
        flex: 1 1 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .content {
        --margin: 50px;
        margin: 0 var(--margin);
        /* flex: 1 1 auto; */
        height: 100%;
        max-height: 100%;
        width: calc(50% - var(--margin));
        max-width: calc(50% - var(--margin));
        display: flex;
        flex-direction: column;
        text-align: justify;
    }
    h1 {
        text-align: center;
    }
    .separation-bar {
        border: solid;
        border-width: thin;
        height: 80%;
    }
    .left-aligned {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: start;
        width:fit-content

    }
    .line {
        display:flex;
        align-items: center;
    }
    .crown {
        justify-content: space-between;
    }
    .line img {
        height: 1em;
        margin: 0 5px;
    }
    img.grey {
        filter: saturate(0);    
    }
    .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 20px 0;
    }
    .router-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bottom .start {
        margin: 5px;
    }
    .bottom img {
        height: 2em;
    }

</style>