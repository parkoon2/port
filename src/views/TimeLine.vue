<template>
    <div class="timeline">
        <!-- Timeline -->
        <v-row justify="center" align="center" class="flex-column">
            <h2>Education</h2>
            <v-col>
                <education-timeline></education-timeline>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import EducationTimeline from '@/components/timeline/EducationTimeline'
export default {
    name: 'timeline',
    components: { EducationTimeline }
}
</script>
