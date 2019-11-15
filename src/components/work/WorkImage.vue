<template>
    <div class="work-box">
        <v-img class="work-image" :src="src" aspect-ratio="1">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <!-- <img class="work-image" :src="src" /> -->
        <div class="work-info">
            <div class="work-titles">
                <h2>{{title}}</h2>
                <p>{{subtitle}}</p>
            </div>
            <div class="work-actions">
                <div class="action__button" icon="mdi-magnify-plus-outline" @click="showDetail()">
                    <v-icon>mdi-dots-horizontal</v-icon>
                </div>
                <div
                    class="action__button"
                    icon="mdi-magnify-plus-outline"
                    @click="openWindow(git)"
                >
                    <v-icon>mdi-github-circle</v-icon>
                </div>
                <div
                    class="action__button"
                    icon="mdi-magnify-plus-outline"
                    @click="openWindow(demo)"
                >
                    <v-icon>mdi-eye-check-outline</v-icon>
                </div>
                <!-- <app-button
                    class="action__button second"
                    icon="mdi-github-circle"
                    :color="primary"
                    :onClick="() => { openWindow(git) }"
                ></app-button>
                <app-button
                    class="action__button third"
                    icon="mdi-eye-outline"
                    :color="primary"
                    :onClick="() => { openWindow(demo) }"
                ></app-button>-->
            </div>
        </div>
    </div>
</template>
<script>
import WorkDetail from './WorkDetail'
import AppButton from '@/components/AppButton'
import { openNewWindow } from '@/helper/util'

export default {
    name: 'work-image',
    props: ['id', 'src', 'title', 'subtitle', 'git', 'demo', 'tags'],
    components: {
        WorkDetail,
        AppButton
    },
    computed: {
        primary() {
            return this.$color['--primary']
        }
    },
    methods: {
        openWindow(url) {
            openNewWindow(url)
        },
        showDetail(id) {
            this.$emit('showDetail')
        }
    }
}
</script>

<style scoped>
.work-box {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    height: 100%;
}

.work-box .work-image {
    width: 100%;
    height: 100%;
}

.work-box::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
}

.work-info {
    padding: 10px 20px;
    position: absolute;
    bottom: 17px;
    /* transform: translateY(72px); */
    transition: 0.3s;
    z-index: 4;
}

.work-info h2 {
    color: #fff;
}

.work-info p {
    color: #ccc;
}

.work-actions {
    display: flex;
}

.action__button {
    position: relative;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid var(--primary);
    cursor: pointer;
}
/* .action__button .button__tooltip {
    position: absolute;
    bottom: 0;
    display: inline-block;
    text-align: center;
    width: 62px;
    font-size: 0.9rem;
    background: rgba(0, 0, 0, 0.8);
    color: var(--font-grey-1);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
} */

.action__button:hover {
    background: var(--primary);
}

/* .action__button:hover .button__tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -32px;
}

.action__button:hover .button__tooltip::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 30%;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.8);
} */

.action__button:hover i {
    color: var(--font-grey-1);
}

.action__button i {
    color: var(--primary);
}

.work-titles {
    transform: translateY(72px);
    transition: 0.3s ease-in-out;
}

.work-box:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.work-box:hover .work-titles {
    transform: translateY(0);
}

.work-box:hover .action__button.second {
    transition-delay: 0.1s;
}
.work-box:hover .action__button.third {
    transition-delay: 0.2s;
}

.work-box:hover .action__button {
    visibility: visible;

    opacity: 1;
    /* transform: translateY(-17px); */
    transform: translateY(0px);
    transition: 0.3s;
}
.work-box:hover .work-info {
    transform: translateY(0px);
}
.work-image {
    width: 100%;
    /* width:  */
}
.work-image:hover .work-info {
    transform: translateY(200px);
}
</style>