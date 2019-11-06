<template>
    <div class="my-work" id="works">
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
.my-work {
    width: 70%;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 120px;
}
</style>
