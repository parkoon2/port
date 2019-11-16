<template>
    <v-app>
        <app-bar></app-bar>

        <v-content :style="{ backgroundColor: bodyBg }" class="content">
            <!-- <router-view></router-view> -->

            <about-page></about-page>
            <white-space></white-space>
            <side-project-page></side-project-page>
            <white-space></white-space>
            <skill-page></skill-page>
            <white-space></white-space>
            <interest-page></interest-page>
            <white-space></white-space>
            <statistics-page></statistics-page>
            <white-space></white-space>
            <work-page></work-page>
            <white-space></white-space>
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
import WhiteSpace from '@/components/shared/WhiteSpace'

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
        AppBar,
        WhiteSpace
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
    padding-bottom: 200px !important;
}
</style>
