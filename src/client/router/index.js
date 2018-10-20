import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home, 
            meta: { title: 'Home' }
        }
    ]
})

export default router