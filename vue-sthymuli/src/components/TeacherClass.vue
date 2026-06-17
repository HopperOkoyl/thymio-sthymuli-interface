<script lang="ts">
    type activitiesRow = {
        name: string,
        nb: number,
    }
    export default {
        data() {
            return {
                rows: [
                    {name: 'top', nb: 3},
                    {name: 'mid', nb: 4},
                    // {name: 'bot', nb: 3},
                ],
                selected: 1,
            }
        },
        methods: {
            select(i: number) {
                console.log(`${i} selected`)
                this.selected = i;
            }
        }
    }
</script>

<template>
    <div class="external-container">
        <div class="Teacher block">
            <h1>Activity Selection Screen (in development), topic id: {{ $route.params.topicId }}</h1>
            <div class="activities">
                <div v-for="row in rows" :class="row.name+' row'">
                    <ul>
                        <li v-for="n in row.nb">
                            <div class="image-placeholder">Image Placeholder</div>
                            <div class="description">
                                <h2>Activity title {{n}}</h2>
                                <p>Activity description details.</p>
                            </div>
                        </li>
                        <!-- <img src="" alt="activity preview"></img> -->
                    </ul>
                </div>
            </div>
            <div class="dots">
                <button v-for="i in 3" class="dot" :class="(i==selected) ? 'selected' : 'not-selected'" @click="select(i)"></button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .external-container {
        height: 100%;
        width: 100%;
        display: flex;
    }
    .activities {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
    }
    ul {
        list-style: none;
        list-style-type: none;
        padding: 0;
        display: flex;
        flex: 1 1 auto;
    }
    li {
        display: flex;
        flex: 1 1 auto;
        border: black;
        border-style: solid;
        border-radius: 10px;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        margin: 10px;
        min-height: 30%;
    }
    .row {
        display: flex;
        flex: 1 1 auto;
    }
    /* .top.row li {
        min-width: 30%
    }
    .mid.row li {
        min-width: 15%
    }
    .bot.row li {
        min-width: 20%
    } */
    .image-placeholder {
        border-style: solid;
        flex: 1 1 auto;
        margin: 10px;
        min-width: 10%;
        max-height: 70%;
        min-height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .description {
        margin: 10px;
    }
    .Teacher.block {
        justify-content: center;
        align-items: center;
    }

    .dots {
        display: flex;
        width: 30%;
        justify-content: space-evenly;
    }
    .dot {
        background-color: grey;
        border-style: solid;
        border-radius: 50%;
        width: 10%;
        aspect-ratio: 1;
    }
    .dot.selected {
        background-color: black;
    }
</style>