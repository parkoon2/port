<template>
    <div class="interest" id="interest">
        <page-title title="MY INTEREST"></page-title>

        <section-divider></section-divider>

        <interest-card></interest-card>
    </div>
</template>

<script>
import interestCard from '@/components/card/InterestCard'
import PageTitle from '@/components/PageTitle'
import SectionDivider from '@/components/shared/SectionDivider'

export default {
    name: 'interest',
    components: { interestCard, SectionDivider, PageTitle }
}
</script>

<style scoped>
.interest {
    width: 70%;
    margin: 120px auto;
    max-width: 1200px;
}

@media screen and (max-width: 600px) {
    .interest {
        width: 95%;
    }
}
</style>
