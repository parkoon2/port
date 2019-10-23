<template>
    <v-app>
        <app-bar></app-bar>

        <v-content :style="{backgroundColor: bodyBg}" class="content">
            <v-container pa-5>
                <router-view></router-view>
            </v-container>
        </v-content>
        <!-- <app-footer></app-footer> -->
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

export default {
    components: {
        AppBar,
        AboutCard,
        SkillCard,
        MyWork,
        EducationTimeline,
        WorkDetail,
        AppFooter
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
}
</style>