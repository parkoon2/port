<template>
    <div>
        <!-- subtitle="From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects." -->
        <page-title title="PROFESIONAL SKILLS"></page-title>

        <section-divider></section-divider>

        <v-card data-aos="fade-right" id="skill-data">
            <div class="skill-container">
                <div class="skill-inner" v-for="skill in skills" :key="skill.name">
                    <h2 class="skill-title">{{ skill.name }}</h2>
                    <skill-bar :level="skill.level" :color="primary"></skill-bar>

                    <div class="skill-level">{{ skill.level }}%</div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import SectionDivider from '@/components/shared/SectionDivider'
import SkillBar from '@/components/SkillBar'
import { skills } from '../../data'
export default {
    name: 'skill-card',
    components: {
        PageTitle,
        SectionDivider,
        SkillBar
    },
    computed: {
        primary() {
            return this.$color['--primary']
        }
    },
    data() {
        return {
            skills: skills
        }
    }
}
</script>

<style scoped>
.skill-container {
    padding: 20px;
    background: var(--card-bg);
}

.skill-inner {
    display: inline-block;
    width: 50%;
    padding: 15px;
    color: var(--font-grey-3);
}

.skill-inner .skill-title {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 4px;
    text-transform: uppercase;
}
.skill-inner .skill-level {
    text-align: right;
    font-size: 0.9rem;
    margin-top: 2px;
}
@media screen and (max-width: 960px) {
    .skill-inner {
        width: 100%;
    }
}
@media screen and (max-width: 600px) {
    .skill-container {
        padding: 0px;
    }
}
</style>
