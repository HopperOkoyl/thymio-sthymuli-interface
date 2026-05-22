<script lang="ts">
    import check from '../assets/check.svg'
    import cross from '../assets/cross.svg'
    import { defineComponent } from 'vue'
    import * as Thymio from '../../../../../thymio3-ts-api/dist/thymio.mjs'

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
                connected: false,
                code: `
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
    time.sleep(0.2)`.trim()
            }
        },
        async mounted() {
            const script = document.createElement('script')
            script.src = '../../../../../../thymio3-ts-api/dist/thymio.global.js'
            script.onload = () => {
                this.thymio = (window as any).thymio
            }
            document.head.appendChild(script)
            // document.addEventListener("thymio-connected", (event) => {
            //         const customEvent = event as CustomEvent
            //         this.connected = customEvent.detail as boolean //may be true (connection) or false (disconnection)
            //         console.log(`thymio ${customEvent.detail ? "connected successfully" : "disconnected successfully"}`)
            //     })
        },
        methods: {
            connect() {
                if (this.thymio) {
                    this.thymio.requestAndConnect()
                    console.log("Connected")
                    console.log(this.thymio.isConnected())
                }
            },
            disconnect() {
                if (this.thymio) {
                    this.thymio.disconnect()
                    console.log("Disconnected")
                }
            },
            async executeClick() {
                await this.thymio.sendPythonScript(this.code);
                await this.thymio.executeLoadedScript();
            },
            async stopClick() {
                await this.thymio.stopScriptExecution();
            },
            // showConnectionWindow() {
            //     this.$emit('connectionWindow')
            //     console.log("show connection window")
            // }
        }
    })
</script>

<template>
    <!-- <button @click="showConnectionWindow()" class="connectivityStatus"><p><img :src="connected ? check : cross" alt="Check icon"> Thymio {{connected ? "connected" : "disconnected"}}</p></button> -->
    <div>
        <h1>Thymio 3 Test</h1>
        <div v-if="connected">
            <textarea v-model="code">
            </textarea>
            <button @click="executeClick()">Execute code</button>
            <button @click="stopClick()">Stop code execution</button>
        </div>
        <div>
            <button @click="connect();">Connect</button>
            <button @click="disconnect();">Disconnect</button>
        </div>
    </div>
</template>

<!-- <style scoped>
    img {
        height: 1em;
        width: auto;
        vertical-align: middle;
    }
    .connectivityStatus {
        background-color: white;
        border:0;
    }
</style> -->