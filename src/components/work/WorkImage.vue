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
                <app-button
                    class="work-action"
                    icon="mdi-magnify-plus-outline"
                    :color="primary"
                    :onClick="() => { openDetail(id) }"
                ></app-button>
                <app-button
                    class="work-action second"
                    icon="mdi-github-circle"
                    :color="primary"
                    :onClick="() => { openWindow(git) }"
                ></app-button>
                <app-button
                    class="work-action third"
                    icon="mdi-eye-outline"
                    :color="primary"
                    :onClick="() => { openWindow(demo) }"
                ></app-button>
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
        openDetail(id) {
            alert(id)
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

.work-action {
    /* transform: translateY(32px); */
    visibility: hidden;
    opacity: 0;
    transition: 0.01s;
    margin-right: 10px;
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

.work-box:hover .work-action.second {
    transition-delay: 0.1s;
}
.work-box:hover .work-action.third {
    transition-delay: 0.2s;
}

.work-box:hover .work-action {
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