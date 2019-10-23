<template>
    <div class="skill">
        <!-- Skill Card -->

        <!-- Work -->
        <v-row justify="center" align="center" class="flex-column">
            <h2>work</h2>
            <v-col>
                <skill-card></skill-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SkillCard from '@/components/card/SkillCard'
export default {
    name: 'skill',
    components: { SkillCard }
}
</script>
