import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import About from '../components/About.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: home,
        },
        {
            name: 'about',
            path: '/about',
            component: About,
        },

    ]
})
export default router