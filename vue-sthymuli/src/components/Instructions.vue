<script lang="ts">
    interface DataType {
        IDs: String[];
    };
    export default {
        props: {
            // ID: String,
        },
        data(): DataType {
            return {
                IDs: ['pres'],
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
            <h2>Instructions</h2>
            <p>Activity ID: {{ $route.params.activityID }}</p>
            <p>Instructions paragraph for activity with ID '{{ $route.params.activityID }}' before starting the activity.</p>
            <RouterLink v-for="id in IDs" :to="{name: 'Activity', params: {activityID: id.toString()}}">Start activity</RouterLink>
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
</style>