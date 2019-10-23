import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Work from '../views/Work'
import Contact from '../views/Contact'
import Skill from '../views/Skill'
import TimeLine from '../views/TimeLine'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/skills',
        name: 'skills',
        component: Skill
    },
    {
        path: '/works',
        name: 'works',
        component: Work
    },
    {
        path: '/timeline',
        name: 'timline',
        component: TimeLine
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
