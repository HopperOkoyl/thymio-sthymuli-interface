<script lang="ts">
    import check from '../assets/check.svg'
    import cross from '../assets/cross.svg'
    import { defineComponent } from 'vue'
    import * as Thymio from '../../../../../thymio3-ts-api/dist/thymio.mjs'
    // export default {
    //     // components: {
    //     //     check
    //     // },
    //     emits: [
    //         'connectionWindow'
    //     ],
    //     data() {
    //         return { check }
    //     },
    //     methods : {
    //         showConnectionWindow() {
    //         this.$emit('connectionWindow')
    //         console.log("show connection window")
    //         }
    //     }
    // },

    // declare global {
    //     var thymio: any
    // }

    //Put in dependencies in package.json:
    //     "thymio3-ts-api": "file:../../../thymio3-ts-api"


    export default defineComponent({
        name: 'ThymioComponent',
        emits: [
            'connectionWindow'
        ],
        data() {
            return {
                thymio: Thymio,
                check,
                cross,
                connected: false
            }
        },
        async mounted() {
            const script = document.createElement('script')
            script.src = '../../../../../../thymio3-ts-api/dist/thymio.global.js'
            script.onload = () => {
                this.thymio = (window as any).thymio
            }
            document.head.appendChild(script)
            // this.thymio = window.thymio
        },
        methods: {
            connect() {
                if (this.thymio) {
                    this.thymio.requestAndConnect()
                    this.connected = true //TODO: only if successful
                    console.log("Connected")
                }
            },
            disconnect() {
                if (this.thymio) {
                    this.thymio.disconnect()
                    this.connected = false
                    console.log("Disconnected")
                }
            },
            showConnectionWindow() {
                this.$emit('connectionWindow')
                console.log("show connection window")
            }
        }
    })
</script>

<template>
    <button @click="showConnectionWindow();connect()" class="connectivityStatus"><p><img :src="connected ? check : cross" alt="Check icon"> Thymio {{connected ? "connected" : "disconnected"}}</p></button>
    <div>
        <h1>Thymio 3 Test</h1>
        <div v-if="connected">
            <textarea id="code-input">
                import thymio
                import time
                mot = thymio.MOTORS()
                mot.set_speed(200, -200)
                rgb_fl = thymio.LEDS_RGB(0)
                while 1:
                    rgb_fl.set_intensity(1, 0, 0)
                    time.sleep(0.2)
                    rgb_fl.set_intensity(0, 1, 0)
                    time.sleep(0.2)
                    rgb_fl.set_intensity(0, 0, 1)
                    time.sleep(0.2)
            </textarea>
            <button onclick="executeClick()">Execute code</button>
            <button onclick="stopClick()">Stop code execution</button>
        </div>
        <div>
            <button @click="connect();">Connect</button>
            <button @click="disconnect();">Disconnect</button>
        </div>
    </div>
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