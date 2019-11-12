<template>
    <v-app>
        <app-bar></app-bar>

        <v-content :style="{backgroundColor: bodyBg}" class="content">
            <!-- <router-view></router-view> -->

            <about-page></about-page>

            <side-project-page></side-project-page>

            <skill-page></skill-page>

            <interest-page></interest-page>
            <statistics-page></statistics-page>
            <work-page></work-page>

            <!-- <contact-page></contact-page> -->
        </v-content>
        <!-- <floating-menu></floating-menu> -->
        <app-footer></app-footer>
    </v-app>
</template>
<script>
import SkillPage from './views/Skill'
import AboutPage from './views/About'
import WorkPage from './views/Work'
import ContactPage from './views/Contact'
import StatisticsPage from './views/Statistics'
import SideProjectPage from './views/SideProject'
import InterestPage from './views/Interest'
import FloatingMenu from '@/components/FloatingMenu'
import AppFooter from '@/components/shared/AppFooter'
import AppBar from '@/components/appbar/AppBar'

export default {
    components: {
        SkillPage,
        AboutPage,
        WorkPage,
        ContactPage,
        FloatingMenu,
        StatisticsPage,
        SideProjectPage,
        AppFooter,
        InterestPage,
        AppBar
    },
    computed: {
        bodyBg() {
            return this.$color['--body-bg']
        }
    },
    data: () => ({})
}
</script>
<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 200px !important;
}
</style>