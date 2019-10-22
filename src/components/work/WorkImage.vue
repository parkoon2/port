<template>
    <div class="work-box">
        <v-img :src="src" aspect-ratio="1">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>

        <div class="work-info">
            <h1>TITLE</h1>
            <p>subtitle</p>
            <div class="work-actions">
                <v-icon class="work-action" color="red">mdi-close</v-icon>
                <v-icon class="work-action second" color="red">mdi-close</v-icon>
                <v-icon class="work-action third" color="red">mdi-close</v-icon>
            </div>
        </div>
    </div>
</template>
<script>
import WorkDetail from './WorkDetail'

export default {
    name: 'work-image',
    props: ['src'],
    components: {
        WorkDetail
    }
}
</script>

<style scoped>
.work-box {
    position: relative;
}

.work-info {
    padding: 10px 20px;
    position: absolute;
    bottom: 17px;
    transform: translateY(32px);
    transition: 0.3s;
}

.work-info h1 {
    color: #fff;
}

.work-info p {
    color: #ccc;
}

.work-action {
    /* padding: 10px 20px;
    position: absolute;
    bottom: 0; */
    transform: translateY(32px);

    visibility: hidden;
    opacity: 0;
    transition: 0.01s;
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
</style>