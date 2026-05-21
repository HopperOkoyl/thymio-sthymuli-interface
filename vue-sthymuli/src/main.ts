import './assets/main.css'
//TODO: adding router, use router.back() in components
// import type { ComponentCustomProperties } from 'vue'
// import type { Router } from 'vue-router'

// declare module '@vue/runtime-core' {
//     interface ComponentCustomProperties {
//         $router: Router
//     }
// }

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router)

router.afterEach((to) => {
    document.title = to.meta.title + " | Sthymuli"
})

app.mount('#app')