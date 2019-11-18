<template>
    <div>
        <!-- <transition name="fade"> -->
        <div v-if="onDetail">
            <work-detail @hideDetail="hideDetail" :item="selectedPrject"></work-detail>
        </div>
        <!-- </transition> -->
        <v-row>
            <v-col>
                <!-- subtitle="From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects." -->
                <page-title title="WORKS"></page-title>

                <section-divider></section-divider>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col class="tag__box">
                <v-chip
                    pill
                    :color="cardBg"
                    class="filter-tag"
                    v-for="tag in tags"
                    :key="tag.title"
                >
                    <span class="tag__title">{{tag.title}}</span>
                </v-chip>
            </v-col>
        </v-row>-->
        <v-row class="image__grid">
            <div
                class="image-box"
                v-for="project in projects"
                :key="project.id"
                data-aos="flip-up"
                :data-aos-delay="project.delay"
            >
                <work-image
                    :src="project.images[0]"
                    :title="project.title"
                    :subtitle="project.subtitle"
                    :git="project.git"
                    :demo="project.demo"
                    @showDetail="showDetail(project.id)"
                    @hideDetail="hideDetail"
                ></work-image>
            </div>
        </v-row>
        <!-- <v-row>
            <v-col class="more-btn-box">
                <app-button icon="mdi-plus" :color="grey"></app-button>
            </v-col>
        </v-row>-->
    </div>
</template>
<script>
import WorkImage from './WorkImage'
import PageTitle from '@/components/PageTitle'
import AppButton from '@/components/AppButton'
import SectionDivider from '@/components/shared/SectionDivider'
import WorkDetail from './WorkDetail'
import { mainProjects } from '../../data'
export default {
    name: 'my-work',
    components: {
        WorkImage,
        PageTitle,
        AppButton,
        SectionDivider,
        WorkDetail
    },
    data() {
        return {
            onDetail: false,
            projects: mainProjects,
            selectedPrject: null
        }
    },
    computed: {
        grey() {
            return this.$color['--font-grey-3']
        },
        cardBg() {
            return this.$color['--card-bg']
        }
    },
    methods: {
        showDetail(id) {
            this.onDetail = true
            let selectedId = mainProjects.findIndex((el, index) => {
                return el.id === id
            })
            this.selectedPrject = mainProjects[selectedId]
        },
        hideDetail() {
            this.onDetail = false
        }
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.more-btn:hover .plus-icon {
    transform: rotate(90deg);
}

.tag__box {
    display: flex;
    flex-wrap: wrap;
}
.filter-tag {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.2s;
}

.filter-tag.selected {
    background: var(--primary) !important;
}

.tag__title {
    color: var(--font-grey-1);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 14px;
}

.more-btn-box {
    display: flex;
    justify-content: center;
    margin-top: 72px;
}

.image__grid {
    display: grid;
    grid-gap: 21px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 270px;
    grid-auto-rows: 270px;
}

.image__grid .image-box {
    position: relative;
}

/* .image__grid .image-box:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(0, 0, 0, 0.5);
} */
/* .image__grid:hover .image-box:not(:hover):after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(0, 0, 0, 0.2);
} */

.image__grid .image-box:first-child {
    grid-column: span 2;
    grid-row: span 2;
}
.image__grid .image-box:nth-child(8) {
    grid-column: span 2;
    grid-row: span 2;
}

@media screen and (max-width: 960px) {
    .image__grid {
        grid-template-columns: 1fr 1fr;
    }

    .image__grid .image-box:first-child {
        grid-column: span 1;
        grid-row: span 1;
    }
    .image__grid .image-box:nth-child(8) {
        grid-column: span 1;
        grid-row: span 1;
    }
}

@media screen and (max-width: 600px) {
    .image__grid {
        grid-template-columns: 1fr;
        grid-row-gap: 12px;
        grid-template-rows: 320px;
        grid-auto-rows: 320px;
    }

    .tag__title {
        letter-spacing: 0px;
        font-size: 12px;
    }
    .tag__box {
        justify-content: center;
        align-items: center;
    }
}
</style>
