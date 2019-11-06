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
.page-title {
    color: var(--font-gray-3);
    font-size: 32px;
    text-align: center;
    margin-bottom: 27px;
}
</style>