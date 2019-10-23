<template>
    <div class="about">
        <!-- About card -->
        <about-card></about-card>

        <!-- Download button -->
        <v-btn outlined large>DOWNLOAD RESUME</v-btn>
    </div>
</template>

<script>
import AboutCard from '@/components/card/AboutCard'
export default {
    name: 'about',
    components: { AboutCard }
}
</script>
