<template>
    <v-row>
        <v-col v-for="n in 9" :key="n" sm="6" md="4" xs="12" class="image-box">
            <work-image :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"></work-image>
        </v-col>
    </v-row>
</template>
<script>
import WorkImage from './WorkImage'
export default {
    name: 'my-work',
    components: {
        WorkImage
    }
}
</script>
<style scoped>
@media screen and (max-width: 600px) {
    .image-box {
        flex: 0 0 100%;
    }
}
</style>