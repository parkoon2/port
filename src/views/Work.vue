<template>
    <div class="works" id="works">
        <my-work></my-work>
        <!-- <work-detail></work-detail> -->
    </div>
</template>

<script>
import MyWork from '@/components/work/MyWork'
import WorkDetail from '@/components/work/WorkDetail'
export default {
    name: 'work',
    components: { MyWork, WorkDetail }
}
</script>

<style scoped>
.works {
    width: 70%;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 120px;
}

@media screen and (max-width: 600px) {
    .works {
        width: 90%;
    }
}
</style>
