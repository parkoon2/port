<template>
    <div class="statistic__card" ref="statistic-card">
        <div class="statistic__info">
            <div class="info__number" ref="number">{{ data }}</div>
            <div class="info__title">
                <v-icon>{{ icon }}</v-icon>
                {{ title }}
            </div>
            <div class="info__subtitle">{{ subtitle }}</div>
        </div>
    </div>
</template>

<script>
import { CountUp } from 'countup.js'

let counted = false
export default {
    name: 'statistic-card',
    props: ['data', 'title', 'subtitle', 'icon'],

    mounted() {
        // var countUp = new CountUp(this.$refs.number, this.data)
        // counted = false
        // window.addEventListener('scroll', () => {
        //     if (!this.$refs['statistic-card']) return
        //     const elHeight = document.getElementById('statistics').clientHeight
        //     if (
        //         this.$refs['statistic-card'].offsetTop <=
        //         window.scrollY + window.innerHeight - elHeight
        //     ) {
        //         countUp.start()
        //         if (!counted) {
        //             counted = true
        //             console.log('dz')
        //         }
        //     }
        // })
    }
}
</script>
<style scoped>
.statistic__card {
    border-bottom: 4px solid rgba(0, 0, 0, 0.3);
    height: 142px;
    width: 240px;
    color: var(--font-grey-1);
    padding-bottom: 32px;
    box-sizing: border-box;
}

.statistic__info .info__number {
    color: var(--primary);
    font-size: 50px;
}

.statistic__info .info__title i {
    color: var(--font-grey-1);
    font-size: 20px;
    margin-right: 4px;
}

.statistic__info .info__title {
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 5px;
}
.statistic__info .info__subtitle {
    font-size: 14px;
}

@media screen and (max-width: 960px) {
    .statistic__info .info__number {
        font-size: 42px;
    }
}
@media screen and (max-width: 600px) {
    .statistic__info .info__number {
        font-size: 32px;
    }

    .statistic__card {
        width: 100%;
        padding-bottom: 16px;
        height: 132px;
    }
}
</style>
