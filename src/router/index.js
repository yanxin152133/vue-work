import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
        },
    ],
})

export default router