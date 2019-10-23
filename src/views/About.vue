<template>
    <div class="about">
        <!-- About card -->
        <about-card></about-card>

        <!-- Download button -->
        <v-btn outlined large dark class="download-btn">DOWNLOAD RESUME</v-btn>
    </div>
</template>

<script>
import AboutCard from '@/components/card/AboutCard'
export default {
    name: 'about',
    components: { AboutCard }
}
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.download-btn {
    border-color: var(--font-gray-3);
    color: var(--font-gray-3);
    margin-top: 32px;
}
</style>
