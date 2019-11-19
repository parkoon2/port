<template>
    <div class="statistics" id="statistics">
        <page-title title="ANY STATISTICS"></page-title>

        <section-divider></section-divider>

        <div class="statistic__wrapper">
            <statistic-card
                :data="dayFromBorn"
                icon="mdi-baby-carriage"
                title="AGE"
                subtitle="day from the born"
                data-aos="fade-up"
            ></statistic-card>

            <template v-if="isCountingRepoDone">
                <statistic-card
                    :data="totalRepo"
                    icon="mdi-floppy"
                    title="GIT REPO"
                    subtitle="total count of repository"
                    data-aos="fade-up"
                    data-aos-delay="100"
                ></statistic-card>
            </template>
            <statistic-card
                :data="totalProjects"
                icon="mdi-briefcase"
                title="PROJECTS"
                :subtitle="projectFromNow"
                data-aos="fade-up"
                data-aos-delay="200"
            ></statistic-card>

            <statistic-card
                :data="careerFromNow"
                icon="mdi-account-badge-horizontal-outline"
                title="CAREER"
                subtitle="keep working"
                data-aos="fade-up"
                data-aos-delay="300"
            ></statistic-card>
            {{ page }}
        </div>
    </div>
</template>

<script>
import SectionDivider from '@/components/shared/SectionDivider'
import PageTitle from '@/components/PageTitle'
import StatisticCard from '@/components/card/StatisticCard'

import { mainProjects } from '../data'

import moment from 'moment'

let page = 1
let totalCount = 0
export default {
    name: 'statistics',
    components: { SectionDivider, PageTitle, StatisticCard },
    computed: {
        dayFromBorn() {
            return moment().diff('1990-09-17', 'days')
        },
        projectFromNow() {
            return `for ${moment().diff('2016-08-10', 'years')} years in office`
        },
        careerFromNow() {
            return moment().diff('2016-08-10', 'years')
        }
    },

    data() {
        return {
            totalRepo: 0,
            isCountingRepoDone: false,
            totalProjects: mainProjects.length
        }
    },
    methods: {
        async getGithubRepoCount(page) {
            const r = await this.$axios.get(
                `https://api.github.com/users/parkoon/repos?page=${page}`
            )
            return r.data.length
        }
    },
    async mounted() {
        for (let i = 1; i > 0; i++) {
            let count = await this.getGithubRepoCount(page)
            if (count === 0) {
                i = -1
                this.totalRepo = totalCount
                this.isCountingRepoDone = true
            } else {
                page++
                totalCount += count
            }
        }
    }
}
</script>

<style scoped>
.statistics {
    width: 70%;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 120px;
}

.statistics .statistic__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    width: 100%;
    grid-gap: 12px;
    justify-items: center;
    align-items: center;
}
@media screen and (max-width: 960px) {
    .statistics .statistic__wrapper {
        grid-template-columns: repeat(2, minmax(240px, 1fr));
    }
}

@media screen and (max-width: 600px) {
    .statistics {
        width: 90%;
    }

    .statistics .statistic__wrapper {
        grid-template-columns: repeat(1, minmax(240px, 1fr));
    }
}
</style>
