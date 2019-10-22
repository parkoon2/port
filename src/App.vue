<template>
    <v-app>
        <app-bar></app-bar>

        <v-content>
            <v-container class="fill-height">
                <!-- About card -->
                <v-row justify="center" align="center">
                    <v-col>
                        <about-card></about-card>
                    </v-col>
                </v-row>
                <!-- Download button -->
                <v-row justify="center" align="center">
                    <v-col class="text-center">
                        <v-btn outlined large>DOWNLOAD RESUME</v-btn>
                    </v-col>
                </v-row>

                <!-- Skill Card -->
                <v-row justify="center" align="center">
                    <v-col>
                        <skill-card></skill-card>
                    </v-col>
                </v-row>

                <!-- Work -->
                <v-row justify="center" align="center" class="flex-column">
                    <h2>work</h2>
                    <v-col>
                        <my-work></my-work>
                        <!-- <work-detail></work-detail> -->
                    </v-col>
                </v-row>

                <!-- Timeline -->
                <v-row justify="center" align="center" class="flex-column">
                    <h2>Education</h2>
                    <v-col>
                        <education-timeline></education-timeline>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
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
    data: () => ({})
}
</script>