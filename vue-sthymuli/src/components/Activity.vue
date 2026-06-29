<script lang="ts">
import Challenges from './Challenges.vue';

import easyActivity from '../assets/Easy.svg';
import mediumActivity from '../assets/and.svg';
import medium3InOrActivity from '../assets/OR 3in.svg';
import mediumRGBActivity from '../assets/RGB leds.svg';
import { loadEnv } from 'vite';

export default {
    data() {
        return {
            activities: [
                {
                    name: 'pres',
                    imgs: [
                        easyActivity,
                        mediumActivity,
                        medium3InOrActivity,
                        mediumRGBActivity
                    ]
                }
            ],
            currentActivity: 0,
        }
    }
}
</script>

<template>
    <div class="Challenges block">
        <!-- <h1>Activity {{ $route.params.activityID }}</h1> -->
        <img @click="currentActivity = (currentActivity + 1) % activities[0]!.imgs.length" :src="activities[0]?.imgs[currentActivity]" alt="Activity prototype with puzzle pieces"/>
    </div>
</template>


<style scoped>
</style>