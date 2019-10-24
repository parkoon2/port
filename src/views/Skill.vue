<template>
    <!-- Skill Card -->
    <div class="skill" id="skills">
        <h2 class="page-title">Professional Skills</h2>
        <skill-card></skill-card>
    </div>
</template>

<script>
import SkillCard from '@/components/card/SkillCard'
export default {
    name: 'skill',
    components: { SkillCard }
}
</script>
<style scoped>
.skill {
    width: 60%;
    margin: 0 auto;
}
.page-title {
    color: var(--font-gray-3);
    font-size: 32px;
    text-align: center;
    margin-bottom: 27px;
}
</style>