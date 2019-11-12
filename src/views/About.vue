<template>
    <div class="about" id="about">
        <div class="about__bg">
            <div class="about__bg--triangle"></div>
        </div>
        <!-- About card -->
        <about-card></about-card>

        <!-- Download button -->
        <!-- <v-btn outlined large dark class="download-btn">DOWNLOAD RESUME</v-btn> -->
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
    align-items: center;
    width: 70%;
    margin: 27px auto;
    max-width: 1200px;
}
.about__bg {
    background: url('../assets/about-bg.jpg');
    background-size: cover;
    background-position: center center;
    height: 620px;
    width: 100%;
    position: absolute;
    top: -230px;
    left: 0;
}

.about__bg--triangle {
    position: absolute;
    bottom: -390px;
    left: 0;
    background: var(--body-bg);
    width: 200%;
    height: 390px;
    transform-origin: 0 100%;
    transform: rotate(-5deg);
}

/* .about__bg::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(44, 51, 64, 0.2);
    top: 0;
    left: 0;
} */

.download-btn {
    border-color: var(--font-grey-3);
    color: var(--font-grey-3);
    margin-top: 72px;
    width: 200px;
}

@media screen and (max-width: 600px) {
    .about {
        width: 95%;
    }
    .about__bg--triangle {
        width: 100%;
    }
}
</style>
