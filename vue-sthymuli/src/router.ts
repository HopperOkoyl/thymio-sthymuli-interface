// import { createMemoryHistory, createRouter } from 'vue-router' //SSR and non-browser environment
import { createWebHistory, createRouter } from 'vue-router' //Use for normal browser app
//or createWebHashHistory() see History modes https://router.vuejs.org/guide/essentials/history-mode.html
import type { RouteRecordRaw } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import Sandbox from './components/Sandbox.vue'
import Teacher from './components/Teacher.vue'
import Challenges from './components/Challenges.vue'
import TeacherClass from './components/TeacherClass.vue'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
    }
}

const routes = [
    { path: '/', name: 'Home', component: HomeView, meta: {title: 'Home'} },
    { path: '/about', component: AboutView , meta: {title: 'About'}},
    { path: '/sandbox', component: Sandbox, meta: {title: 'Sandbox'} },
    { path: '/teacher', component: Teacher, meta: {title: 'Teacher'} },
    { path: '/teacher/:topicId',
        component: TeacherClass,
        name: 'TeacherClass',
        meta: {title: 'TeacherClass'},
        // children: [{
        //     path: '', component: TeacherClass,
        // }],
        // children: [{
        //     path: '/Computer Science', name: 'CS', component: Sandbox, meta: {title: 'CS'
        // }}],
    },
    { path: '/challenges', component: Challenges, meta: {title: 'Challenges'} },
]

// export const router = createRouter({ //SSR and non-browser environment
//     history: createMemoryHistory(),
//     routes,
// })

export const router = createRouter({ //Use for normal browser app
    history: createWebHistory(),
    routes,
})