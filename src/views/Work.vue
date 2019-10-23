<template>
    <v-row justify="center" align="center" class="flex-column">
        <h2>work</h2>
        <v-col>
            <my-work></my-work>
            <!-- <work-detail></work-detail> -->
        </v-col>
    </v-row>
</template>

<script>
import MyWork from '@/components/work/MyWork'
export default {
    name: 'work',
    components: { MyWork }
}
</script>
