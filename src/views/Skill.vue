<template>
    <!-- Skill Card -->
    <div class="skill" id="skills">
        <skill-card></skill-card>
    </div>
</template>

<script>
import SkillCard from '@/components/card/SkillCard'
import PageTitle from '@/components/PageTitle'
export default {
    name: 'skill',
    components: { SkillCard, PageTitle }
}
</script>
<style scoped>
.skill {
    width: 70%;
    margin: 0 auto;
    margin-top: 120px;
    max-width: 1200px;
}

@media screen and (max-width: 600px) {
    .skill {
        width: 100%;
    }
}
</style>