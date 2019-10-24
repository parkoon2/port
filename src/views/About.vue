<template>
    <div class="about" id="about">
        <div class="about-bg"></div>
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
.about-bg {
    background: url('https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2016/02/rs-cover-2-2-1-1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
    width: 100%;
    position: absolute;
    top: -113px;
    left: 0;
}
.about-bg::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(44, 51, 64, 0.8);
    top: 0;
    left: 0;
}
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
