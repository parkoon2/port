<template>
    <div class="my-work">
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
    width: 60%;
    margin: 0 auto;
}
</style>
