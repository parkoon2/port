<template>
    <v-app>
        <app-bar></app-bar>

        <v-content :style="{backgroundColor: bodyBg}" class="content">
            <v-container pa-5>
                <!-- <router-view></router-view> -->

                <about-page></about-page>

                <skill-page></skill-page>
                <work-page></work-page>

                <contact-page></contact-page>
            </v-container>
        </v-content>
        <floating-menu></floating-menu>
        <app-footer></app-footer>
    </v-app>
</template>
<script>
import AppBar from '@/components/appbar/AppBar'
import AboutCard from '@/components/card/AboutCard'
import SkillCard from '@/components/card/SkillCard'
import MyWork from '@/components/work/MyWork'
import EducationTimeline from '@/components/timeline/EducationTimeline'
import WorkDetail from '@/components/work/WorkDetail'
import AppFooter from '@/components/shared/AppFooter'

import SkillPage from './views/Skill'
import AboutPage from './views/About'
import WorkPage from './views/Work'
import ContactPage from './views/Contact'
import FloatingMenu from '@/components/FloatingMenu'

export default {
    components: {
        AppBar,
        AboutCard,
        SkillCard,
        MyWork,
        EducationTimeline,
        WorkDetail,
        AppFooter,
        SkillPage,
        AboutPage,
        WorkPage,
        ContactPage,
        FloatingMenu
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