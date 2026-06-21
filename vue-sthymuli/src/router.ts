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
import ProgressPath from './components/ProgressPath.vue'
import Instructions from './components/Instructions.vue'
import Description from './components/Description.vue'
import NotFound from './components/NotFound.vue'
import Settings from './components/Settings.vue'
import TeacherSettings from './components/TeacherSettings.vue'
import Licence from './components/Licence.vue'
import Activities from './components/Activities.vue'
import Activity from './components/Activity.vue'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
    }
}

const routes = [
    { path: '/', name: 'Home', component: HomeView, meta: {title: 'Home'} },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {title: 'NotFound'} } ,
    { path: '/settings', name: 'Settings', component: Settings, meta: {title: 'settings'}  },
    { path: '/about', name: 'About', component: AboutView , meta: {title: 'About'} },
    { path: '/sandbox', name: 'Sandbox', component: Sandbox, meta: {title: 'Sandbox'} },
    { path: '/teacher',
        name: 'Teacher',
        component: Teacher,
        meta: {title: 'Teacher'},
        children: [
            { path: 'teacher-settings', name: 'teacher-settings', component: TeacherSettings, meta: {title: 'Teachcher settings'}  },
        ] },
    { path: '/teacher/:topicId',
        name: 'TeacherClass',
        component: TeacherClass,
        meta: {title: 'Teacher Selection Menu'},
        children: [
            { path: 'Description/:activityID', name: 'Description', component: Description, meta: {title: 'Description'} },
        ]
    },
    { path: '/challenges', name: 'Challenges', component: Challenges, meta: {title: 'Challenges'} },
    { path: '/challenges/:roomID',
        component: ProgressPath,
        name: 'ProgressPath',
        meta: {title: 'ProgressPath'},
        children: [
            { path: 'Instructions/:activityID', name: 'Instructions', component: Instructions, meta: {title: 'Instructions'}}
        ]
    },
    { path: '/activities',
        component: Activities,
        name: 'Activities',
        meta: {title: 'Activities'},
    },
    { path: '/activities/:activityID',
        component: Activity,
        name: 'Activity',
        meta: {title: 'Activity'},
    },
    { path: '/Licence', name: 'Licence', component: Licence, meta: {title: 'Licence'} },
]

// export const router = createRouter({ //SSR and non-browser environment
//     history: createMemoryHistory(),
//     routes,
// })

export const router = createRouter({ //Use for normal browser app
    history: createWebHistory(),
    routes,
})