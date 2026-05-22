<script lang="ts">
    import check from '../assets/check.svg'
    import cross from '../assets/cross.svg'
    export default {
        data() {
            return {
                check,
                cross,
                connected: false
            }
        },
        emits: [
            'showConnectionWindow'
        ],
        methods: {
            showConnectionWindow() {
                this.$emit('showConnectionWindow')
                console.log("show connection window")
            }
        },
        async mounted() {
            document.addEventListener("thymio-connected", (event) => {
                    const customEvent = event as CustomEvent
                    this.connected = customEvent.detail as boolean //may be true (connection) or false (disconnection)
                    console.log(`thymio ${customEvent.detail ? "connected successfully" : "disconnected successfully"}`)
                })
        },
    }
</script>
<template>
    <button @click="showConnectionWindow()" class="connectivityStatus"><p><img :src="connected ? check : cross" alt="Check icon"> Thymio {{connected ? "connected" : "disconnected"}}</p></button>
</template>

<style scoped>
    img {
        height: 1em;
        width: auto;
        vertical-align: middle;
    }
    .connectivityStatus {
        background-color: white;
        border:0;
    }
</style>