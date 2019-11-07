<template>
    <v-app>
        <app-bar></app-bar>

        <v-content :style="{backgroundColor: bodyBg}" class="content">
            <!-- <router-view></router-view> -->

            <about-page></about-page>

            <skill-page></skill-page>
            <work-page></work-page>

            <contact-page></contact-page>
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
        AppFooter,
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