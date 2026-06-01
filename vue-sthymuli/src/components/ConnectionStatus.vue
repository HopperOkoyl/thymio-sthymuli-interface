<script lang="ts">
    import check from '../assets/check.svg'
    import cross from '../assets/cross.svg'
    export default {
        data() {
            return {
                check,
                cross,
            }
        },
        props: {
            connectionStatus: Boolean,
        },
        emits: [
            'toggleConnectionWindow',
        ],
        methods: {
            toggleConnectionWindow() {
                this.$emit('toggleConnectionWindow')
                console.log("Toggle connection window")
            }
        },
        // async mounted() {
        //     document.addEventListener("thymio-connected", (event) => {
        //             const customEvent = event as CustomEvent
        //             this.connected = customEvent.detail as boolean //may be true (connection) or false (disconnection)
        //             console.log(`thymio ${this.connected ? "connected successfully" : "disconnected successfully"}`)
        //             this.$emit('thymioConnected', this.connected)
        //     })
        // },
    }
</script>
<template>
    <button @click="toggleConnectionWindow()" class="connectivityStatus"><p><img :src="connectionStatus ? check : cross" alt="Check icon"> Thymio {{connectionStatus ? "connected" : "disconnected"}}</p></button>
</template>

<style scoped>

    img {
        height: 1em;
        width: auto;
        vertical-align: middle;
    }
    .connectivityStatus {
        border:0;
        text-align: left;
        padding: 0;
    }

    .connectivityStatus:not(:hover) {
        background-color: inherit;
    }
</style>