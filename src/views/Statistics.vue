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
            ></statistic-card>

            <template v-if="isCountingRepoDone">
                <statistic-card
                    :data="totalRepo"
                    icon="mdi-floppy"
                    title="GIT REPO"
                    subtitle="total count of repository"
                ></statistic-card>
            </template>
            <statistic-card
                data="14"
                icon="mdi-briefcase"
                title="PROJECTS"
                :subtitle="projectFromNow"
            ></statistic-card>

            <statistic-card
                :data="careerFromNow"
                icon="mdi-account-badge-horizontal-outline"
                title="CAREER"
                subtitle="keep working"
            ></statistic-card>
        </div>
    </div>
</template>

<script>
import SectionDivider from '@/components/shared/SectionDivider'
import PageTitle from '@/components/PageTitle'
import StatisticCard from '@/components/card/StatisticCard'

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
            return `for ${moment().diff('2016-08-10', 'years')} years`
        },
        careerFromNow() {
            return moment().diff('2016-08-10', 'years')
        }
    },

    data() {
        return {
            totalRepo: 0,
            isCountingRepoDone: false
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    justify-items: center;
    align-items: center;
}

@media screen and (max-width: 600px) {
    .statistics {
        width: 90%;
    }
}
</style>
