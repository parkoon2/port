<template>
    <div class="side-project" id="side-project">
        <page-title title="SIDE PROEJCT"></page-title>

        <section-divider></section-divider>
        <side-project></side-project>
    </div>
</template>

<script>
import SideProject from '@/components/work/SideProject'
import PageTitle from '@/components/PageTitle'
import SectionDivider from '@/components/shared/SectionDivider'
export default {
    components: { SideProject, PageTitle, SectionDivider }
}
</script>

<style scoped>
.side-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 120px auto;
    max-width: 1200px;
}

@media screen and (max-width: 600px) {
    .side-project {
        width: 95%;
    }
}
</style>
