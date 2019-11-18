<template>
    <div class="work-box">
        <img class="work-image" :src="src" />
        <div class="work-info">
            <div class="work-titles">
                <h2>{{title}}</h2>
                <p>{{subtitle}}</p>
            </div>
            <div class="work-actions">
                <div class="action__button" icon="mdi-magnify-plus-outline" @click="showDetail()">
                    MORE
                    <!-- <v-icon>mdi-dots-horizontal</v-icon> -->
                </div>
                <div
                    class="action__button"
                    icon="mdi-magnify-plus-outline"
                    @click="openWindow(git)"
                >
                    SOURCE
                    <!-- <v-icon>mdi-github-circle</v-icon> -->
                </div>
                <div
                    class="action__button"
                    icon="mdi-magnify-plus-outline"
                    @click="openWindow(demo)"
                >
                    DEMO
                    <!-- <v-icon>mdi-eye-check-outline</v-icon> -->
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
    overflow: hidden;
    cursor: pointer;
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
    bottom: 0px;
    /* transform: translateY(72px); */
    transition: 0.3s;
    z-index: 4;
}

.work-actions {
    display: flex;
}

.action__button {
    transition: 0.2s;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid var(--primary);
    cursor: pointer;
    color: var(--primary);
    /* font-weight: bold; */
}

.action__button:hover {
    background: var(--primary);
    color: var(--font-white);
}

.action__button:hover i {
    color: var(--font-grey-1);
}

.action__button i {
    color: var(--primary);
}

.work-titles {
    /* transform: translateY(72px); */
    transition: 0.3s ease-in-out;
}

.work-titles h2 {
    color: var(--font-white);
    font-weight: bold;
}

.work-titles p {
    color: var(--font-white);
}

.work-box:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.work-box .work-image {
    transition: 0.3s;
    -webkit-filter: grayscale(40%); /* Safari 6.0 - 9.0 */
    filter: grayscale(40%);
}
.work-box:hover .work-image {
    transform: scale(1.1);
}

.work-box:hover .work-box:hover .work-info {
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