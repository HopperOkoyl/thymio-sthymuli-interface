<script lang="ts">
    import check from '../assets/check.svg'
    import cross from '../assets/cross.svg'
    import { defineComponent } from 'vue'
    import * as Thymio from '../../../../../thymio3-ts-api/dist/thymio.mjs'
    import {ref, watch} from 'vue'

    //Put in dependencies in package.json:
    //     "thymio3-ts-api": "file:../../../thymio3-ts-api"
    export default defineComponent({
        props: {
            popupState: Boolean,
        },
        watch: {
            popupState(newState) {
                console.log(`New popup state received in child: ${newState}`)
                if (!newState && this.loading) { //Popup was closed while waiting for connection
                    this.loading = false
                }
            }
        },
        emits: [
            'connectionWindow',
            'isThymioConnected',
        ],
        data() {
            return {
                thymio: Thymio,
                check,
                cross,
                connected: false,
                loading: false,
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
            document.addEventListener("thymio-connected", (event) => {
                const customEvent = event as CustomEvent
                this.connected = customEvent.detail as boolean //may be true (connection) or false (disconnection)
                console.log(`thymio ${this.connected ? "connected successfully" : "disconnected successfully"}`)
                this.$emit('isThymioConnected', this.connected)
                this.loading = false //not loading anymore if clicked "connect" and it worked or clicked "disconnect" (and it worked)
                console.log(`isConnected property of thymio: ${this.thymio.isConnected()}`)
                // TODO: Error to catch from browser: thymio.ts:67 Uncaught (in promise) NotFoundError: User cancelled the requestDevice() chooser.
                // TODO: Error to catch from browser: Uncaught (in promise) Error: Web Bluetooth not supported
                    //TODO: if browser is firefox: suggest to use chrome/safari/... if also OS is linux based => suggest to use Chrome with the correct experimental setting set
            })
        },
        methods: {
            connect() {
                if (this.thymio) {
                    this.loading = true
                    this.thymio.requestAndConnect()
                    console.log("Connection request sent")
                }
            },
            disconnect() {
                if (this.thymio) {
                    this.loading = false
                    this.connected = false
                    this.thymio.disconnect()
                    console.log("Disconnection request sent")
                }
            },
            async executeClick() {
                await this.thymio.sendPythonScript(this.code);
                await this.thymio.executeLoadedScript();
            },
            async stopClick() {
                await this.thymio.stopScriptExecution();
            },
        }
    })
</script>



<template>
    <div class="popup">
        <h1>Connection to Thymio</h1>
        <div>
            <button @click="connected ? disconnect() : connect()"> {{connected ? 'Disconnect' : 'Connect'}}</button>
        </div>
        <div class="connected" v-if="connected">
            <textarea v-model="code">
            </textarea>
            <div>
                <button @click="executeClick()">Execute code</button>
                <button @click="stopClick()">Stop code execution</button>
            </div>
        </div>
        <div class="loading" v-else-if="loading">
            <p>Waiting for connection...</p>
        </div>
    </div>
</template>

<style scoped>
    .popup {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .connected, .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
    }

    textarea {
        field-sizing: content;
        max-width: 95%;
        min-width: 10%;
        min-height: 20%;
}
</style>