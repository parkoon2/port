import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Work from '../views/Work'
import Contact from '../views/Contact'
import Skill from '../views/Skill'

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
        path: '/skill',
        name: 'skill',
        component: Skill
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
